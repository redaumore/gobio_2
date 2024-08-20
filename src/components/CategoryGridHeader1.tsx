import { FunctionComponent } from "react";

export type CategoryGridHeader1Type = {
  className?: string;
};

const CategoryGridHeader1: FunctionComponent<CategoryGridHeader1Type> = ({
  className = "",
}) => {
  return (
    <div
      className={`w-[1319.1px] flex flex-row items-start justify-between text-left text-base text-slategray font-montserrat ${className}`}
    >
      <div className="w-[416px] rounded-xl bg-grays-white border-lightgray border-[1px] border-solid box-border flex flex-row items-center justify-start py-3 px-6 gap-2">
        <div className="flex-1 relative leading-[20px]">Buscar</div>
        <img className="w-6 relative h-6" alt="" src="/searchoutline.svg" />
      </div>
      <div className="w-[340px] bg-grays-white overflow-hidden shrink-0 flex flex-row items-center justify-between py-4 px-7 box-border text-darkslategray">
        <b className="relative leading-[20px]">Ordenar por</b>
        <div className="relative leading-[20px] font-label-label-comp-text-02-r">
          |
        </div>
        <div className="w-[139.1px] relative leading-[20px] inline-block shrink-0">
          Popularidad
        </div>
        <img
          className="w-4 relative h-4 object-contain"
          alt=""
          src="/glchevronright1@2x.png"
        />
      </div>
    </div>
  );
};

export default CategoryGridHeader1;
