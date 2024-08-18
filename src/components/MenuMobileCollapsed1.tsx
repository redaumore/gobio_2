import { FunctionComponent, useEffect } from "react";

export type MenuMobileCollapsed1Type = {
  className?: string;
  onClose?: () => void;
};

const MenuMobileCollapsed1: FunctionComponent<MenuMobileCollapsed1Type> = ({
  className = "",
  onClose,
}) => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={`w-[360px] h-full relative bg-gray overflow-hidden [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-[90%] text-left text-base text-grays-white font-montserrat ${className}`}
      data-animate-on-scroll
    >
      <div className="absolute top-[48px] left-[0px] w-[360px] flex flex-row items-center justify-start py-3 px-6 box-border gap-3">
        <div className="flex-1 relative leading-[28px]">Ecoenvases</div>
        <img className="w-5 relative h-5" alt="" src="/gl-chevrondown-s1.svg" />
      </div>
      <div className="absolute top-[100px] left-[0px] w-[360px] flex flex-row items-center justify-start py-3 px-6 box-border">
        <div className="flex-1 relative leading-[28px]">Aliados</div>
      </div>
      <div className="absolute top-[152px] left-[0px] w-[360px] flex flex-row items-center justify-start py-3 px-6 box-border">
        <div className="flex-1 relative leading-[28px]">Nosotros</div>
      </div>
      <div className="absolute top-[204px] left-[0px] w-[360px] flex flex-row items-center justify-start py-3 px-6 box-border">
        <div className="flex-1 relative leading-[28px]">FAQs</div>
      </div>
      <div className="absolute top-[256px] left-[0px] w-[360px] flex flex-row items-center justify-start py-3 px-6 box-border">
        <div className="flex-1 relative leading-[28px]">Contacto</div>
      </div>
      <div
        className="absolute top-[0px] left-[0px] bg-gray w-[360px] flex flex-row items-center justify-end py-3 px-4 box-border cursor-pointer"
        onClick={onClose}
      >
        <img className="w-6 relative h-6" alt="" src="/glsoliderror.svg" />
      </div>
    </div>
  );
};

export default MenuMobileCollapsed1;
