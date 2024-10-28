import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "@/server"
import Google from "next-auth/providers/google"
import GitHub from "next-auth/providers/github"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(db),
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    // maxAge: // NextAuth.js issued JWT, defined in seconds. Default = 30 days
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
})
