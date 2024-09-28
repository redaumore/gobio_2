import React from 'react';

const GobioFooter: React.FC = () => {
  return (
    <footer className="bg-gray-200 text-black py-14 md:py-6 mt-auto">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between font-montserrat">
          <div className="mb-4 md:mb-0">
            <img src="/logo-footer.png" alt="GoBio Logo" className="h-16 md:h-10" />
          </div>
          <div className="flex flex-col lg:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <a href="mailto:hola@gobio.ar" className="no-underline text-black">hola@gobio.ar</a>
            <a href="tel:+541127871523" className="no-underline text-black">+54 11 2787 1523</a>
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