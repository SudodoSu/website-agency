import "../App.css";
import Research from "../assets/images/research.png";
import WebDevelopment from "../assets/images/webdevelopment.png";
import WebSolutions from "../assets/images/web-solutions.png";
import ResearchO from "../assets/images/research-orange.png";
import WebDevelopmentO from "../assets/images/webdevelopment-orange.png";
import WebSolutionsO from "../assets/images/web-solutions-orange.png";
import { useState } from "react";
import Article from "./section-two/article";

function SectionTwo() {
  const article = [
    {
      num: 1,
      img: Research,
      imgOrange: ResearchO,
      title: "Dizajn i izrada web stranice",
      path: "/",
    },
    {
      num: 2,
      img: WebDevelopment,
      imgOrange: WebDevelopmentO,
      title: "Optimizacija za tražilice",
      path: "/",
    },
    {
      num: 3,
      img: Research,
      imgOrange: ResearchO,
      title: "Responsivni dizajn",
      path: "/",
    },
    {
      num: 4,
      img: WebSolutions,
      imgOrange: WebSolutionsO,
      title: "Najbolje performanse",
      path: "/",
    },
    {
      num: 5,
      img: WebSolutions,
      imgOrange: WebSolutionsO,
      title: "Interakcija galerija",
      path: "/",
    },
    {
      num: 6,
      img: WebSolutions,
      imgOrange: WebSolutionsO,
      title: "Interakcija društvenih mreža",
      path: "/",
    },
    {
      num: 7,
      img: WebSolutions,
      imgOrange: WebSolutionsO,
      title: "Google Maps & Business",
      path: "/",
    },
    {
      num: 8,
      img: WebSolutions,
      imgOrange: WebSolutionsO,
      title: "Poslovna rješenja",
      path: "/",
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
