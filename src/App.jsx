import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const MobileApp = lazy(() => import("./pages/MobileApp"));
const WebDev = lazy(() => import("./pages/WebDev"));
const DataScience = lazy(() => import("./pages/DataScience"));
const CsDevelopment = lazy(() => import("./pages/CsDevelopment"));
const DesignUiUX = lazy(() => import("./pages/DesignUiUX"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const HireMobileApp = lazy(() => import("./pages/HireMobileApp"));
const IosDeveloper = lazy(() => import("./pages/HireIOSDeveloper"));
const HireAndroid = lazy(() => import("./pages/HireAndroid"));
const HireDataScientists = lazy(() => import("./pages/HireDataScientists"));
const HireUiUX = lazy(() => import("./pages/HireUiUX"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const GymSport = lazy(() => import("./pages/GymSport"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const Career = lazy(() => import("./pages/Career"));
const Glaze = lazy(() => import("./pages/Glaze"));
const OyrqPage = lazy(() => import("./pages/OyrqPage"));
const Fitsician = lazy(() => import("./pages/Fitsician"));
const Augmentation = lazy(() => import("./pages/Augmentation"));
const Siply = lazy(() => import("./pages/Siply"));
const Unitree = lazy(() => import("./pages/Unitree"));
const CauseWay = lazy(() => import("./pages/CauseWay"));

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Loading = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="w-16 h-16 border-4 border-[#FF0066] border-dashed rounded-full animate-spin"></div>
  </div>
);

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
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
            <Route path="/causeway" element={<CauseWay />} />
            <Route path="/unitree" element={<Unitree />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
