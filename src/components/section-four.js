import "../App.css";
import OurServices from "../assets/images/section-four.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadSideVirus, faPenNib, faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

function SectionFour() {
    return(
        <section className="section-four">
            <div className="max-width">
                <div className="section-four-title">
                    <h1>Naše Značajke</h1>
                    <div className="section-two-line"></div>    
                </div>
                <div className="section-four-bottom">
                    <div className="section-four-inner-articles">
                        <article>
                            <div className="section-four-article-image"><FontAwesomeIcon icon={faHeadSideVirus} size="2xl" style={{color: "#ffffff",}} /></div>
                            <div className="section-four-article-text">
                                <h2>Ideja & Analiza</h2>
                                <p>Naša predanost projektima počinje pažljivim razmišljanjem o kreativnim idejama i temeljnom analiziranju, prilagođavajući svako rješenje vašim potrebama.
                                    </p>
                            </div>
                        </article>
                        <article>
                            <div className="section-four-article-image"><FontAwesomeIcon icon={faPenNib} size="2xl" style={{color: "#ffffff",}} /></div>
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
                        <article>
                            <div className="section-four-article-image"><FontAwesomeIcon icon={faCode} size="2xl" style={{color: "#ffffff",}} /></div>
                            <div className="section-four-article-text">
                                <h2>Development</h2>
                                <p>
                                Razvoj pretvara ideje i dizajn u stvarnost. Naš tim stručnjaka pažljivo implementira svaki detalj, 
                                osiguravajući visoku funkcionalnost, sigurnost i izvrsne rezultate.
                                    </p>
                            </div>
                        </article>
                        <article>
                            <div className="section-four-article-image"><FontAwesomeIcon icon={faRocket} size="2xl" style={{color: "#ffffff",}} /></div>
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