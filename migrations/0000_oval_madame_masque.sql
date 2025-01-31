CREATE TABLE IF NOT EXISTS "goals" (
	"id" text PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"frequenci" integer NOT NULL,
	"createdId" timestamp with time zone DEFAULT now() NOT NULL
);
