'use server'

import { LoginSchema } from '@/types/login-schema';
import { actionClient } from "@/lib/safe-action";
import { db } from '../index';
import { eq } from 'drizzle-orm';
import { users } from '../schema';

export const emailSignIn = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password, code } }) => {

    const existingUser = await db.query.users.findFirst({
      where: eq(users.email, email)
    });

    if (existingUser?.email !== email) {
      return { error: "Email not found" }
    }

    // 2FA check
    // if (!existingUser.emailVerified) {
      
    // }

    console.log(email, password, code)
    return { success: email }
  })
