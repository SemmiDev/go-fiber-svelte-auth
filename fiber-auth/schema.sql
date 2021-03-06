CREATE DATABASE fiber_auth;
\c fiber_auth;

CREATE TABLE "users"
(
    "id"                  varchar PRIMARY KEY,
    "name"                varchar        NOT NULL,
    "email"               varchar UNIQUE NOT NULL,
    "password"            varchar        NOT NULL,
    "created_at"          timestamptz    NOT NULL DEFAULT (now())
);

ALTER TABLE public.users OWNER TO sammi;

