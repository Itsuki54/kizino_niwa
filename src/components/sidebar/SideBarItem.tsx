import { useRouter } from "next/router";
import React from "react";

export interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

export function SideBarItem({ title, icon, route }: SideBarItemProps) {
  return (
    <a
      href={route}
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      {icon}
      <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
    </a>
  );
}
