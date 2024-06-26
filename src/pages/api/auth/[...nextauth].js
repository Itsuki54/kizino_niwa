import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(user) {
      const { email } = user.user;
      await prisma.user.upsert({
        where: { email },
        update: {},
        create: {
          name: user.user.name,
          email: user.user.email,
          image: user.user.image,
          admin: false,
        },
      });

      return true;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;

      session.user.id = token.id;
      session.user.uid = token.uid;

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        const userExist = await prisma.user.findUnique({
          where: {
            email: user.email,
          },
        });
        token.uid = userExist?.id;
        token.accessToken = user.access_token;
      }
      return token;
    },
  },
};

export default NextAuth(authOptions);
