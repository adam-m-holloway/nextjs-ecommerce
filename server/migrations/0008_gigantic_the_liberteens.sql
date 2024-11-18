ALTER TABLE "account" RENAME COLUMN "userId" TO "user_id";--> statement-breakpoint
ALTER TABLE "account" RENAME COLUMN "providerAccountId" TO "provider_account_id";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "emailVerified" TO "email_verified";--> statement-breakpoint
ALTER TABLE "user" RENAME COLUMN "twoFactorEnabled" TO "two_factor_enabled";--> statement-breakpoint
ALTER TABLE "account" DROP CONSTRAINT "account_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "account" DROP CONSTRAINT "account_provider_providerAccountId_pk";--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_provider_provider_account_id_pk" PRIMARY KEY("provider","provider_account_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
