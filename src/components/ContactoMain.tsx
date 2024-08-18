import { FunctionComponent } from "react";

export type ContactoMainType = {
  className?: string;
};

const ContactoMain: FunctionComponent<ContactoMainType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch h-[520px] flex flex-col items-center justify-start pt-[88px] px-0 pb-0 box-border gap-14 text-center text-45xl text-gray font-montserrat sm:self-stretch sm:w-auto sm:gap-14 ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-6 sm:self-stretch sm:w-auto sm:h-auto sm:gap-6 sm:items-center sm:justify-center">
        <div className="w-[920px] flex-1 relative inline-block sm:text-9xl sm:text-center sm:self-stretch sm:w-auto sm:h-auto">
          <span className="font-semibold">{`Comencemos a reducir el impacto en el `}</span>
          <b className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f0bfc3,_#32aa93_36.5%,_#7cbf80_70%,_#e8ef7c)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            medio ambiente.
          </b>
        </div>
        <div className="self-stretch relative text-5xl leading-[32px] font-medium sm:text-base sm:self-stretch sm:w-auto">
          <p className="m-0">{`Comunicáte con nosotros y decile adios a la contaminación plástica `}</p>
          <p className="m-0">{`y hola a los envases 100% biodegradables. `}</p>
        </div>
      </div>
      <div className="w-[534px] flex flex-row items-start justify-start gap-6 text-5xl text-grays-white sm:self-stretch sm:w-auto sm:flex-row sm:gap-6 sm:items-start sm:justify-center sm:[transform:rotate(0deg)] sm:pl-5 sm:pr-5 sm:box-border">
        <a
          className="[text-decoration:none] flex-1 rounded-lg bg-gray flex flex-row items-center justify-center py-4 px-10 text-[inherit] sm:flex-1 sm:flex-row sm:max-w-[150px]"
          target="_blank"
        >
          <div className="flex-1 relative font-semibold sm:text-base">
            WhatsApp
          </div>
        </a>
        <a className="[text-decoration:none] flex-1 rounded-lg bg-grays-white border-gray border-[2px] border-solid flex flex-row items-center justify-center py-4 px-10 text-gray sm:flex-1 sm:max-w-[150px]">
          <div className="flex-1 relative font-semibold sm:text-base">
            Email
          </div>
        </a>
      </div>
    </div>
  );
};

export default ContactoMain;
