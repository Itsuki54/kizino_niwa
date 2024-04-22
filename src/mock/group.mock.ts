import { Group } from '@prisma/client';

export const groupMock: Group = {
  id: '1',
  name: 'Mock Group',
  image: null,
  description: 'This is a mock group.',
  createdAt: new Date(),
};
