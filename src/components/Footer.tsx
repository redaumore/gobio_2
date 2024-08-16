import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch [background:linear-gradient(90.46deg,_#a1f2db,_#c9f3ef)] flex flex-row flex-wrap items-start justify-between py-[32.5px] px-16 box-border max-w-full gap-5 text-right text-base text-gray font-montserrat ${className}`}
    >
      <img
        className="h-16 w-[178.5px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/capa-1-1.svg"
      />
      <div className="w-[410px] flex flex-col items-start justify-start pt-[21px] px-0 pb-0 box-border max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-8">
          <div className="flex-1 relative leading-[22px] inline-block min-w-[76px] whitespace-nowrap">
            hola@gobio.ar
          </div>
          <div className="flex-1 relative leading-[22px] inline-block min-w-[81px] whitespace-nowrap">
            +54 11 2787 1523
          </div>
          <div className="relative leading-[22px] inline-block min-w-[105px]">
            © 2021 GoBio
          </div>
        </div>
      </div>
      <div className="w-[363.4px] flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border max-w-full text-xs">
        <div className="self-stretch relative leading-[18px]">
          GoBio es la respuesta e invitación para revertir el impacto nocivo de
          los plásticos en el medioambiente. Desarrollamos envases para
          alimentos que son 100% biodegradables.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
