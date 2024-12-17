import {
  Link,
  Notification,
  User,
} from "@prisma/client";

import { SettingProfile } from "./SettingProfile";
import { HomeLayout } from "../../layout/HomeLayout";
import { Header } from "../layout/Header";
import SideBar from "../layout/SideBar";

type SettingProps = {
  user: User;
  link: Link[];
  notification: Notification[];
};

export function Setting({ user, link, notification }: SettingProps) {
  return (
    <HomeLayout
      header={<Header notification={notification} user={user} />}
      leftBar={<SideBar />}
      main={<SettingProfile link={link} notification={notification} user={user} />}
      rightBar={undefined}
    />
  );
}
