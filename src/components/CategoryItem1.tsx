import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CategoryItem1Type = {
  className?: string;
  categoryItem12Img?: string;
  categoryItem12Cta?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
};

const CategoryItem1: FunctionComponent<CategoryItem1Type> = ({
  className = "",
  propBorderRadius,
  categoryItem12Img,
  categoryItem12Cta,
}) => {
  const categoryItem12Style: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
    };
  }, [propBorderRadius]);

  return (
    <div
      className={`w-[421px] rounded-3xl bg-whitesmoke flex flex-col items-center justify-center py-[21.6px] px-6 box-border gap-4 min-w-[400px] max-w-full text-left text-base-1 text-gray-200 font-montserrat mq450:pt-5 mq450:pb-5 mq450:box-border mq450:min-w-full ${className}`}
      style={categoryItem12Style}
    >
      <img
        className="w-[317.8px] h-[317.8px] relative object-cover"
        loading="lazy"
        alt=""
        src={categoryItem12Img}
      />
      <div className="self-stretch flex flex-row items-end justify-between gap-5 mq450:flex-wrap">
        <div className="w-[237.2px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-0">
            <div className="w-[290px] relative leading-[22px] font-semibold inline-block">{`Estuche 950ml `}</div>
            <div className="w-[290px] relative text-mini-3 leading-[22px] inline-block">
              Bagazo de caña de azucar
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-smi-5 text-slategray">
            <div className="self-stretch relative leading-[22px]">
              1 compartimento
            </div>
            <div className="self-stretch relative leading-[22px]">
              23cm x 15cm x 8cm
            </div>
          </div>
        </div>
        <img
          className="h-14 w-14 relative"
          loading="lazy"
          alt=""
          src={categoryItem12Cta}
        />
      </div>
    </div>
  );
};

export default CategoryItem1;
