import { Google } from "@mui/icons-material";
import { PrismaClient } from "@prisma/client";
import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

const prisma = new PrismaClient();

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
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

      return await true;
    },
    async session({ session, token, user }) {
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
