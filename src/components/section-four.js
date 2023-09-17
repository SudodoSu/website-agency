import "../App.css";
import OurServices from "../assets/images/section-four.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faPenNib, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


function SectionFour() {
    const vard = [false, false, false, false];
    const [hover, setHover] = useState(vard);

    function animationHandle(e) {
        setHover((event) => {
            const peviousHandle = [...event];
            peviousHandle[e-1] = true;
            return peviousHandle;
        });
    }

    function animationLeave(e) {
        setHover((event) => {
            const peviousHandle = [...event];
            peviousHandle[e-1] = false;
            return peviousHandle;
        });
    }
    
    return(
        <section className="section-four">
            <div className="max-width">
                <div className="section-four-title">
                    <h1>Naše Značajke</h1>
                    <div className="section-two-line"></div>    
                </div>
                <div className="section-four-bottom">
                    <div className="section-four-inner-articles">
                        <article onMouseEnter={() => animationHandle(1)} onMouseLeave={() => animationLeave(1)}>
                            <div className="section-four-article-image"><div className={`${hover[0] ? "iconAnimation" : ""}`}><FontAwesomeIcon icon={faHeadSideVirus} size="2xl" style={{color: "#ffffff",}} /></div></div>
                            <div className="section-four-article-text">
                                <h2>Ideja & Analiza</h2>
                                <p>Naša predanost projektima počinje pažljivim razmišljanjem o kreativnim idejama i temeljnom analiziranju, prilagođavajući svako rješenje vašim potrebama.
                                    </p>
                            </div>
                        </article>
                        <article onMouseEnter={() => animationHandle(2)} onMouseLeave={() => animationLeave(2)}>
                            <div className="section-four-article-image"><div className={`${hover[1] ? "iconAnimation" : ""}`}><FontAwesomeIcon icon={faPenNib} size="2xl" style={{color: "#ffffff",}} /></div></div>
                            <div className="section-four-article-text">
                                <h2>Dizajn</h2>
                                <p>Dizajn je srce našeg kreativnog procesa, gdje pažljivo oblikujemo elemente za privlačna i funkcionalna rješenja, 
                                    stvarajući nezaboravno korisničko iskustvo.
                                    </p>
                            </div>
                        </article>
                    </div>
                    <div className="section-four-image">
                        <img src={OurServices}/>
                    </div>
                    <div className="section-four-inner-articles">
                        <article onMouseEnter={() => animationHandle(3)} onMouseLeave={() => animationLeave(3)}>
                            <div className="section-four-article-image"><div className={`${hover[2] ? "iconAnimation" : ""}`}><FontAwesomeIcon icon={faCode} size="2xl" style={{color: "#ffffff",}} /></div></div>
                            <div className="section-four-article-text">
                                <h2>Development</h2>
                                <p>
                                Razvoj pretvara ideje i dizajn u stvarnost. Naš tim stručnjaka pažljivo implementira svaki detalj, 
                                osiguravajući visoku funkcionalnost, sigurnost i izvrsne rezultate.
                                    </p>
                            </div>
                        </article>
                        <article onMouseEnter={() => animationHandle(4)} onMouseLeave={() => animationLeave(4)}>
                            <div className="section-four-article-image"><div className={`${hover[3] ? "iconAnimation" : ""}`}><FontAwesomeIcon icon={faRocket} size="2xl" style={{color: "#ffffff",}} /></div></div>
                            <div className="section-four-article-text">
                                <h2>Testiranje & Lansiranje</h2>
                                <p>Testiranje i Lansiranje su ključni koraci koji osiguravaju visoku kvalitetu i uspješan početak vašeg projekta.
                                    </p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionFour;