import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { db } from "../../../lib/prisma";

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
    async signIn(user: any) {
      const { email } = user.user;
      await db.user.upsert({
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
    async session({ session, token }: any) {
      session.accessToken = token.accessToken;

      session.user.id = token.id;
      session.user.uid = token.uid;

      return session;
    },

    async jwt({ token, user }: any) {
      if (user) {
        const userExist = await db.user.findUnique({
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
  pages: {
    signIn: "/signin",
  },
};

export default NextAuth(authOptions);
