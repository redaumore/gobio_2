import { FunctionComponent } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";

export type HeaderGobioType = {
  className?: string;
};

const HeaderGobio: FunctionComponent<HeaderGobioType> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch bg-gray flex flex-row items-center justify-between py-0 px-6 box-border top-[0] z-[99] sticky gap-5 max-w-full ${className}`}
    >
      <img
        className="h-10 w-[111.7px] relative overflow-hidden shrink-0"
        loading="lazy"
        alt=""
        src="/capa-1.svg"
      />
      <nav className="m-0 w-[518px] flex flex-row items-start justify-start gap-12 max-w-full text-left text-sm text-white font-montserrat">
        <Form.Select
          className="font-montserrat font-semibold text-sm text-white"
          name="ecoenvases_menu"
          id="ecoenvases_menu"
        />
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
      </nav>
    </header>
  );
};

export default HeaderGobio;
