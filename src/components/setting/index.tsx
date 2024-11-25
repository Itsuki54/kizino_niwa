import {
  Link,
  Notification,
  User,
} from "@prisma/client";
import { HomeLayout } from "../../layout/HomeLayout";
import { Header } from "../layout/Header";
import SideBar from "../layout/SideBar";
import { SettingProfile } from "./SettingProfile";

interface SettingProps {
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
      main={<SettingProfile user={user} link={link} notification={notification} />}
    />
  );
}
