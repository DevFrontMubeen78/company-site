import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import MobileApp from "./pages/MobileApp";
import WebDev from "./pages/WebDev";
import DataScience from "./pages/DataScience";
import CsDevelopment from "./pages/CsDevelopment";
import DesignUiUX from "./pages/DesignUiUX";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mobile-app-development" element={<MobileApp />} />
            <Route path="/web-development" element={<WebDev />} />
            <Route path="/data-science-and-ai-development" element={<DataScience />} />
            <Route path="/custom-software-development" element={<CsDevelopment />} />
            <Route path="/uiux-design-consult" element={<DesignUiUX />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
