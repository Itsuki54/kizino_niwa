import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

import { db } from '@/lib/prisma';

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    signIn: async (user: any) => {
      const { name } = user.user;
      await db.user.upsert({
        where: { name },
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
    session: async ({ session, token }: any) => {
      session.accessToken = token.accessToken;

      session.user.id = token.id;
      session.user.uid = token.uid;

      return session;
    },

    jwt: async ({ token, user }: any) => {
      if (user) {
        const userExist = await db.user.findUnique({
          where: {
            name: user.name,
          },
        });
        token.uid = userExist?.id;
        token.accessToken = user.access_token;
      }
      return token;
    },
  },
  pages: {
    signIn: '/signin',
  },
};

export default NextAuth(authOptions);
