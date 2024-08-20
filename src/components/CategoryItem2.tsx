import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CategoryItem2Type = {
  className?: string;
  categoryItem21Img?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
};

const CategoryItem2: FunctionComponent<CategoryItem2Type> = ({
  className = "",
  propPadding,
  propGap,
  categoryItem21Img,
}) => {
  const categoryItem21Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  return (
    <div
      className={`w-[421px] rounded-[28.64px] bg-whitesmoke flex flex-col items-center justify-center pt-[21.1px] px-6 pb-[21.2px] box-border gap-4 min-w-[400px] max-w-full text-left text-base-1 text-gray-200 font-montserrat mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full ${className}`}
      style={categoryItem21Style}
    >
      <img
        className="w-[337.7px] relative max-h-full object-cover max-w-full"
        loading="lazy"
        alt=""
        src={categoryItem21Img}
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
          className="h-14 w-14 relative object-contain"
          loading="lazy"
          alt=""
          src="/category-item-1-3-cta@2x.png"
        />
      </div>
    </div>
  );
};

export default CategoryItem2;
