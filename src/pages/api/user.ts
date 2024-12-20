import {
  NextApiRequest,
  NextApiResponse,
} from 'next';

import { db } from '@/lib/prisma';

type CreateUserProps = {
  name: string;
  email?: string;
  image: string;
  admin: boolean;
};

type UpdateUserProps = {
  id: string;
  name?: string;
  email?: string;
  image?: string;
  admin?: boolean;
};

// Create User
export const createUser = async ({
  name,
  email,
  image,
  admin,
}: CreateUserProps) => {
  return await db.user.create({
    data: {
      name,
      email,
      image,
      admin,
    },
  });
};

// Get All Users
export const getAllUsers = async () => {
  return await db.user.findMany();
};

// Get Single User
export const getUser = async (id: string) => {
  return await db.user.findUnique({
    where: { id },
  });
};

// Update User
export const updateUser = async ({
  id,
  name,
  email,
  image,
  admin,
}: UpdateUserProps) => {
  return await db.user.update({
    where: { id },
    data: { name, email, image, admin },
  });
};

// Delete User
export const deleteUser = async (id: string) => {
  return await db.user.delete({
    where: { id },
  });
};

// API Handler
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, name, email, image, admin } = req.body;

  try {
    switch (req.method) {
    case 'POST': {
      const newUser = await createUser({ name, email, image, admin });
      return res.status(201).json(newUser);
    }
    case 'GET': {
      if (id) {
        // Get a single user if `id` is provided
        const user = await getUser(id);
        if (!user) return res.status(404).json({ error: 'User not found' });
        return res.status(200).json(user);
      }
      else {
        // Get all users if `id` is not provided
        const users = await getAllUsers();
        return res.status(200).json(users);
      }
    }
    case 'PUT': {
      const updatedUser = await updateUser({ id, name, email, image, admin });
      return res.status(200).json(updatedUser);
    }
    case 'DELETE': {
      await deleteUser(id);
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
