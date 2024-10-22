import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GobioHeader from './components/GobioHeader';
import GobioFooter from './components/GobioFooter';

interface LayoutProps {
  children: ReactNode; // Definimos el tipo de `children`
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const bgPages = ['/contacto', '/muestra', '/faqs'];
  const shouldApplyBg = bgPages.includes(location.pathname);

  useEffect(() => {
    const scriptPaths = ['/contacto', '/muestra'];
    if (scriptPaths.includes(location.pathname)) {
      const script = document.createElement('script');
      script.src = 'https://leads.godixital.com/js/leads_form_trigger.js';
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen font-montserrat">
      <GobioHeader />
      <main className={`flex-grow ${shouldApplyBg ? 'bg-gray-100' : ''}`}>
        {children}
      </main>
      <GobioFooter />
    </div>
  );
};

export default Layout;
