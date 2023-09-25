import PricingPlan from "./Pricing/pricing-plan";
import { useState } from "react";

function PricingSection() {
  const data = [
    {
      id: 1,
      title: "Single Page",
      price: "€ 200",
      des: [
        { title: "UI/UX Dizajn na jednoj stranici", doesHave: true },
        { title: "Responzivni dizajn", doesHave: true },
        { title: "Prezentacijska galerija", doesHave: true },
        { title: "Kontakt forma", doesHave: true },
        { title: "Optimizacija brzine", doesHave: true },
        { title: "Uvid u posjećenost stranice", doesHave: false },
        { title: "SEO", doesHave: false },
        { title: "Poslovna rijesenja", doesHave: false },
        { title: "Besplatna izmjena 1 godina", doesHave: true },
      ],
    },
    {
      id: 2,
      title: "Multi Page",
      price: "€ 350",
      des: [
        { title: "UI/UX Dizajn na više stranica", doesHave: true },
        { title: "Responzivni dizajn", doesHave: true },
        { title: "Interaktivna galerija", doesHave: true },
        { title: "Kontakt forma i/ili Newsletter", doesHave: true },
        { title: "Optimizacija brzine", doesHave: true },
        { title: "Uvid u posjećenost stranice", doesHave: true },
        { title: "SEO", doesHave: true },
        { title: "Poslovna rijesenja", doesHave: false },
        { title: "Besplatna izmjena 18 mjeseci", doesHave: true },
      ],
    },
    {
      id: 3,
      title: "Pro Page",
      price: "€ 550",
      des: [
        { title: "UI/UX Dizajn na više stranica i jezika", doesHave: true },
        { title: "Responzivni dizajn", doesHave: true },
        { title: "Interaktivna galerija", doesHave: true },
        { title: "Kontakt forma i/ili Newsletter", doesHave: true },
        { title: "Optimizacija brzine", doesHave: true },
        { title: "Uvid u posjećenost stranice", doesHave: true },
        { title: "SEO", doesHave: true },
        { title: "Poslovna rijesenja", doesHave: true },
        { title: "Besplatne izmjene 24 mjeseca", doesHave: true },
      ],
    },
  ];

  const [hover, sethover] = useState(2);

  function background(e) {
    sethover(e);
  }

  const isHovered = (e) => e === hover;

  return (
    <section className="pricing">
      <div className="max-width">
        <div className="pricing-title">
          <h1>Izaberite Svoj Plan</h1>
          <div className="section-two-line"></div>
          <p>
            Bacimo se na posao i krenimo dizajnirati tvoju Online prisutnost!
          </p>
        </div>
        <div className="pricing-section">
          <PricingPlan
            articles={data}
            background={background}
            hover={isHovered}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
