import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import './styles.css';
import './index.css';
import Layout from './layout'; // Importa el Layout
import FaqsPage from "./pages/FaqsPage";
import ProductPageWrapper from "./pages/ProductPageWrapper";
import ProductsPageWrapper from "./pages/ProductsPageWrapper";
import EcoenvasesPageWrapper from "./pages/EcoenvasesPageWrapper";
import AliadosPage from "./pages/AliadosPage";
import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";
import MuestraPage from "./pages/MuestraPage";

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
      <Route path="/" element={<Layout><HomePage /></Layout>} />
      <Route path="/aliados" element={<Layout><AliadosPage /></Layout>} />
      <Route path="/contacto" element={<Layout><ContactoPage /></Layout>} />
      <Route path="/muestra" element={<Layout><MuestraPage /></Layout>} />
      <Route path="/ecoenvases" element={<Layout><EcoenvasesPageWrapper /></Layout>} />
      <Route path="/faqs" element={<Layout><FaqsPage /></Layout>} />
      <Route path="/producto/:productId" element={<Layout><ProductPageWrapper /></Layout>} />
      <Route path="/productos/:familyId?" element={<Layout><ProductsPageWrapper /></Layout>} />
      <Route path="/test" element={<Layout><TestPage /></Layout>} />
    </Routes>
  );
}

export default App;
