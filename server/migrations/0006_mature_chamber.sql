ALTER TABLE "email_token" RENAME COLUMN "toke" TO "token";--> statement-breakpoint
ALTER TABLE "email_token" DROP CONSTRAINT "email_token_id_toke_pk";--> statement-breakpoint
ALTER TABLE "email_token" ADD CONSTRAINT "email_token_id_token_pk" PRIMARY KEY("id","token");