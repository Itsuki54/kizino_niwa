import { useRouter } from "next/router";
import React from "react";

export interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

export function SideBarItem({ title, icon, route }: SideBarItemProps) {
  const router = useRouter();
  return (
    <a
      href={route}
      className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
    >
      <svg
        className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="flex-1 ml-3 whitespace-nowrap">{title}</span>
    </a>
  );
}
