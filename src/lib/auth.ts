import { PrismaAdapter } from "@auth/prisma-adapter";
import Providers from "next-auth/providers/google"
import { PrismaClient } from "@prisma/client";
import { AuthOptions, AuthOptions } from "next-auth";

export const AuthOptions: AuthOptions = {
    adapter: PrismaAdapter(PrismaClient),
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
}