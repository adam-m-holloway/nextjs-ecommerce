"use server";

import { actionClient } from "@/lib/safe-action";
import { RegisterSchema } from "@/types/register-schema";
import bcrypt from "bcrypt";
import { db } from "..";
import { eq } from "drizzle-orm";
import { users } from "../schema";
import { generateEmailVerificationToken } from "./tokens";
import { sendVerificationEmail } from "./email";

export const emailRegister = actionClient
  .schema(RegisterSchema)

  .action(async ({ parsedInput: { email, password, name } }) => {
    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // check existing user
    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (existingUser) {
      if (!existingUser.email_verified) {
        const verificationToken = await generateEmailVerificationToken(email);
        await sendVerificationEmail(
          verificationToken[0].email,
          verificationToken[0].token
        );

        return { success: "Email confirmation reset" };
      }
      return { error: "Email already in use" };
    }

    // not registered user
    await db.insert(users).values({
      email,
      name,
      password: hashedPassword,
    });

    const verificationToken = await generateEmailVerificationToken(email);

    await sendVerificationEmail(
      verificationToken[0].email,
      verificationToken[0].token
    );

    return { success: "Confirmation email sent!" };
  });
