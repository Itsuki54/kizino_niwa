import {
  Link,
  Notification,
  User,
} from '@prisma/client';

import { Header } from '@/components/header';
import { Sidebar } from '@/components/sidebar';
import { Layout } from '@/layout/home-layout';

import { SettingProfile } from './setting-profile';

type SettingProps = {
  user: User;
  link: Link[];
  notification: Notification[];
};

export const Setting = ({ user, link, notification }: SettingProps) => {
  return (
    <Layout
      header={<Header notification={notification} user={user} />}
      leftBar={<Sidebar />}
      main={<SettingProfile link={link} notification={notification} user={user} />}
      rightBar={undefined}
    />
  );
};
