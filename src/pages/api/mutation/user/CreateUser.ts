import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

interface createProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

export async function createUserMutation({
  id,
  name,
  email,
  image,
}: createProps) {
  const prisma = new PrismaClient();
  const newUser = await prisma.user.create({
    data: {
      id: id,
      name: name,
      email: email,
      image: image,
      admin: false,
    },
  });
  return newUser;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, name, email, image } = req.body;
  const newUser = await createUserMutation({ id, name, email, image });
  res.status(200).json(newUser);
}
