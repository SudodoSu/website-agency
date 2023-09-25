import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ContactUs from "./components/pages/Contact";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import TermsOfUse from "./components/pages/TermsOfUse";
import ReturnPolicy from "./components/pages/ReturnPolicy";
import Reference from "./components/pages/Reference";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
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
