import { PrismaClient } from '@prisma/client';

interface createProps {
  title: string;
  content: string;
  image: string;
  published: boolean;
  userId: string;
  like: number;
}

export function createArticleMutation({ title, content, image, published, userId }: createProps) {
  const prisma = new PrismaClient();
  const newArticle = prisma.article.create({
    data: {
      title: title,
      content: content,
      image: image,
      published: published,
      userId: userId,
      like: 0,
    },
  });
  return newArticle;
}
