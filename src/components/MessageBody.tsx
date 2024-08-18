import { FunctionComponent } from "react";

export type MessageBodyType = {
  className?: string;
};

const MessageBody: FunctionComponent<MessageBodyType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-[132px] sm:flex-col sm:gap-2.5 sm:items-center sm:justify-center sm:rounded-[30] ${className}`}
    >
      <div className="w-[425px] rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-whitesmoke flex flex-col items-start justify-start p-8 box-border max-w-[438px] sm:max-w-[360px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[22px] sm:flex-1">
          <input
            className="border-lightgray border-[1px] border-solid [outline:none] font-montserrat text-base bg-grays-white self-stretch rounded-2xl box-border h-14 overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-7 text-slategray"
            placeholder="Nombre"
            type="text"
          />
          <input
            className="border-lightgray border-[1px] border-solid [outline:none] font-montserrat text-base bg-grays-white self-stretch rounded-2xl box-border h-14 overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-7 text-slategray"
            placeholder="Email"
            type="text"
          />
          <input
            className="border-lightgray border-[1px] border-solid [outline:none] font-montserrat text-base bg-grays-white self-stretch rounded-2xl box-border h-14 overflow-hidden shrink-0 flex flex-row items-center justify-start py-5 px-7 text-slategray"
            placeholder="Telefono"
            type="text"
          />
          <input
            className="border-lightgray border-[1px] border-solid [outline:none] font-montserrat text-base bg-grays-white self-stretch rounded-2xl box-border h-[146px] overflow-hidden shrink-0 flex flex-row items-start justify-start py-5 px-7 text-slategray"
            placeholder="Mensaje"
            type="text"
          />
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] self-stretch flex flex-row items-start justify-center">
            <button className="cursor-pointer border-black border-[1px] border-solid py-3 px-6 bg-gray w-[361px] rounded-lg box-border h-12 flex flex-row items-center justify-center">
              <div className="flex-1 relative text-xl font-semibold font-montserrat text-grays-white text-center">
                Enviar
              </div>
            </button>
          </button>
        </div>
      </div>
      <img
        className="h-[514px] w-[438px] rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none max-w-[438px] overflow-hidden object-cover sm:w-[360px] sm:h-[360px] sm:flex-col sm:max-w-[420px] sm:rounded-[40]"
        alt=""
        src="/lateral-image-contact-form@2x.png"
      />
    </div>
  );
};

export default MessageBody;
