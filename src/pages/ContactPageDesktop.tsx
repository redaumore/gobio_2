import { FunctionComponent } from "react";
import HeaderGobio from "../components/HeaderGobio";
import ContactoMain from "../components/ContactoMain";
import MessageBody from "../components/MessageBody";
import Footer from "../components/Footer";

const ContactPageDesktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-grays-white overflow-hidden flex flex-col items-center justify-start">
      <HeaderGobio />
      <div className="self-stretch flex flex-col items-center justify-start gap-[134px]">
        <ContactoMain />
        <MessageBody />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPageDesktop;