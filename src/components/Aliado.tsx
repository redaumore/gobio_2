import { FunctionComponent } from "react";

export type AliadoType = {
  className?: string;
};

const Aliado: FunctionComponent<AliadoType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] max-w-full flex flex-row items-start justify-start py-12 px-16 box-border gap-[114px] leading-[normal] tracking-[normal] text-left text-17xl text-gray-200 font-montserrat mq450:gap-[57px] mq450:pl-8 mq450:pr-8 mq450:box-border mq750:gap-7 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start pt-[86px] px-0 pb-0 box-border min-w-[433px] max-w-full mq450:min-w-full mq750:pt-14 mq750:box-border">
        <div className="self-stretch flex flex-col items-start justify-start gap-8 mq450:gap-4">
          <h2 className="m-0 self-stretch relative text-inherit font-bold font-[inherit] mq750:text-[22px] mq1050:text-[29px]">
            Hotel Four Seasons
          </h2>
          <div className="self-stretch relative text-xl leading-[28px] mq750:text-base mq750:leading-[22px]">
            <p className="m-0">
              Uno de los más prestigiosos de la ciudad de Buenos Aires decidió
              no quedarse atrás e incorporar nuestros envases en su comedor
              interno.
            </p>
            <p className="m-0">{` `}</p>
            <p className="m-0">
              Esto se debe a que en la pandemia no era posible usar vajilla
              reutilizable y pudimos brindarles la solución de packaging
              descartable ecológico y no generar residuos plásticos en su
              comedor. Seguimos hasta el día de hoy trabajando continuamente con
              ellos.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[532px] rounded-13xl bg-whitesmoke border-pink border-[6px] border-solid box-border flex flex-row items-start justify-start py-[106px] px-[52px] min-w-[532px] max-w-full mq450:py-[69px] mq450:px-[26px] mq450:box-border mq450:min-w-full">
        <img
          className="w-[416px] relative max-h-full overflow-hidden shrink-0 max-w-full"
          loading="lazy"
          alt=""
          src="/isolation-mode.svg"
        />
      </div>
    </div>
  );
};

export default Aliado;
