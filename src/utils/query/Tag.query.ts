import { PrismaClient } from "@prisma/client";

export async function AllTagQuery() {
  const prisma = new PrismaClient();
  const tag = prisma.tag.findMany();
  return tag;
}
