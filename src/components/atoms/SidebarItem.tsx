import { useRouter } from 'next/router';
import React from 'react';

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
      onClick={() => {
        GotoPage();
      }}
    >
      {icon}
      <text fontSize="16px">{title}</text>
    </div>
  );
}
