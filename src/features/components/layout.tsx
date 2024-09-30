import { Header } from '@/components/shared/header';
import React, { ReactNode } from 'react';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout= ({ children } : ILayoutProps) => {
  return (
    <main className='h-screen'>
      <Header />
      {children}
    </main>
  );
};
