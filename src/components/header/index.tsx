import { Notification, User } from "@prisma/client";

import { MakeArticleButton } from "./MakeArticleButton";
import { LogoTitle } from "./LogoTitle";
import { NotificationButton } from "./NotificationButton";
import { ProfileButton } from "./ProfileButton";
import { SearchArticle } from "./SearchArticle";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  user: User | null;
  notification: Notification[] | null;
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
            {user ? (
              <>
                {notification ? (
                  <NotificationButton notifications={notification} />
                ) : null}
                <ProfileButton
                  imageUrl={user.image}
                  name={user.name}
                  userId={user.id}
                />
                <MakeArticleButton id={user.id} />
              </>
            ) : (
              <a href="/signin">
                <Button>Sign in</Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
