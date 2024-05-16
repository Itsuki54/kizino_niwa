import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

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
  const { id } = req.body;
  const deleteUser = await deleteUserMutation({ id });
  res.status(200).json(deleteUser);
}