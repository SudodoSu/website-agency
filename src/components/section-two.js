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
    const [article, setArticle] = useState([
        {num: 1, img: Research, imgOrange: ResearchO, title: "Strategija & Istraživanje", des: "Naša web dizajn agencija temelji se na vrhunskoj strategiji i dubokom istraživanju kako bismo stvarali web stranice koje ostavljaju snažan utisak."},
        {num: 2, img: WebDevelopment, imgOrange: WebDevelopmentO, title: "Web Development", des: "Bavimo se web developmentom s fokusom na performanse i korisničko iskustvo kako bismo stvorili web stranice koje zadovoljavaju najviše standarde i ciljeve naših klijenata."},
        {num: 3, img: WebSolutions, imgOrange: WebSolutionsO, title: "Web Rješenja", des: "S našim web rješenjima, vaša online prisutnost će se transformirati, pružajući vam konkurentske prednosti i bolju interakciju s vašim korisnicima."}
]);

    const initialHoverState = article.map((articles) => articles.num === 3);
    const [hover, sethover] = useState(initialHoverState);

    function background(e) {
        sethover((event) => {
            const handleHover = [...event];
            handleHover[e] = true;
            return handleHover;
        });
    }

    function backgroundOut(e) {
        sethover((event) => {
            const handleHover = [...event];
            handleHover[e] = false;
            return handleHover;
        });
    }

    return (
            <section className="section-two">
                <div  className="max-width">
                    <div className="section-two-title">
                        <h1>Naša Specijalizacija</h1>
                        <div className="section-two-line"></div>
                    </div>
                    <div className="our-speciallization-articles">
                        <Article articles={article} background={background} backgroundOut={backgroundOut} hover={hover}/>
                    </div>
                </div>
            </section>
    );
}

export default SectionTwo;