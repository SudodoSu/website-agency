import WebSolutions from "../assets/images/web-solutions.png";
import SEOblue from "../assets/images/seo-blue.png";
import SocialMediaBlue from "../assets/images/social-media-blue.png";
import ResponsiveBlue from "../assets/images/responsive-blue.png";
import MapsBlue from "../assets/images/maps-blue.png";
import BusinessBlue from "../assets/images/business-blue.png";

import { useState } from "react";
import Article from "./section-two/article";

function SectionTwo() {
  const article = [
    {
      num: 1,
      img: WebSolutions,
      title: "Dizajn i izrada web stranice",
      path: "/design",
    },
    {
      num: 2,
      img: SEOblue,
      title: "Optimizacija za tražilice",
      path: "/seo",
    },
    {
      num: 3,
      img: ResponsiveBlue,
      title: "Responsivni dizajn",
      path: "/responsive",
    },
    {
      num: 4,
      img: SocialMediaBlue,
      title: "Interakcija društvenih mreža",
      path: "/social",
    },
    {
      num: 5,
      img: MapsBlue,
      title: "Google Maps & Business",
      path: "/google-maps",
    },
    {
      num: 6,
      img: BusinessBlue,
      title: "Poslovna rješenja",
      path: "/business-solutions",
    },
  ];

  const [hover, sethover] = useState(2);

  function background(e) {
    sethover(e);
  }

  const isHovered = (e) => e === hover;

  return (
    <section className="section-two" id="usluge">
      <div className="max-width">
        <div className="section-two-title">
          <h1>Naša Specijalizacija</h1>
          <div className="section-two-line"></div>
        </div>
        <div className="our-speciallization-articles">
          <Article
            articles={article}
            background={background}
            hover={isHovered}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
