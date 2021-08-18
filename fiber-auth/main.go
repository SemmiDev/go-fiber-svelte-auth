package main

import (
	"github.com/SemmiDev/fiber-auth/controller"
	"github.com/SemmiDev/fiber-auth/database"
	"github.com/SemmiDev/fiber-auth/repository"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()

	app.Use(cors.New(cors.Config{
		AllowCredentials: true,
	}))
	app.Use(logger.New())

	postgresConnection := database.NewConnection()
	userRepository := repository.NewUserRepository(postgresConnection)
	userController := controller.NewUserController(userRepository)

	v1 := app.Group("/api/v1")
	v1.Get("/user", userController.GetUser)
	v1.Post("/register", userController.Register)
	v1.Post("/login", userController.Login)
	v1.Post("/logout", userController.Logout)

	app.Listen(":8080")
}
