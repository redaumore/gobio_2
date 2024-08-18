import { FunctionComponent, useState, useCallback } from "react";
import MenuMobileCollapsed1 from "./MenuMobileCollapsed1";
import PortalDrawer from "./PortalDrawer";

export type HeaderGobioType = {
  className?: string;
};

const HeaderGobio: FunctionComponent<HeaderGobioType> = ({
  className = "",
}) => {
  const [isMenuMobileCollapsedOpen, setMenuMobileCollapsedOpen] =
    useState(false);

  const openMenuMobileCollapsed = useCallback(() => {
    setMenuMobileCollapsedOpen(true);
  }, []);

  const closeMenuMobileCollapsed = useCallback(() => {
    setMenuMobileCollapsedOpen(false);
  }, []);

  return (
    <>
      <div
        className={`self-stretch h-16 bg-gray flex flex-row items-center justify-between py-0 px-6 box-border text-left text-sm text-grays-white font-montserrat ${className}`}
      >
        <img
          className="w-[111.7px] relative h-10 overflow-hidden shrink-0"
          alt=""
          src="/capa-1.svg"
        />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] h-8 w-8 relative hidden sm:flex"
          onClick={openMenuMobileCollapsed}
        >
          <img
            className="absolute h-3/5 w-[70%] top-[20%] right-[15%] bottom-[20%] left-[15%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/vector.svg"
          />
        </button>
        <div className="w-[487px] h-16 flex flex-row items-start justify-between sm:hidden">
          <div className="flex flex-row items-center justify-center py-6 px-0 gap-1">
            <div className="relative leading-[16px] font-semibold">
              Ecoenvases
            </div>
            <img
              className="w-4 relative h-4"
              alt=""
              src="/gl-chevrondown-s.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-center py-6 px-0">
            <div className="relative leading-[16px] font-semibold">Aliados</div>
          </div>
          <div className="flex flex-row items-center justify-center py-6 px-0">
            <div className="relative leading-[16px] font-semibold">
              Nosotros
            </div>
          </div>
          <div className="flex flex-row items-center justify-center py-6 px-0">
            <div className="relative leading-[16px] font-semibold">FAQs</div>
          </div>
          <div className="flex flex-row items-center justify-center py-6 px-0">
            <div className="relative leading-[16px] font-semibold">
              Contacto
            </div>
          </div>
        </div>
      </div>
      {isMenuMobileCollapsedOpen && (
        <PortalDrawer
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Left"
          onOutsideClick={closeMenuMobileCollapsed}
        >
          <MenuMobileCollapsed1 onClose={closeMenuMobileCollapsed} />
        </PortalDrawer>
      )}
    </>
  );
};

export default HeaderGobio;