import { User } from '@prisma/client';

export const userMock: User = {
  id: 'sample-user-id',
  name: 'sample-user-name',
  email: 'sample-user-email',
  image: '/sample-icon.png',
  admin: false,
  createdAt: new Date(),
};
