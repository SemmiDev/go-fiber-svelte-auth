package entity

import (
	"context"
	"time"
)

type User struct {
	ID        string    `json:"id"`
	Name      string    `json:"name"`
	Email     string    `json:"email"`
	Password  string    `json:"-"`
	CreatedAt time.Time `json:"created_at"`
}

type UserRepository interface {
	Save(c context.Context, u User) (*User, error)
	Get(c context.Context, id string) (*User, error)
	GetByEmail(c context.Context, email string) (*User, error)
}
