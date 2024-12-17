import {
  NextApiRequest,
  NextApiResponse,
} from "next";

import { db } from "@/lib/prisma";

type createProps = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export const createUserMutation = async ({
  id,
  name,
  email,
  image,
}: createProps) => {
  const newUser = await db.user.create({
    data: {
      id: id,
      name: name,
      email: email,
      image: image,
      admin: false,
    },
  });
  return newUser;
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { id, name, email, image } = req.body;
  const newUser = await createUserMutation({ id, name, email, image });
  res.status(200).json(newUser);
};

export default handler;
