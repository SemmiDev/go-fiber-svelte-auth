package repository

import (
	"context"
	"database/sql"
	"github.com/SemmiDev/fiber-auth/entity"
)

const (
	CreateUserCommand   = `INSERT INTO users (id, name, email, password, created_at) VALUES ($1, $2, $3, $4, $5)  RETURNING id, name, email, password, created_at`
	GetUserByIdQuery    = `SELECT id, name, email, password, created_at FROM users WHERE id = $1`
	GetUserByEmailQuery = `SELECT id, name, email, password, created_at FROM users WHERE email = $1`
)

type Repo struct {
	db *sql.DB
}

func NewUserRepository(db *sql.DB) entity.UserRepository {
	return &Repo{
		db: db,
	}
}

func (r *Repo) Save(c context.Context, u entity.User) (*entity.User, error) {
	row := r.db.QueryRowContext(c, CreateUserCommand, u.ID, u.Name, u.Email, u.Password, u.CreatedAt)
	var user entity.User
	err := row.Scan(
		&user.ID,
		&user.Name,
		&user.Email,
		&user.Password,
		&user.CreatedAt,
	)
	return &user, err
}

func (r *Repo) Get(c context.Context, id string) (*entity.User, error) {
	row := r.db.QueryRowContext(c, GetUserByIdQuery, id)
	var user entity.User
	err := row.Scan(
		&user.ID,
		&user.Name,
		&user.Email,
		&user.Password,
		&user.CreatedAt,
	)
	return &user, err
}

func (r *Repo) GetByEmail(c context.Context, email string) (*entity.User, error) {
	row := r.db.QueryRowContext(c, GetUserByEmailQuery, email)
	var user entity.User
	err := row.Scan(
		&user.ID,
		&user.Name,
		&user.Email,
		&user.Password,
		&user.CreatedAt,
	)
	return &user, err
}
