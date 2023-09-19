import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import ContactUs from './components/pages/Contact';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Services from './components/pages/Services';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/contact' element={<ContactUs />}/>
          <Route path='/services' element={<Services />}/>
          <Route path='/privacy-policy' element={<PrivacyPolicy />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
