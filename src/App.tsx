import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import './styles.css';
import './index.css';
import ContactPageDesktop from "./pages/ContactPageDesktop";
import EnvasesPageDesktop1 from "./pages/EnvasesPageDesktop1";
import FAQsDesktop from "./pages/FAQsDesktop";
import EnvasesPageDesktop11 from "./pages/EnvasesPageDesktop11";
import AliadosPageDesktop from "./pages/AliadosPageDesktop";
import ProductPageWrapper from "./pages/ProductPageWrapper";
import ProductsPageWrapper from "./pages/ProductsPageWrapper";
import EcoenvasesPageWrapper from "./pages/EcoenvasesPageWrapper";
import AliadosPage from "./pages/AliadosPage";
import ContactoPage from "./pages/ContactoPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  
  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/contact-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/envases-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/envases-page-desktop1":
        title = "";
        metaDescription = "";
        break;
      case "/faqs-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/envases-page-desktop2":
        title = "";
        metaDescription = "";
        break;
      case "/aliados-page-desktop":
        title = "";
        metaDescription = "";
        break;
      case "/product-page-desktop":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<AliadosPage />} />
      <Route path="/aliados" element={<AliadosPage />} />
      <Route path="/contacto" element={<ContactoPage />} />
      <Route path="/ecoenvases" element={<EcoenvasesPageWrapper />} />
      <Route path="/faqs-desktop" element={<FAQsDesktop />} />
      <Route path="/envases-page-desktop2" element={<EnvasesPageDesktop11 />} />
      <Route path="/producto/:productId" element={<ProductPageWrapper />} />
      <Route path="/productos/:familyId" element={<ProductsPageWrapper />} />
    </Routes>
  );
}
export default App;