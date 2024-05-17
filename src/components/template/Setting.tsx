import { User, Link, Notification } from "@prisma/client";
import { HomeLayout } from "../organisms/layout/HomeLayout";
import { Header } from "../organisms/layout/Header";
import SideBar from "../organisms/layout/SideBar";
import { SettingProfile } from "../organisms/SettingProfile";

export interface SettingProps {
  user: User;
  link: Link[];
  notification: Notification[];
}

export function Setting({ user, link, notification }: SettingProps) {
  return (
    <HomeLayout
      header={<Header user={user} notification={notification} />}
      rightBar={undefined}
      leftBar={<SideBar />}
      main={
        <SettingProfile user={user} link={link} notification={notification} />
      }
    />
  );
}
