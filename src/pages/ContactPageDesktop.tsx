import { FunctionComponent } from "react";
import HeaderGobio from "../components/HeaderGobio";
import Footer from "../components/Footer";

const ContactPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <HeaderGobio />
      <main className="self-stretch flex flex-col items-center justify-start pt-0 px-5 pb-[259px] box-border min-h-[1319px] max-w-full lg:pb-[168px] lg:box-border">
        <section className="w-[876.5px] flex flex-col items-end justify-start gap-28 max-w-full text-center text-[64px] text-gray font-montserrat">
          <div className="self-stretch flex flex-col items-center justify-center max-w-full">
            <div className="self-stretch flex flex-col items-center justify-start gap-14 max-w-full">
              <div className="self-stretch flex flex-col items-center justify-center gap-6">
                <h1 className="m-0 self-stretch relative text-inherit font-[inherit]">
                  <span className="font-semibold">{`Comencemos a reducir el impacto en el `}</span>
                  <b className="text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f0bfc3,_#32aa93_36.5%,_#7cbf80_70%,_#e8ef7c)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    medio ambiente.
                  </b>
                </h1>
                <h3 className="m-0 self-stretch relative text-5xl leading-[32px] font-medium font-[inherit]">
                  <p className="m-0">{`Comunicáte con nosotros y decile adios a la contaminación plástica `}</p>
                  <p className="m-0">{`y hola a los envases 100% biodegradables. `}</p>
                </h3>
              </div>
              <div className="w-[534px] flex flex-row flex-wrap items-start justify-start gap-6 max-w-full text-5xl">
                <button className="cursor-pointer [border:none] py-[13.5px] px-[61px] bg-gray rounded-lg flex flex-row items-center justify-center hover:bg-dimgray">
                  <div className="relative text-5xl font-semibold font-montserrat text-white text-center">
                    WhatsApp
                  </div>
                </button>
                <div className="flex-1 rounded-lg bg-white border-gray border-[2px] border-solid box-border flex flex-row items-center justify-center py-[11px] px-5 min-w-[166px]">
                  <h3 className="m-0 relative text-inherit font-semibold font-[inherit] inline-block min-w-[70px]">
                    Email
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start max-w-full [row-gap:20px] text-[20px] text-white">
            <div className="flex-[0.8555] rounded-tl-3xl rounded-tr-none rounded-br-none rounded-bl-3xl bg-whitesmoke flex flex-col items-start justify-start p-8 box-border min-w-[288px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
                <div className="self-stretch rounded-2xl bg-white border-lightgray border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-4 px-[27px] max-w-full">
                  <input
                    className="w-full [border:none] [outline:none] font-montserrat text-base bg-[transparent] h-5 flex-1 relative leading-[20px] text-slategray text-left flex items-center min-w-[194px] max-w-full p-0"
                    placeholder="Nombre"
                    type="text"
                  />
                </div>
                <div className="self-stretch rounded-2xl bg-white border-lightgray border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-4 px-[27px] max-w-full">
                  <input
                    className="w-full [border:none] [outline:none] font-montserrat text-base bg-[transparent] h-5 flex-1 relative leading-[20px] text-slategray text-left flex items-center min-w-[194px] max-w-full p-0"
                    placeholder="Email"
                    type="text"
                  />
                </div>
                <div className="self-stretch rounded-2xl bg-white border-lightgray border-[1px] border-solid box-border overflow-hidden flex flex-row items-center justify-start py-4 px-[27px] max-w-full">
                  <input
                    className="w-full [border:none] [outline:none] font-montserrat text-base bg-[transparent] h-5 flex-1 relative leading-[20px] text-slategray text-left flex items-center min-w-[194px] max-w-full p-0"
                    placeholder="Telefono"
                    type="text"
                  />
                </div>
                <textarea
                  className="border-lightgray border-[1px] border-solid bg-white h-[146px] w-auto [outline:none] self-stretch rounded-2xl box-border overflow-hidden shrink-0 flex flex-row items-start justify-start py-5 px-7 font-montserrat text-base text-slategray"
                  placeholder="Mensaje"
                  rows={7}
                  cols={19}
                />
                <div className="self-stretch flex flex-row items-start justify-center max-w-full">
                  <div className="flex-1 rounded-lg bg-gray border-black border-[1px] border-solid box-border flex flex-row items-center justify-center py-2.5 px-5 max-w-full">
                    <div className="relative font-semibold inline-block min-w-[65px]">
                      Enviar
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="self-stretch flex-1 relative rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-none max-w-full overflow-hidden max-h-full object-cover min-w-[281px] min-h-[514px] z-[1]"
              loading="lazy"
              alt=""
              src="/rectangle-97@2x.png"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPageDesktop;
