CREATE TABLE "goalsC>ompletions" (
	"id" text PRIMARY KEY NOT NULL,
	"goals_id" text NOT NULL,
	"createAt" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "goalsC>ompletions" ADD CONSTRAINT "goalsC>ompletions_goals_id_goals_id_fk" FOREIGN KEY ("goals_id") REFERENCES "public"."goals"("id") ON DELETE no action ON UPDATE no action;