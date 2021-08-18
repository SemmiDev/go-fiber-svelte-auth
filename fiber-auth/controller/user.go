package controller

import (
	"github.com/SemmiDev/fiber-auth/entity"
	"github.com/SemmiDev/fiber-auth/util"
	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
	"github.com/lib/pq"
	"golang.org/x/crypto/bcrypt"
	"regexp"
	"time"
)

var (
	secretKey   = "secret"
	emailRegexp = regexp.MustCompile("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$")
)

type UserController struct {
	userRepo entity.UserRepository
}

func NewUserController(userRepo entity.UserRepository) *UserController {
	return &UserController{userRepo: userRepo}
}

func (c *UserController) Register(ctx *fiber.Ctx) error {
	var req map[string]string
	if err := ctx.BodyParser(&req); err != nil {
		return err
	}

	bytes, _ := bcrypt.GenerateFromPassword([]byte(req["password"]), 5)
	user := entity.User{
		ID:        uuid.NewString(),
		Name:      req["name"],
		Email:     req["email"],
		Password:  string(bytes),
		CreatedAt: util.NewTime(util.Time{Date: time.Now()}).FormatDate(),
	}

	if emailRegexp.MatchString(user.Email) == false {
		return ctx.Status(fiber.StatusBadRequest).JSON("email is not valid")
	}

	response, err := c.userRepo.Save(ctx.Context(), user)
	if err != nil {
		if pqErr, ok := err.(*pq.Error); ok {
			switch pqErr.Code.Name() {
			case "unique_violation":
				return ctx.Status(fiber.StatusForbidden).JSON(fiber.Map{"message": "user already exists"})
			}
		}
		return ctx.Status(fiber.StatusInternalServerError).JSON(err.Error())
	}

	return ctx.Status(fiber.StatusCreated).JSON(response)
}

func (c *UserController) GetUser(ctx *fiber.Ctx) error {
	cookie := ctx.Cookies("jwt")

	token, err := jwt.ParseWithClaims(cookie, &jwt.StandardClaims{}, func(token *jwt.Token) (interface{}, error) {
		return []byte(secretKey), nil
	})

	if err != nil {
		return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"message": "unauthenticated",
		})
	}

	claims := token.Claims.(*jwt.StandardClaims)
	user, err := c.userRepo.Get(ctx.Context(), claims.Issuer)
	if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": "user not found"})
	}

	return ctx.Status(fiber.StatusOK).JSON(user)
}

func (c *UserController) Login(ctx *fiber.Ctx) error {
	var req map[string]string
	if err := ctx.BodyParser(&req); err != nil {
		return ctx.Status(fiber.StatusUnprocessableEntity).JSON(err)
	}

	user, err := c.userRepo.GetByEmail(ctx.Context(), req["email"])
	if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"messageL": "user not found"})
	}

	if emailRegexp.MatchString(user.Email) == false {
		return ctx.Status(fiber.StatusBadRequest).JSON("email is not valid")
	}

	err = bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req["password"]))
	if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"message": "incorrect password"})
	}

	claims := jwt.NewWithClaims(jwt.SigningMethodHS256, jwt.StandardClaims{
		Issuer:    user.ID,
		ExpiresAt: time.Now().Add(time.Hour * 24).Unix(),
	})

	token, err := claims.SignedString([]byte(secretKey))
	if err != nil {
		return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "could not login",
		})
	}

	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    token,
		Expires:  time.Now().Add(time.Hour * 24),
		HTTPOnly: true,
	}
	ctx.Cookie(&cookie)

	return ctx.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "success",
	})
}

func (c *UserController) Logout(ctx *fiber.Ctx) error {
	cookie := fiber.Cookie{
		Name:     "jwt",
		Value:    "",
		Expires:  time.Now().Add(-time.Hour),
		HTTPOnly: true,
	}

	ctx.Cookie(&cookie)
	return ctx.Status(fiber.StatusOK).JSON(fiber.Map{
		"message": "successfully logout",
	})
}
