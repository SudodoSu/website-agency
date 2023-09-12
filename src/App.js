import './App.css';
import Header from './components/header';
import PricingSection from './components/pricing-section';
import SectionFour from './components/section-four';
import SectionOne from './components/section-one';
import SectionThree from './components/section-three';
import SectionTwo from './components/section-two';

function App() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <PricingSection />
    </>
  );
}

export default App;
