import WebSolutions from "../assets/images/web-solutions.png";
import WebSolutionsO from "../assets/images/web-solutions-orange.png";
import SEOblue from "../assets/images/seo-blue.png";
import SEOorange from "../assets/images/seo-orange.png";
import SocialMediaBlue from "../assets/images/social-media-blue.png";
import SocialMediaOrange from "../assets/images/social-media-orange.png";
import ResponsiveBlue from "../assets/images/responsive-blue.png";
import ResponsiveOrange from "../assets/images/responsive-orange.png";
import GalleryBlue from "../assets/images/gallery-blue.png";
import GalleryOrange from "../assets/images/gallery-orange.png";
import MapsBlue from "../assets/images/maps-blue.png";
import MapsOrange from "../assets/images/maps-orange.png";
import BusinessBlue from "../assets/images/business-blue.png";
import BusinessOrange from "../assets/images/business-orange.png";

import { useState } from "react";
import Article from "./section-two/article";

function SectionTwo() {
  const article = [
    {
      num: 1,
      img: WebSolutions,
      imgOrange: WebSolutionsO,
      title: "Dizajn i izrada web stranice",
      path: "/design",
    },
    {
      num: 2,
      img: SEOblue,
      imgOrange: SEOorange,
      title: "Optimizacija za tražilice",
      path: "/seo",
    },
    {
      num: 3,
      img: ResponsiveBlue,
      imgOrange: ResponsiveOrange,
      title: "Responsivni dizajn",
      path: "/responsive",
    },
    {
      num: 4,
      img: GalleryBlue,
      imgOrange: GalleryOrange,
      title: "Interakcija galerija",
      path: "/gallery",
    },
    {
      num: 5,
      img: SocialMediaBlue,
      imgOrange: SocialMediaOrange,
      title: "Interakcija društvenih mreža",
      path: "/social",
    },
    {
      num: 6,
      img: MapsBlue,
      imgOrange: MapsOrange,
      title: "Google Maps & Business",
      path: "/google-maps",
    },
    {
      num: 7,
      img: BusinessBlue,
      imgOrange: BusinessOrange,
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
    <section className="section-two">
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
