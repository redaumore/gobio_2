import { FunctionComponent, useState, useCallback } from "react";
import MenuMobileCollapsed1 from "../components/MenuMobileCollapsed1";
import PortalDrawer from "../components/PortalDrawer";
import CategoryGridHeader from "../components/CategoryGridHeader";
import CategoryItem1 from "../components/CategoryItem1";
import CategoryItem2 from "../components/CategoryItem2";

const EnvasesPageDesktop: FunctionComponent = () => {
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
      <div className="w-full relative bg-grays-white overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[0.1px] box-border gap-[38.5px] leading-[normal] tracking-[normal] text-left text-sm text-grays-white font-montserrat mq750:gap-[19px]">
        <div className="self-stretch flex flex-col items-start justify-start top-[0] z-[99] sticky max-w-full">
          <div className="self-stretch bg-gray-200 flex flex-row items-center justify-between py-0 px-6 box-border gap-5 max-w-full z-[1]">
            <img
              className="h-10 w-[111.7px] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/capa-1.svg"
            />
            <div
              className="h-8 w-8 relative hidden cursor-pointer"
              onClick={openMenuMobileCollapsed}
            >
              <img
                className="absolute h-3/5 w-[70%] top-[20%] right-[15%] bottom-[20%] left-[15%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/vector.svg"
              />
            </div>
            <div className="w-[487px] flex flex-row items-start justify-between max-w-full">
              <div className="flex flex-row items-center justify-center py-6 px-0 gap-[3px]">
                <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[85px]">
                  Ecoenvases
                </a>
                <img
                  className="h-4 w-4 relative min-h-[16px]"
                  alt=""
                  src="/gl-chevrondown-s.svg"
                />
              </div>
              <div className="flex flex-row items-center justify-center py-6 px-0">
                <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[53px]">
                  Aliados
                </a>
              </div>
              <div className="flex flex-row items-center justify-center py-6 px-0">
                <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[65px]">
                  Nosotros
                </a>
              </div>
              <div className="flex flex-row items-center justify-center py-6 px-0">
                <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[38px]">
                  FAQs
                </a>
              </div>
              <div className="flex flex-row items-center justify-center py-6 px-0">
                <a className="[text-decoration:none] relative leading-[16px] font-semibold text-[inherit] inline-block min-w-[66px]">
                  Contacto
                </a>
              </div>
            </div>
          </div>
          <header className="ml-[-2.9px] self-stretch bg-aliceblue flex flex-row items-start justify-between py-6 px-16 box-border max-w-full gap-5 mt-[-0.1px] text-right text-5xl text-black font-montserrat mq750:pl-8 mq750:pr-8 mq750:box-border">
            <img
              className="h-8 w-8 relative object-contain"
              loading="lazy"
              alt=""
              src="/glarrowright.svg"
            />
            <div className="w-[632.3px] flex flex-col items-start justify-start pt-[3.9px] px-0 pb-0 box-border max-w-full">
              <h3 className="m-0 self-stretch relative text-inherit leading-[24.2px] font-semibold font-[inherit] whitespace-nowrap">
                Bandejas y estuches
              </h3>
            </div>
          </header>
        </div>
        <main className="self-stretch flex flex-row items-start justify-start pt-0 px-[59px] pb-[77px] box-border max-w-full lg:pb-[50px] lg:box-border mq450:pb-[21px] mq450:box-border mq750:pl-[29px] mq750:pr-[29px] mq750:box-border mq1050:pb-8 mq1050:box-border">
          <section className="flex-1 flex flex-col items-end justify-start gap-10 max-w-full text-left text-base-1 text-gray-200 font-montserrat mq750:gap-5">
            <CategoryGridHeader />
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pl-0 pr-1.5 box-border gap-x-[51px] gap-y-6 min-h-[1497px] max-w-full">
              <div className="w-[421px] rounded-3xl bg-gray-100 border-gray-200 border-[3px] border-solid box-border flex flex-col items-center justify-center py-[18px] px-[21px] gap-4 min-w-[400px] max-w-full mq450:min-w-full">
                <img
                  className="w-[337.7px] relative max-h-full object-cover max-w-full"
                  loading="lazy"
                  alt=""
                  src="/category-item-1-1-img@2x.png"
                />
                <div className="self-stretch flex flex-row items-end justify-between gap-5 mq450:flex-wrap">
                  <div className="w-[237.2px] flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
                      <div className="w-[290px] relative leading-[22px] font-semibold inline-block">{`Estuche 1500ml `}</div>
                      <div className="w-[290px] relative text-mini-3 leading-[22px] font-medium inline-block">
                        Bagazo de caña de azucar
                      </div>
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
                      <div className="self-stretch relative leading-[22px]">
                        3 compartimentos
                      </div>
                      <div className="self-stretch relative leading-[22px]">
                        23cm x 23cm x 7,5cm
                      </div>
                    </div>
                  </div>
                  <img
                    className="h-14 w-14 relative object-cover"
                    loading="lazy"
                    alt=""
                    src="/category-item-1-1-cta@2x.png"
                  />
                </div>
              </div>
              <CategoryItem1
                categoryItem12Img="/category-item-1-2-img@2x.png"
                categoryItem12Cta="/category-item-1-2-cta.svg"
              />
              <CategoryItem1
                propBorderRadius="24px"
                categoryItem12Img="/category-item-1-3-img@2x.png"
                categoryItem12Cta="/category-item-1-3-cta@2x.png"
              />
              <CategoryItem2 categoryItem21Img="/category-item-2-1-img@2x.png" />
              <CategoryItem1
                propBorderRadius="28.64px"
                categoryItem12Img="/category-item-2-2-img@2x.png"
                categoryItem12Cta="/category-item-1-3-cta@2x.png"
              />
              <CategoryItem1
                propBorderRadius="28.64px"
                categoryItem12Img="/category-item-2-3@2x.png"
                categoryItem12Cta="/category-item-1-3-cta@2x.png"
              />
              <CategoryItem2
                propPadding="29.1px 24px 29.2px"
                propGap="unset"
                categoryItem21Img="/category-item-3-1-img@2x.png"
              />
              <CategoryItem1
                propBorderRadius="28.64px"
                categoryItem12Img="/category-item-1-2-img@2x.png"
                categoryItem12Cta="/category-item-1-3-cta@2x.png"
              />
              <CategoryItem1
                propBorderRadius="28.64px"
                categoryItem12Img="/category-item-1-3-img@2x.png"
                categoryItem12Cta="/category-item-1-3-cta@2x.png"
              />
            </div>
          </section>
        </main>
        <footer className="self-stretch [background:linear-gradient(90.46deg,_#a1f2db,_#c9f3ef)] flex flex-row flex-wrap items-center justify-between py-[32.5px] px-16 box-border max-w-full gap-5 text-right text-base text-gray-200 font-montserrat lg:pl-8 lg:pr-8 lg:box-border">
          <img
            className="h-16 w-[178.5px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/capa-1-1.svg"
          />
          <div className="w-[431px] flex flex-row items-center justify-between max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-center justify-center">
              <div className="relative leading-[22px] inline-block min-w-[117px] whitespace-nowrap">
                hola@gobio.ar
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative leading-[22px] inline-block min-w-[124px] whitespace-nowrap">
                +54 11 2787 1523
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative leading-[22px] inline-block min-w-[105px]">
                © 2021 GoBio
              </div>
            </div>
          </div>
          <div className="w-[363.4px] flex flex-col items-center justify-center max-w-full text-center text-xs">
            <div className="self-stretch relative leading-[18px]">
              GoBio es la respuesta e invitación para revertir el impacto nocivo
              de los plásticos en el medioambiente. Desarrollamos envases para
              alimentos que son 100% biodegradables.
            </div>
          </div>
        </footer>
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

export default EnvasesPageDesktop;
