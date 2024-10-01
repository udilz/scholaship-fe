import React, { ReactNode } from 'react';
import { Navbar } from './navbar';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout= ({ children } : ILayoutProps) => {
  return (
    <main className='h-screen'>
      <Navbar />
      {children}
    </main>
  );
};
