import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import MobileApp from "./pages/MobileApp";
import WebDev from "./pages/WebDev";
import DataScience from "./pages/DataScience";
import CsDevelopment from "./pages/CsDevelopment";
import DesignUiUX from "./pages/DesignUiUX";
import ContactUs from "./pages/ContactUs";
import HireMobileApp from "./pages/HireMobileApp";
import IosDeveloper from "./pages/HireIOSDeveloper";
import HireAndroid from "./pages/HireAndroid";
import HireDataScientists from "./pages/HireDataScientists";
import HireUiUX from "./pages/HireUiUX";
import CaseStudies from "./pages/CaseStudies";
import GymSport from "./pages/GymSport";
import PageNotFound from "./pages/PageNotFound";
import Career from "./pages/Career";
import Glaze from "./pages/Glaze";
import OyrqPage from "./pages/OyrqPage";
import Fitsician from "./pages/Fitsician";
import Augmentation from "./pages/Augmentation";
import Siply from "./pages/Siply";
import { HelmetProvider } from "react-helmet-async";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop /> {/* Yeh yahan hona chahiye */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/mobile-app-development" element={<MobileApp />} />
          <Route path="/web-development" element={<WebDev />} />
          <Route path="/data-science-and-ai-development" element={<DataScience />} />
          <Route path="/custom-software-development" element={<CsDevelopment />} />
          <Route path="/uiux-design-consult" element={<DesignUiUX />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/hire-mobile-app-developers" element={<HireMobileApp />} />
          <Route path="/hire-ios-developers" element={<IosDeveloper />} />
          <Route path="/hire-android-developers" element={<HireAndroid />} />
          <Route path="/hire-data-scientists" element={<HireDataScientists />} />
          <Route path="/hire-uiux-designer" element={<HireUiUX />} />
          <Route path="/staff-augmentation" element={<Augmentation />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/glaze" element={<Glaze />} />
          <Route path="/oyrq" element={<OyrqPage />} />
          <Route path="/fitsician" element={<Fitsician />} />
          <Route path="/siply" element={<Siply />} />
          <Route path="/gym-support" element={<GymSport />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
