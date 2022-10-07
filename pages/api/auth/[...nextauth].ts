import { PrismaAdapter } from '@next-auth/prisma-adapter';

import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import bcrypt from 'bcryptjs';

import prisma from '../../../lib/prisma';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        // Add logic here to look up the user from the credentials supplied
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' };
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (user) {
          // Any object returned will be saved in `user` property of the JWT
          if (await bcrypt.compare(password, user.password)) {
            return user;
          }
          return null;
        }
        return null;
      },
    }),
  ],
};
export default NextAuth(authOptions);
