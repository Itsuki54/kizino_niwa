import React from 'react';

import { Footer } from '../components/footer';

type LayoutProps = {
  header: React.ReactNode;
  rightBar: React.ReactNode;
  leftBar: React.ReactNode;
  main: React.ReactNode;
};

export function Layout({ header, rightBar, leftBar, main }: LayoutProps) {
  return (
    <div className='flex-col h-screen '>
      <div className='flex-1  flex-col top-0 sticky '>
        {header}
        <div className='flex h-full '>
          <div className=' bg-gray-50 w-1/5'>{leftBar}</div>
          <main className=' flex-col w-full bg-white mb-14 '>{main}</main>
          <nav className='  h-full bg-gray-50 w-1/5'>
            <div className='w-full  mx-auto '>{rightBar}</div>
          </nav>
        </div>
      </div>
      <div className='bottom-0'>
        <Footer />
      </div>
    </div>
  );
}
