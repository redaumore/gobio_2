import React from 'react';
import { useLocation } from 'react-router-dom';

const GobioFooter: React.FC = () => {
  const location = useLocation();

  return (
    <footer className={`bg-gray-200 ${location.pathname === '/aliados' ? 'bg-gray-900' : ''} text-black py-14 md:py-6 mt-auto`}>
      <div className={`${location.pathname === '/aliados' ? 'text-white' : 'text-black'} max-w-[1440px] mx-auto px-4 sm:px-6`}>
        <div className= "flex flex-col md:flex-row items-center justify-between font-montserrat">
          <div className="mb-4 md:mb-0">
            <img src={`${location.pathname === '/aliados' ? '/logo-footer-white.png' : '/logo-footer.png'}`} alt="GoBio Logo" className="h-16 md:h-10" />
          </div>
          <div className="flex flex-col lg:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="mailto:hola@gobio.ar" className={`${location.pathname === '/aliados' ? 'text-white' : 'text-black'} no-underline`}>hola@gobio.ar</a>
            <a href="tel:+541127871523" className={`${location.pathname === '/aliados' ? 'text-white' : 'text-black'} no-underline`}>+54 11 2787 1523</a>
            <span>© 2021 GoBio</span>
          </div>
          <div className="mt-4 text-sm md:text-xs text-center md:text-right max-w-2xl md:w-1/2">
            GoBio es la respuesta e invitación para revertir el impacto nocivo de los plásticos en el medioambiente. Desarrollamos envases para alimentos que son 100% biodegradables.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GobioFooter;