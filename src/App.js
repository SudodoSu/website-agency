import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import Contact from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Services from './components/pages/Services';
import { useState } from "react";

function App() {

  const [hover, sethover] = useState(2);

    function background(e) {
        sethover(e);
    }

  const isHovered = (e) => e === hover;

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
