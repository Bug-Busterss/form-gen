import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { NextApiRequest, NextApiResponse } from 'next';

import bcrypt from 'bcryptjs';

import prisma from '../../lib/prisma';

export default async function signupApi(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    return res.json({ user: newUser });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      return res.json({ error: error.message });
    }
  }
}
