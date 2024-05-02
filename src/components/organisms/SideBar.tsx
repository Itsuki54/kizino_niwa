import React from "react";

import { SideBarContent } from "../molecules/SideBarContent";

export function SideBar() {
  return (
    <nav className="w-full flex mx-auto px-2 py-3">
      <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
        <aside className="bg-gray-800 text-white w-50 min-h-screen p-1">
          <nav>
            <ul className="space-y-2">
              <SideBarContent
                sideBarItems={[
                  {
                    title: "ホーム",
                    icon: <i className="fas fa-home"></i>,
                    route: "/",
                  },
                  {
                    title: "ユーザー",
                    icon: <i className="fas fa-users"></i>,
                    route: "/",
                  },
                ]}
                title="メイン"
              />
              <SideBarContent
                sideBarItems={[
                  {
                    title: "アカウント設定",
                    icon: <i className="fas fa-user"></i>,
                    route: "/",
                  },
                  {
                    title: "プロフィール",
                    icon: <i className="fas fa-user"></i>,
                    route: "/",
                  },
                  {
                    title: "設定",
                    icon: <i className="fas fa-cog"></i>,
                    route: "/",
                  },
                  {
                    title: "ログアウト",
                    icon: <i className="fas fa-sign-out-alt"></i>,
                    route: "/signin",
                  },
                ]}
                title="設定"
              />
            </ul>
          </nav>
        </aside>
      </div>
    </nav>
  );
}

export default SideBar;
