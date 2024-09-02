import { FunctionComponent } from "react";
import ProductDescription from "../components/ProductDescription";

const ProductPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grays-white h-[2023px] overflow-hidden text-right text-base text-gray-200 font-montserrat lg:w-[1200px]">
      <div className="absolute bottom-[0px] left-[0px] [background:linear-gradient(90.46deg,_#a1f2db,_#c9f3ef)] w-[1440px] h-[129px] flex flex-row items-center justify-between py-0 px-16 box-border">
        <img
          className="w-[178.5px] relative h-16 overflow-hidden shrink-0"
          alt=""
          src="/capa-1-1.svg"
        />
        <div className="flex flex-row items-center justify-start gap-8">
          <div className="relative leading-[22px]">hola@gobio.ar</div>
          <div className="relative leading-[22px]">+54 11 2787 1523</div>
          <div className="relative leading-[22px]">© 2021 GoBio</div>
        </div>
        <div className="w-[363.4px] relative text-xs leading-[18px] flex items-center shrink-0">
          GoBio es la respuesta e invitación para revertir el impacto nocivo de
          los plásticos en el medioambiente. Desarrollamos envases para
          alimentos que son 100% biodegradables.
        </div>
      </div>
      <div className="absolute top-[1422.2px] left-[64px] w-[1312px] flex flex-row items-center justify-between text-left text-17xl lg:max-w-[1200px]">
        <div className="w-[644px] rounded-13xl bg-paleturquoise h-[352px] flex flex-col items-end justify-between p-8 box-border">
          <div className="self-stretch relative h-[132px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[580px]">
              Te contamos qué sucede cuando compostás, reciclás o desechás
              nuestros productos.
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-2 text-5xl">
            <div className="relative leading-[24px] font-semibold">
              Saber más
            </div>
            <img className="w-6 relative h-6" alt="" src="/glarrowright3.svg" />
          </div>
        </div>
        <div className="w-[644px] rounded-13xl bg-lavender h-[352px] flex flex-col items-end justify-between p-8 box-border">
          <div className="w-[555px] relative h-[132px]">
            <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[555px]">
              Personaliza tus ecoenvases. Ofrecemos cuatro opciones de impresión
              diferentes.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start text-5xl">
            <div className="flex flex-row items-center justify-start gap-2">
              <div className="relative leading-[24px] font-semibold">
                Saber más
              </div>
              <img
                className="w-6 relative h-6"
                alt=""
                src="/glarrowright3.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[703px] left-[calc(50%_-_720px)] bg-grays-white w-[1440px] overflow-hidden flex flex-col items-start justify-start py-8 pl-16 pr-0 box-border gap-8 text-left text-[32px] text-black lg:max-w-[1200px]">
        <div className="w-[377.2px] relative h-12">
          <div className="absolute top-[0px] left-[0px] leading-[21.48px] font-medium flex items-center w-[377.2px] h-12">
            Otros productos
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-6 text-base-1 text-gray-200">
          <div className="w-[350px] rounded-3xl bg-whitesmoke h-[464.6px] flex flex-col items-center justify-center p-6 box-border gap-4">
            <img
              className="w-[337.7px] relative h-[317.8px] object-cover"
              alt=""
              src="/frame-1000005062@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[237.2px] flex flex-col items-start justify-start">
                  <div className="w-[290px] relative leading-[21.48px] font-semibold inline-block">{`Estuche 1500ml `}</div>
                  <div className="w-[290px] relative text-mini-3 leading-[21.48px] font-medium inline-block">
                    Bagazo de caña de azucar
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-smi-5">
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    3 compartimentos
                  </div>
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    23cm x 23cm x 7,5cm
                  </div>
                </div>
              </div>
              <img
                className="w-14 relative h-14 object-contain"
                alt=""
                src="/group-345972@2x.png"
              />
            </div>
          </div>
          <div className="w-[350px] rounded-3xl bg-whitesmoke h-[464.6px] flex flex-col items-center justify-center p-6 box-border gap-4">
            <img
              className="w-[317.8px] relative h-[317.8px] object-cover"
              alt=""
              src="/frame-1000005063@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[237.2px] flex flex-col items-start justify-start">
                  <div className="w-[290px] relative leading-[21.48px] font-semibold inline-block">{`Estuche 950ml `}</div>
                  <div className="w-[290px] relative text-mini-3 leading-[21.48px] inline-block">
                    Bagazo de caña de azucar
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-smi-5 text-slategray">
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    1 compartimento
                  </div>
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    23cm x 15cm x 8cm
                  </div>
                </div>
              </div>
              <img
                className="w-14 relative h-14 object-contain"
                alt=""
                src="/group-34598@2x.png"
              />
            </div>
          </div>
          <div className="w-[350px] rounded-3xl bg-whitesmoke h-[464.6px] flex flex-col items-center justify-center p-6 box-border gap-4">
            <img
              className="w-[317.8px] relative h-[317.8px] object-cover"
              alt=""
              src="/frame-1000005064@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[237.2px] flex flex-col items-start justify-start">
                  <div className="w-[290px] relative leading-[21.48px] font-semibold inline-block">{`Bowl 1500ml `}</div>
                  <div className="w-[290px] relative text-mini-3 leading-[21.48px] inline-block">
                    Bagazo de caña de azucar
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-smi-5 text-slategray">
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    Incluye tapa biodegradable
                  </div>
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    18cmØ x 13,5cmØ x 8cm (alto)
                  </div>
                </div>
              </div>
              <img
                className="w-14 relative h-14 object-contain"
                alt=""
                src="/group-345972@2x.png"
              />
            </div>
          </div>
          <div className="w-[350px] rounded-3xl bg-whitesmoke h-[464.6px] flex flex-col items-center justify-center p-6 box-border gap-4">
            <img
              className="w-[317.8px] relative h-[317.8px] object-cover"
              alt=""
              src="/frame-1000005065@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="flex flex-col items-start justify-start">
                <div className="w-[237.2px] flex flex-col items-start justify-start">
                  <div className="w-[290px] relative leading-[21.48px] font-semibold inline-block">{`Bowl redondo 500ml `}</div>
                  <div className="w-[290px] relative text-mini-3 leading-[21.48px] inline-block">
                    Bagazo de caña de azucar
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-smi-5 text-slategray">
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    Incluye tapa biodegradable
                  </div>
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    14cmØ x 9cmØ x 5cm (alto)
                  </div>
                </div>
              </div>
              <img
                className="w-[50.1px] relative h-[50.1px] object-contain"
                alt=""
                src="/group-345981@2x.png"
              />
            </div>
          </div>
          <div className="w-[350px] rounded-[28.64px] bg-whitesmoke h-[464.6px] flex flex-col items-center justify-center p-[21.5px] box-border gap-[14.3px]">
            <img
              className="w-[317.8px] relative h-[317.8px] object-cover"
              alt=""
              src="/frame-1000005066@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-end gap-[7.2px]">
              <div className="w-[237.2px] flex flex-col items-start justify-start">
                <div className="w-[237.2px] flex flex-col items-start justify-start">
                  <div className="self-stretch relative leading-[21.48px] font-semibold">
                    Vaso 240ml (8oz)
                  </div>
                  <div className="self-stretch relative text-mini-3 leading-[21.48px]">
                    Bagazo de caña de azucar
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start text-smi-5 text-slategray">
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    Opción tapa biodegradable
                  </div>
                  <div className="w-[237.2px] relative leading-[21.48px] inline-block">
                    8cmØ x 4,5cmØ x 9cm (alto)
                  </div>
                </div>
              </div>
              <img
                className="w-[50.1px] relative h-[50.1px] object-contain"
                alt=""
                src="/group-345982@2x.png"
              />
            </div>
          </div>
        </div>
        <div className="w-[1297px] h-16 flex flex-col items-start justify-start">
          <div className="w-[164px] flex flex-col items-start justify-start py-6 pl-0 pr-16 box-border">
            <div className="flex flex-row items-start justify-start">
              <div className="flex flex-row items-start justify-start gap-3">
                <div className="w-4 relative rounded-[50%] bg-lightsteelblue h-4" />
                <div className="w-4 relative rounded-[50%] bg-aliceblue-200 h-4" />
                <div className="w-4 relative rounded-[50%] bg-aliceblue-200 h-4" />
                <div className="w-4 relative rounded-[50%] bg-aliceblue-200 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[63.9px] left-[0.3px] w-[1440px] flex flex-col items-center justify-start gap-14 text-5xl text-black lg:max-w-[1200px]">
        <div className="self-stretch bg-aliceblue-100 flex flex-row items-start justify-end py-6 px-16 gap-[647.7px]">
          <div className="flex flex-row items-center justify-start lg:w-[10%]">
            <img
              className="w-8 relative h-8 object-contain"
              alt=""
              src="/glarrowright.svg"
            />
          </div>
          <div className="flex flex-row items-center justify-end lg:flex lg:w-[90%]">
            <div className="w-[632.3px] relative leading-[21.48px] font-semibold flex items-center h-[24.2px] shrink-0">
              Estuche 950ml
            </div>
          </div>
        </div>
        <div className="w-full h-[491px] flex flex-row items-start justify-center max-w-[1312px] text-left text-7xl text-gray-200 lg:max-w-[1100px]">
          <div className="w-[1312px] flex flex-row items-center justify-between">
            <div className="h-[491px] w-[779px] relative">
              <img
                className="absolute top-[220.4px] left-[0px] w-[50.1px] h-[50.1px] object-cover"
                alt=""
                src="/arrow-left@2x.png"
              />
              <div className="absolute top-[0px] left-[88.7px] w-[530px] flex flex-col items-start justify-start">
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-[491px] shrink-0 object-cover"
                  alt=""
                  src="/envase950cctapaabierta@2x.png"
                />
              </div>
              <img
                className="absolute top-[220.4px] left-[657.3px] w-[50.1px] h-[50.1px] object-cover"
                alt=""
                src="/arrow-right@2x.png"
              />
            </div>
            <ProductDescription name="Estuche 950ml"
              description={[
                "2 compartimientos.",
                "24cm x 15cm x 8cm.",
                "Envase customizable.",
                "En 60 días es biodegradable por completo."
              ]}
              customizableText="Envase customizable"
              biodegradableText="biodegradable"
              shippingText="Envíos a todo el país."/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageDesktop;
