import { FunctionComponent } from "react";
import CategoryGridHeader1 from "../components/CategoryGridHeader1";
import CategoryItem21 from "../components/CategoryItem21";
import CategoryItem22 from "../components/CategoryItem22";
import CategoryItem23 from "../components/CategoryItem23";

const EnvasesPageDesktop1: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grays-white h-[1849px] overflow-hidden flex flex-col items-center justify-between text-center text-5xl text-black font-montserrat">
      <div className="w-[1440px] h-20 bg-aliceblue flex flex-row items-start justify-between py-6 px-16 box-border">
        <img
          className="w-8 relative h-8 object-contain"
          alt=""
          src="/glarrowright.svg"
        />
        <div className="w-[632.3px] flex flex-col items-center justify-center">
          <div className="self-stretch relative leading-[21.48px] font-semibold">
            Bandejas y estuches
          </div>
        </div>
      </div>
      <CategoryGridHeader1 />
      <div className="self-stretch flex flex-col items-center justify-start gap-[51px] text-smi-5 text-slategray">
        <div className="self-stretch flex flex-row items-start justify-between md:flex-row md:flex-wrap">
          <div className="w-[421px] rounded-3xl bg-gray-100 border-gray-200 border-[3px] border-solid box-border flex flex-col items-center justify-start p-6 gap-4 text-gray-200">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[317.8px] shrink-0 object-cover"
              alt=""
              src="/category-item-1-1-img1@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="w-[237.2px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[21.48px]">
                    3 compartimentos
                  </div>
                  <div className="self-stretch relative leading-[21.48px]">
                    23cm x 23cm x 7,5cm
                  </div>
                </div>
                <div className="self-stretch relative h-11 text-left text-base-1">
                  <div className="absolute top-[0px] left-[0px] leading-[21.48px] font-semibold inline-block w-[290px]">{`Estuche 1500ml `}</div>
                  <div className="absolute top-[22px] left-[0px] text-mini-3 leading-[21.48px] font-medium inline-block w-[290px]">
                    Bagazo de caña de azucar
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-end">
                <img
                  className="w-14 relative h-14 object-cover"
                  alt=""
                  src="/group-34597@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[421px] rounded-3xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[317.8px] shrink-0 object-cover"
              alt=""
              src="/category-item-1-2-img1@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="w-[237.2px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[21.48px]">
                    1 compartimento
                  </div>
                  <div className="self-stretch relative leading-[21.48px]">
                    23cm x 15cm x 8cm
                  </div>
                </div>
                <div className="self-stretch relative h-11 text-left text-base-1 text-gray-200">
                  <div className="absolute top-[0px] left-[0px] leading-[21.48px] font-semibold inline-block w-[290px]">{`Estuche 950ml `}</div>
                  <div className="absolute top-[22px] left-[0px] text-mini-3 leading-[21.48px] inline-block w-[290px]">
                    Bagazo de caña de azucar
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-end justify-end p-[15px]">
                <img
                  className="w-[26.1px] relative h-[26.1px]"
                  alt=""
                  src="/glarrowright1.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[341.2px] rounded-3xl bg-whitesmoke flex flex-col items-center justify-start p-6 box-border gap-4">
            <img
              className="self-stretch relative max-w-full overflow-hidden h-[317.8px] shrink-0 object-cover"
              alt=""
              src="/category-item-1-3-img1@2x.png"
            />
            <div className="self-stretch flex flex-row items-end justify-between">
              <div className="w-[237.2px] flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[21.48px]">
                    1 compartimento
                  </div>
                  <div className="self-stretch relative leading-[21.48px]">
                    23cm x 15cm x 8cm
                  </div>
                </div>
                <div className="self-stretch relative h-11 text-left text-base-1 text-gray-200">
                  <div className="absolute top-[0px] left-[0px] leading-[21.48px] font-semibold inline-block w-[290px]">{`Estuche 950ml `}</div>
                  <div className="absolute top-[22px] left-[0px] text-mini-3 leading-[21.48px] inline-block w-[290px]">
                    Bagazo de caña de azucar
                  </div>
                </div>
              </div>
              <div className="w-14 rounded-[28px] border-gray-200 border-[2.2px] border-solid box-border h-14 flex flex-row items-end justify-end p-[15px]">
                <img
                  className="w-[26.1px] relative h-[26.1px]"
                  alt=""
                  src="/glarrowright2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[26px]">
          <CategoryItem21
            categoryItem21Img="/category-item-2-1-img1@2x.png"
            categoryItem21Cta="/category-item-2-1-cta@2x.png"
          />
          <CategoryItem22 categoryItem22Img="/category-item-2-2-img1@2x.png" />
          <CategoryItem23
            categoryItem23="/category-item-2-31@2x.png"
            categoryItem23Cta="/category-item-2-3-cta@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-center justify-center gap-[26px]">
          <CategoryItem21
            propGap="unset"
            categoryItem21Img="/category-item-3-1-img1@2x.png"
            propHeight="88px"
            categoryItem21Cta="/category-item-3-1-cta@2x.png"
          />
          <CategoryItem23
            categoryItem23="/category-item-3-2-img@2x.png"
            categoryItem23Cta="/frame-1000005061@2x.png"
          />
          <CategoryItem23
            categoryItem23="/category-item-3-3-img@2x.png"
            categoryItem23Cta="/category-item-3-3-cta@2x.png"
          />
        </div>
      </div>
      <div className="w-[1440px] h-[129px] [background:linear-gradient(90.46deg,_#a1f2db,_#c9f3ef)] flex flex-row items-center justify-between py-0 px-16 box-border text-right text-base text-gray-200 sm:flex-1 sm:flex-col sm:gap-[50px] sm:items-center sm:justify-start sm:pt-[30px] sm:pb-10 sm:box-border">
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
            GoBio es la respuesta e invitación para revertir el impacto nocivo
            de los plásticos en el medioambiente. Desarrollamos envases para
            alimentos que son 100% biodegradables.
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnvasesPageDesktop1;
