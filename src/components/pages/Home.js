import ToTop from "../back-to-top";
import FAQSection from "../faq-section";
import Footer from "../footer";
import Header from "../header";
import PricingSection from "../pricing-section";
import ClientWords from "../section-five";
import SectionFour from "../section-four";
import SectionOne from "../section-one";
import SectionThree from "../section-three";
import SectionTwo from "../section-two";

function Home() {
  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <FAQSection SectionTitle="Najčesća Pitanja" />
      <SectionThree />
      <SectionFour />
      <ClientWords />
      <PricingSection />
      <Footer />
      <ToTop />
    </>
  );
}

export default Home;
