import React, { useState } from 'react';

import { SideBarItemProps, SideBarItem } from '../atoms/SideBarItem';

interface SideBarContentProps {
  title: string;
  sideBarItems: SideBarItemProps[];
}

export function SideBarContent({ title, sideBarItems }: SideBarContentProps) {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <li className="opcion-con-desplegable">
      <div className="flex items-center justify-between p-2 hover:bg-gray-700" onClick={toggleDropdown}>
        <div className="flex items-center">
          <span>{title}</span>
        </div>
      </div>
      <ul className={`desplegable ml-4 ${showDropdown ? '' : 'hidden'}`}>
        {sideBarItems.map((sideBarItem) => (
          <SideBarItem
            icon={sideBarItem.icon}
            key={sideBarItem.title}
            route={sideBarItem.route}
            title={sideBarItem.title}
          />
        ))}
      </ul>
    </li>
  );
}
