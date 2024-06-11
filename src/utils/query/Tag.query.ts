import { db } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export async function AllTagQuery() {
  const tag = db.tag.findMany();
  return tag;
}
