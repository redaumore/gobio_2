import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import EnvasesPageDesktop from "./pages/EnvasesPageDesktop";
import ContactPageDesktop from "./pages/ContactPageDesktop";
import EnvasesPageDesktop1 from "./pages/EnvasesPageDesktop1";

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
      <Route path="/" element={<EnvasesPageDesktop />} />
      <Route path="/contact-page-desktop" element={<ContactPageDesktop />} />
      <Route path="/envases-page-desktop" element={<EnvasesPageDesktop1 />} />
    </Routes>
  );
}
export default App;
