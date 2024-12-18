import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { db } from '@/lib/prisma';

type deleteProps = {
  id: string;
};

export const deleteUserMutation = async ({ id }: deleteProps) => {
  const deleteUser = await db.user.delete({
    where: {
      id: id,
    },
  });
  return deleteUser;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { id } = req.body;
  const deleteUser = await deleteUserMutation({ id });
  res.status(200).json(deleteUser);
};

export default handler;
