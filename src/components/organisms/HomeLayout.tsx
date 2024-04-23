import React from 'react';


interface HomeLayoutProps {
  header: React.ReactNode;
  rightBar: React.ReactNode;
  leftBar: React.ReactNode;
  main: React.ReactNode;
}

export function HomeLayout({ header,rightBar,leftBar,main }: HomeLayoutProps) {
  return (
    <div className="flex h-screen bg-green-300">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex justify-between items-center bg-blue-300 p-4 ">
          <div className="sticky top-0 bg-primary-50 flex-1">
            {header}
          </div>
        </header>
        <div className="flex h-full">
          <nav className="flex w-72 h-full bg-pink-500">
            <div className="w-full flex mx-auto px-6 py-8">
              <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
                <div className='flex' > {leftBar}</div>
              </div>
            </div>
          </nav>
          <main className="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
            {main}
          </main>
          <nav className="flex w-72 h-full bg-yellow-400">
            <div className="w-full flex mx-auto px-6 py-8">
              <div className="w-full h-full flex items-center justify-center text-gray-900 text-xl ">
                <div className='flex' > {rightBar}</div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}