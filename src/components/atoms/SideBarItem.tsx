import { useRouter } from "next/router";
import React from "react";

export interface SideBarItemProps {
  title: string;
  icon: React.ReactNode;
  route: string;
}

export function SideBarItem({ title, icon, route }: SideBarItemProps) {
  const router = useRouter();
  const GotoPage = () => {
    void router.push(route);
  };
  return (
    <div
      className="flex items-center cursor-pointer bg-primary-100 border-l-4 border-transparent hover:border-primary-500 p-2 w-full h-12 m-1"
      onClick={() => {
        GotoPage();
      }}
    >
      {icon}
      <text fontSize="16px">{title}</text>
    </div>
  );
}
