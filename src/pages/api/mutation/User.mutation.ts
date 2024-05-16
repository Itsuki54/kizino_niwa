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

interface updateProps {
  id: string;
  name: string;
  email: string;
  image: string;
}

export async function updateUserMutation({
  id,
  name,
  email,
  image,
}: updateProps) {
  const prisma = new PrismaClient();
  const updateUser = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      image: image,
    },
  });
  return updateUser;
}

interface deleteProps {
  id: string;
}

export async function deleteUserMutation({ id }: deleteProps) {
  const prisma = new PrismaClient();
  const deleteUser = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return deleteUser;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, name, email, image } = req.body;
  const newUser = await createUserMutation({ id, name, email, image });
  res.status(200).json(newUser);
  const updateUser = await updateUserMutation({ id, name, email, image });
  res.status(200).json(updateUser);
  const deleteUser = await deleteUserMutation({ id });
  res.status(200).json(deleteUser);
}
