import { User } from '@prisma/client';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Layout } from '@/layout/home-layout';

import { SettingProfile } from './setting-profile';

type SettingProps = {
  user: User;
};

export const Setting = ({ user }: SettingProps) => {
  return (
    <Layout
      header={<Header user={user} />}
      leftBar={<Sidebar />}
      main={<SettingProfile user={user} />}
      rightBar={undefined}
    />
  );
};
