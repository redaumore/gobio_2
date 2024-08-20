import { FunctionComponent } from "react";

export type CategoryItem23Type = {
  className?: string;
  categoryItem23?: string;
  categoryItem23Cta?: string;
};

const CategoryItem23: FunctionComponent<CategoryItem23Type> = ({
  className = "",
  categoryItem23,
  categoryItem23Cta,
}) => {
  return (
    <div
      className={`flex-1 rounded-[28.64px] bg-whitesmoke flex flex-col items-center justify-center p-6 gap-4 text-left text-base-1 text-gray-200 font-montserrat ${className}`}
    >
      <img
        className="self-stretch relative max-w-full overflow-hidden h-[317.8px] shrink-0 object-cover"
        alt=""
        src={categoryItem23}
      />
      <div className="self-stretch flex flex-row items-end justify-between">
        <div className="w-[290px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative leading-[21.48px] font-semibold">{`Estuche 950ml `}</div>
            <div className="self-stretch relative text-mini-3 leading-[21.48px]">
              Bagazo de caña de azucar
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-smi-5 text-slategray">
            <div className="self-stretch relative leading-[21.48px]">
              1 compartimento
            </div>
            <div className="self-stretch relative leading-[21.48px]">
              23cm x 15cm x 8cm
            </div>
          </div>
        </div>
        <img
          className="w-14 relative h-14 object-contain"
          alt=""
          src={categoryItem23Cta}
        />
      </div>
    </div>
  );
};

export default CategoryItem23;
