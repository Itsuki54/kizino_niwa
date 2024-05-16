import { Notification, User } from "@prisma/client";

import { MakeArticleButton } from "../atoms/MakeArticleButton";
import { LogoTitle } from "../molecules/LogoTitle";
import { NotificationButton } from "../molecules/NotificationBell";
import { ProfileButton } from "../molecules/ProfileButton";
import { SearchArticle } from "../molecules/SearchArticle";

interface HeaderProps {
  user: User;
  notification: Notification[];
}

export function Header({ user, notification }: HeaderProps) {
  return (
    <header className="flex justify-between items-center bg-white shadow sticky top-0 ">
      <div className="sticky top-0 flex-1 bg-white">
        <div className="flex justify-center w-full gap-1 m-2  bg-fixed">
          <div className="flex w-1/4 justify-start ">
            <LogoTitle />
          </div>
          <div className="flex w-1/2 justify-center ">
            <SearchArticle />
          </div>
          <div className="flex w-1/4 justify-end flex-row mr-4 gap-3">
            <NotificationButton notifications={notification} />
            <ProfileButton
              imageUrl={user.image}
              name={user.name}
              userId={user.id}
            />
            <MakeArticleButton id={user.id} />
          </div>
        </div>
      </div>
    </header>
  );
}
