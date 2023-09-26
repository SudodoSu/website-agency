import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfUse from "./components/pages/TermsOfUse";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import Reference from "./components/pages/Reference";
import Design from "./components/pages/Design";
import SEO from "./components/pages/SEO";
import Responsive from "./components/pages/Responsive";
import Gallery from "./components/pages/Gallery";
import Social from "./components/pages/Social";
import GoogleMaps from "./components/pages/GoogleMaps";
import BusinessSolutions from "./components/pages/BusinessSolutions";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/design" element={<Design />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/responsive" element={<Responsive />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
          <Route path="/google-maps" element={<GoogleMaps />} />
          <Route path="/business-solutions" element={<BusinessSolutions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/reference" element={<Reference />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
