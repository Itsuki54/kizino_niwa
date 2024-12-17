import {
  NextApiRequest,
  NextApiResponse,
} from "next";

type createProps = {
  id: string;
  name: string;
  email: string;
  image: string;
};

export async function createUserMutation({
  id,
  name,
  email,
  image,
}: createProps) {
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
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id, name, email, image } = req.body;
  const newUser = await createUserMutation({ id, name, email, image });
  res.status(200).json(newUser);
}
