import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { db } from '@/lib/prisma';

type createProps = {
  articleId: string;
  userId: string;
  id?: string;
};

export const createLike = async ({ articleId, userId }: createProps) => {
  const newLike = await db.like.create({
    data: {
      articleId: articleId,
      userId: userId,
    },
  });

  return newLike;
};

export const deleteLike = async ({ articleId, userId, id }: createProps) => {
  const deletedLike = await db.like.delete({
    where: {
      id: id,
    },
  });

  return deletedLike;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { articleId, userId, id } = req.body;
  let newLike;
  if (req.method === 'POST') {
    newLike = await createLike({
      articleId,
      userId,
    });
  }
  else if (req.method === 'DELETE') {
    newLike = await deleteLike({
      articleId,
      userId,
      id,
    });
  }
  res.status(200).json(newLike);
};

export default handler;
