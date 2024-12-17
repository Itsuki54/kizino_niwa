import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { db } from '@/lib/prisma';

type createProps = {
  title: string;
  content: string;
  userId: string;
  tags: string;
};

export async function createArticle({
  title,
  content,
  userId,
  tags,
}: createProps) {
  const newArticle = await db.article.create({
    data: {
      title: title,
      content: content,
      userId: userId,
      tags: tags,
      like: 0,
    },
  });
  return newArticle;
}

export async function updateArticle({
  id,
  title,
  content,
  userId,
  tags,
  like,
}: {
  id: string;
  title: string;
  content: string;
  userId: string;
  tags: string;
  like: number;
}) {
  const updatedArticle = await db.article.update({
    where: { id },
    data: {
      title,
      content,
      userId,
      tags,
      like,
    },
  });
  return updatedArticle;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { title, content, userId, tags, like, id, method } = req.body;
  let newArticle;
  if (req.method === 'POST') {
    newArticle = await createArticle({
      title,
      content,
      userId,
      tags,
    });
  }
  else if (req.method === 'PUT') {
    if (method === 'LikeAdd') {
      newArticle = await updateArticle({
        id,
        title,
        content,
        userId,
        tags,
        like: like + 1,
      });
    }
    else if (method === 'LikeRemove') {
      newArticle = await updateArticle({
        id,
        title,
        content,
        userId,
        tags,
        like: like - 1,
      });
    }
  }

  res.status(200).json(newArticle);
}
