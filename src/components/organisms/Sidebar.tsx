import React from 'react';

import { SideBarContent } from '../molecules/SideBarContent';

export function SideBar() {
  return (
    <nav className="w-full flex mx-auto px-6 py-8">
      <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
        <aside className="bg-gray-800 text-white w-40 min-h-screen p-4">
          <nav>
            <ul className="space-y-2">
              <SideBarContent
                sideBarItems={[
                  { title: 'Dashboard', icon: <i className="fas fa-tachometer-alt"></i>, route: '/dashboard' },
                  { title: 'Profile', icon: <i className="fas fa-user"></i>, route: '/profile' },
                  { title: 'Settings', icon: <i className="fas fa-cog"></i>, route: '/settings' },
                ]}
                title="Home"
              />
              <SideBarContent
                sideBarItems={[
                  { title: 'Dashboard', icon: <i className="fas fa-tachometer-alt"></i>, route: '/dashboard' },
                  { title: 'Profile', icon: <i className="fas fa-user"></i>, route: '/profile' },
                  { title: 'Settings', icon: <i className="fas fa-cog"></i>, route: '/settings' },
                ]}
                title="Home"
              />
            </ul>
          </nav>
        </aside>
      </div>
    </nav>
  );
}

export default SideBar;
