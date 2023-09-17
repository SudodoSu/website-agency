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
        {num: 1, img: Research, imgOrange: ResearchO, title: "Strategija & Istraživanje", des: "Naša web dizajn agencija temelji se na vrhunskoj strategiji i dubokom istraživanju kako bismo stvarali web stranice koje ostavljaju snažan utisak."},
        {num: 2, img: WebDevelopment, imgOrange: WebDevelopmentO, title: "Web Development", des: "Bavimo se web developmentom s fokusom na performanse i korisničko iskustvo kako bismo stvorili web stranice koje zadovoljavaju najviše standarde i ciljeve naših klijenata."},
        {num: 3, img: WebSolutions, imgOrange: WebSolutionsO, title: "Web Rješenja", des: "S našim web rješenjima, vaša online prisutnost će se transformirati, pružajući vam konkurentske prednosti i bolju interakciju s vašim korisnicima."}
];

    const [hover, sethover] = useState(2);

    function background(e) {
        sethover(e);
    }

    const isHovered = (e) => e === hover;

    return (
            <section className="section-two">
                <div  className="max-width">
                    <div className="section-two-title">
                        <h1>Naša Specijalizacija</h1>
                        <div className="section-two-line"></div>
                    </div>
                    <div className="our-speciallization-articles">
                        <Article articles={article} background={background} hover={isHovered}/>
                    </div>
                </div>
            </section>
    );
}

export default SectionTwo;