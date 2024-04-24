import React from 'react';

interface HomeLayoutProps {
  header: React.ReactNode;
  rightBar: React.ReactNode;
  leftBar: React.ReactNode;
  main: React.ReactNode;
}

export function HomeLayout({ header, rightBar, leftBar, main }: HomeLayoutProps) {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col overflow-hidden">
        {header}
        <div className="flex h-full">
          {leftBar}
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14 ">{main}</main>
          <nav className="flex w-72 h-full bg-yellow-400">
            <div className="w-full flex mx-auto px-6 py-8">
              <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
                <div className="flex"> {rightBar}</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
