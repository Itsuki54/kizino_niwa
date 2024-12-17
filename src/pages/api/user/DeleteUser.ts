import {
  NextApiRequest,
  NextApiResponse,
} from "next";

import { db } from "@/lib/prisma";

type deleteProps = {
  id: string;
};

export async function deleteUserMutation({ id }: deleteProps) {
  const deleteUser = await db.user.delete({
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
