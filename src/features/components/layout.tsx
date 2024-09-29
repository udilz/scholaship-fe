import { Header } from '@/components/shared/header';
import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='h-screen'>
      <Header />
      {children}
    </main>
  );
};
