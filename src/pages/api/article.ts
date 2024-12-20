import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { db } from '@/lib/prisma';

type CreateArticleProps = {
  title: string;
  content: string;
  userId: string;
  tags: string;
};

type UpdateArticleProps = {
  id: string;
  title?: string;
  content?: string;
  userId?: string;
  tags?: string;
};

// Create Article
export const createArticle = async ({
  title,
  content,
  userId,
  tags,
}: CreateArticleProps) => {
  return await db.article.create({
    data: {
      title,
      content,
      userId,
      tags,
    },
  });
};

// Get All Articles
export const getAllArticles = async () => {
  return await db.article.findMany();
};

// Get Single Article
export const getArticle = async (id: string) => {
  return await db.article.findUnique({
    where: { id },
  });
};

// Update Article
export const updateArticle = async ({
  id,
  title,
  content,
  userId,
  tags,
}: UpdateArticleProps) => {
  return await db.article.update({
    where: { id },
    data: { title, content, userId, tags },
  });
};

// Delete Article
export const deleteArticle = async (id: string) => {
  return await db.article.delete({
    where: { id },
  });
};

// API Handler
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, title, content, userId, tags } = req.body;

  try {
    switch (req.method) {
    case 'POST': {
      const newArticle = await createArticle({ title, content, userId, tags });
      return res.status(201).json(newArticle);
    }
    case 'GET': {
      if (id) {
        // Get a single article if `id` is provided
        const article = await getArticle(id);
        if (!article) return res.status(404).json({ error: 'Article not found' });
        return res.status(200).json(article);
      }
      else {
        // Get all articles if `id` is not provided
        const articles = await getAllArticles();
        return res.status(200).json(articles);
      }
    }
    case 'PUT': {
      const updatedArticle = await updateArticle({ id, title, content, userId, tags });
      return res.status(200).json(updatedArticle);
    }
    case 'DELETE': {
      await deleteArticle(id);
      return res.status(204).end();
    }
    default:
      return res.status(405).json({ error: 'Method not allowed' });
    }
  }
  catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default handler;
