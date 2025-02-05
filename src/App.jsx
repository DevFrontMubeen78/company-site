import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About";
import MobileApp from "./pages/MobileApp";
import WebDev from "./pages/WebDev";
import DataScience from "./pages/DataScience";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mobile" element={<MobileApp />} />
            <Route path="/website-development" element={<WebDev />} />
            <Route path="/data-science" element={<DataScience />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
