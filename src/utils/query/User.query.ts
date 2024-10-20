import { db } from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";

export async function UserDataQuery(id: string) {
  const user = db.user.findUnique({
    where: {
      id: id,
    },
  });

  return user;
}

export async function UserToLinkQuery(id: string) {
  const link = db.link.findMany({
    where: {
      userId: id,
    },
  });

  return link;
}
