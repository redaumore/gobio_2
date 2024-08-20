import { FunctionComponent } from "react";

export type CategoryGridHeaderType = {
  className?: string;
};

const CategoryGridHeader: FunctionComponent<CategoryGridHeaderType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-between max-w-full gap-5 text-left text-base text-darkslategray font-montserrat mq1050:flex-wrap ${className}`}
    >
      <div className="w-[416px] rounded-xl bg-grays-white border-lightgray border-[1px] border-solid box-border flex flex-row items-start justify-start py-2.5 px-[23px] gap-2 max-w-full mq450:flex-wrap">
        <input
          className="w-[calc(100%_-_70px)] [border:none] [outline:none] bg-[transparent] h-[22px] flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border font-montserrat text-base text-slategray min-w-[218px] max-w-full"
          placeholder="Buscar"
          type="text"
        />
        <img
          className="h-6 w-6 relative min-h-[24px]"
          alt=""
          src="/searchoutline.svg"
        />
      </div>
      <div className="w-[340px] bg-grays-white overflow-hidden shrink-0 flex flex-row items-start justify-start py-4 px-6 box-border gap-2 max-w-full mq450:flex-wrap">
        <b className="relative leading-[20px] inline-block min-w-[103px]">
          Ordenar por
        </b>
        <div className="relative leading-[20px] font-label-label-comp-text-02-r inline-block min-w-[5px] mq450:w-full mq450:h-[5px]">
          |
        </div>
        <div className="flex-1 relative leading-[20px] inline-block min-w-[76px]">
          Popularidad
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
          <img
            className="w-4 h-4 relative object-contain"
            loading="lazy"
            alt=""
            src="/glchevronright@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default CategoryGridHeader;
