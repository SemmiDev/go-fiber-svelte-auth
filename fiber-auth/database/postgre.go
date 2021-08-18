package database

import (
	"database/sql"
	"log"
)

func NewConnection() *sql.DB {
	database, err := sql.Open("postgres", "postgresql://sammi:sammi@localhost:5432/fiber_auth?sslmode=disable")
	if err != nil {
		log.Fatalf(err.Error())
	}
	return database
}
