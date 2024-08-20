import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type CategoryItem21Type = {
  className?: string;
  categoryItem21Img?: string;
  categoryItem21Cta?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
};

const CategoryItem21: FunctionComponent<CategoryItem21Type> = ({
  className = "",
  propGap,
  categoryItem21Img,
  propHeight,
  categoryItem21Cta,
}) => {
  const categoryItem211Style: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const categoryItem21DescStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`flex-1 rounded-[28.64px] bg-whitesmoke flex flex-col items-center justify-center p-6 gap-4 text-left text-base-1 text-gray-200 font-montserrat ${className}`}
      style={categoryItem211Style}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[317.8px] shrink-0 object-cover"
        alt=""
        src={categoryItem21Img}
      />
      <div
        className="self-stretch flex flex-row items-end justify-between"
        style={categoryItem21DescStyle}
      >
        <div className="w-[290px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21.48px] font-semibold">{`Estuche 1500ml `}</div>
            <div className="self-stretch relative text-mini-3 leading-[21.48px] font-medium">
              Bagazo de caña de azucar
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-smi-5">
            <div className="self-stretch relative leading-[21.48px]">
              3 compartimentos
            </div>
            <div className="self-stretch relative leading-[21.48px]">
              23cm x 23cm x 7,5cm
            </div>
          </div>
        </div>
        <img
          className="w-14 relative h-14 object-contain"
          alt=""
          src={categoryItem21Cta}
        />
      </div>
    </div>
  );
};

export default CategoryItem21;
