import React, { ReactNode } from 'react';
import GobioHeader from './components/GobioHeader';
import GobioFooter from './components/GobioFooter';

interface LayoutProps {
  children: ReactNode; // Definimos el tipo de `children`
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-svh font-montserrat">
      <GobioHeader />
      <main className="flex-grow">
        {children}
      </main>
      <GobioFooter />
    </div>
  );
};

export default Layout;
