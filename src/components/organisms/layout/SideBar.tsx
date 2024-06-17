import React from "react";

import { SideBarItem } from "../../atoms/sidebar/SideBarItem";
import { IoSettingsOutline } from "react-icons/io5";

export function SideBar() {
  return (
    <div className="max-w-2xl mx-auto">
      <aside className="w-64" aria-label="Sidebar">
        <div className="px-3 py-4 overflow-y-auto rounded bg-gray-50 dark:bg-gray-800">
          <ul className="space-y-2">
            <SideBarItem title="Dashboard" icon="home" route="/dashboard" />
            <SideBarItem title="group" icon="users" route="/group" />
            <SideBarItem title="Projects" icon="folder" route="/projects" />
            <SideBarItem title="Calendar" icon="calendar" route="/calendar" />
            <SideBarItem
              title="設定"
              icon={<IoSettingsOutline />}
              route="/設定"
            />
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
