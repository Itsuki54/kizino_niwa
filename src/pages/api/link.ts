import { db } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
import {
  NextApiRequest,
  NextApiResponse,
} from "next";

interface createProps {
  name: string;
  url: string;
  userId: string;
}

export async function createLinkMutation({ name, url, userId }: createProps) {
  const newLink = await db.link.create({
    data: {
      name: name,
      url: url,
      userId: userId,
    },
  });

  return newLink;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { name, url, userId } = req.body;
  const newLink = await createLinkMutation({
    name,
    url,
    userId,
  });
  res.status(200).json(newLink);
}
