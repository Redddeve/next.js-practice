import React from 'react';
import SideNav from './sidenav';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="md:overflow flex-grow p-6 md:p-12">{children}</div>
    </div>
  );
}
