import "../App.css";
import Research from "../assets/images/research.png";
import WebDevelopment from "../assets/images/webdevelopment.png";
import WebSolutions from "../assets/images/web-solutions.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from "react";


function SectionTwo() {
    const currentArticle = [useRef(null), useRef(null), useRef(null)];
    function background(e) {
        if(currentArticle[e].current){
            currentArticle[e].current.style.background = "var(--gradient2)";
        }
    }

    function backgroundOut(e) {
        if(currentArticle[e].current){
            currentArticle[e].current.style.background = "transparent";
        }
        
    }

    return (
            <section className="section-two">
                <div  className="max-width">
                    <div className="section-two-title">
                        <h1>Naša Specijalizacija</h1>
                        <div className="section-two-line"></div>
                    </div>
                    <div className="our-speciallization-articles">
                        <article onMouseOver={() => background(0)} onMouseLeave={() => backgroundOut(0)}>
                            <div className="our-speciallization-articles-image">
                                <img src={Research}/>
                            </div>
                            <div className="our-speciallization-articles-title">
                                <h2>Strategija & Istraživanje</h2>
                                <p>Naša web dizajn agencija temelji se na vrhunskoj strategiji i 
                                    dubokom istraživanju kako bismo stvarali web stranice koje ostavljaju snažan utisak.</p>
                                <button ref={currentArticle[0]}><FontAwesomeIcon icon={faArrowRight} style={{color: "#112d4e",}} /></button>
                            </div>
                        </article>
                        <article onMouseOver={() => background(1)} onMouseLeave={() => backgroundOut(1)}>
                            <div className="our-speciallization-articles-image">
                                <img src={WebDevelopment}/>
                            </div>
                            <div className="our-speciallization-articles-title">
                                <h2>Web Development</h2>
                                <p>Bavimo se web developmentom s fokusom na performanse i 
                                    korisničko iskustvo kako bismo stvorili web stranice koje zadovoljavaju najviše standarde i ciljeve naših klijenata.</p>
                                <button ref={currentArticle[1]}><FontAwesomeIcon icon={faArrowRight} style={{color: "#112d4e",}} /></button>
                            </div>
                        </article>
                        <article onMouseOver={() => background(2)} onMouseLeave={() => backgroundOut(2)}>
                            <div className="our-speciallization-articles-image">
                                <img src={WebSolutions}/>
                            </div>
                            <div className="our-speciallization-articles-title">
                                <h2>Web Rješenja</h2>
                                <p>S našim web rješenjima, vaša online prisutnost će se transformirati, 
                                    pružajući vam konkurentske prednosti i bolju interakciju s vašim korisnicima.</p>
                                <button ref={currentArticle[2]}><FontAwesomeIcon icon={faArrowRight} style={{color: "#112d4e",}} /></button>
                            </div>
                        </article>
                    </div> 
                </div>
            </section>
    );
}

export default SectionTwo;