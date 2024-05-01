import React from "react";

interface HomeLayoutProps {
  header: React.ReactNode;
  rightBar: React.ReactNode;
  leftBar: React.ReactNode;
  main: React.ReactNode;
}

export function HomeLayout({
  header,
  rightBar,
  leftBar,
  main,
}: HomeLayoutProps) {
  return (
    <div className="flex h-screen ">
      <div className="flex-1 flex flex-col overflow-hidden  ">
        {header}
        <div className="flex h-full ">
          <div className=" bg-gray-50 w-1/5">{leftBar}</div>
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14 ">
            {main}
          </main>
          <nav className="flex  h-full bg-gray-50 w-1/5">
            <div className="w-full flex mx-auto ">{rightBar}</div>
          </nav>
        </div>
      </div>
    </div>
  );
}
