import { FunctionComponent } from "react";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch h-[129px] [background:linear-gradient(90.46deg,_#a1f2db,_#c9f3ef)] flex flex-row items-center justify-between py-0 px-16 box-border text-right text-base text-gray font-montserrat sm:flex-1 sm:flex-col sm:gap-[50px] sm:items-center sm:justify-start sm:pt-[30px] sm:pb-10 sm:box-border ${className}`}
    >
      <img
        className="w-[178.5px] relative h-16 overflow-hidden shrink-0"
        alt=""
        src="/capa-1-1.svg"
      />
      <div className="w-[431px] flex flex-row items-center justify-between md:w-80 md:flex-col sm:flex-1 sm:flex-row">
        <div className="w-[117px] h-[22px] flex flex-col items-center justify-center md:gap-0 md:items-center md:justify-start sm:flex-row sm:gap-0 sm:pb-0 sm:box-border">
          <div className="relative leading-[22px] md:leading-[16px] md:whitespace-nowrap sm:leading-[12px]">
            hola@gobio.ar
          </div>
        </div>
        <div className="w-[124px] h-[22px] flex flex-col items-center justify-center md:gap-5">
          <div className="relative leading-[22px] md:leading-[16px] md:whitespace-nowrap sm:leading-[12px]">
            +54 11 2787 1523
          </div>
        </div>
        <div className="w-[105px] h-[22px] flex flex-col items-center justify-center">
          <div className="relative leading-[22px] md:leading-[16px] md:whitespace-nowrap sm:leading-[12px]">
            © 2021 GoBio
          </div>
        </div>
      </div>
      <div className="w-[363.4px] flex flex-col items-center justify-center text-center text-xs">
        <div className="self-stretch relative leading-[18px]">
          GoBio es la respuesta e invitación para revertir el impacto nocivo de
          los plásticos en el medioambiente. Desarrollamos envases para
          alimentos que son 100% biodegradables.
        </div>
      </div>
    </div>
  );
};

export default Footer;