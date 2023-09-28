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
  const questions = [
    {
      title: "Koliko košta izrada web stranice?",
      des: "Cijena izrade web stranice varira ovisno o mogućnostima i složenosti projekta te o broju samih stranica, višejezičnosti, broju galerija i mnogim drugim faktorima.",
    },
    {
      title: "Koliko dugo traje izrada web stranice?",
      des: "Vrijeme izrade web stranice varira i ovisno je o složenosti projekta. Prosječno, izrada jednostavne web stranice može trajati od nekoliko dana do nekoliko tjedana, dok složeniji projekti mogu trajati i duže.",
    },
    {
      title: "Koliko košta izrada web stranice?",
      des: "Cilj web stranice: Koje je svrhe web stranice i što se želi postići putem nj",
    },
    {
      title: "Koliko košta izrada web stranice?",
      des: "Cijena izrade web stranice varira ovisno o mogućnostima i složenosti projekta te o broju samih stranica, višejezičnosti, broju galerija i mnogim drugim faktorima.",
    },
  ];

  return (
    <>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <ClientWords />
      <PricingSection />
      <FAQSection SectionTitle="Najčesća Pitanja" Questions={questions} />
      <Footer />
      <ToTop />
    </>
  );
}

export default Home;
