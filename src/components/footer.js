import { useState } from "react";
import "../App.css";
import LogoImg from "../assets/images/logo-min2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faCopyright } from '@fortawesome/free-solid-svg-icons';


function Footer() {

    const [hover, setHover] = useState(-1);

    function onHover(e) {
        setHover(e);
    }

    const HoverLeave = () => setHover(-1);

    return(
        <footer>
            <div className="footer-top max-width">
                <div className="footer-logo">
                    <img src={LogoImg}/>
                    <p>Ovdje smo da ti pružimo sve što trebaš <br/> za ostvariti uspješnu online prisutnost.</p>
                </div>
                <div className="Informacije">
                        <ul>
                            <li><h2>Informacije</h2></li> 
                            <li onMouseEnter={() => onHover(1)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 1 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>Pravila pricvatnosti</a></li>
                            <li onMouseEnter={() => onHover(2)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 2 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>Pravila povrata</a></li>
                            <li onMouseEnter={() => onHover(3)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 3 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>Pravila pružanja usluge</a></li>
                        </ul>
                        <ul>
                            <li><h2>Brzi linkovi</h2></li> 
                            <li onMouseEnter={() => onHover(4)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 4 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>Reference</a></li>
                            <li onMouseEnter={() => onHover(5)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 5 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>O nama</a></li>
                            <li onMouseEnter={() => onHover(6)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 6 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>Zatraži ponudu</a></li>
                            <li onMouseEnter={() => onHover(7)} onMouseLeave={HoverLeave}>
                                <FontAwesomeIcon className={`footer-arrow ${hover === 7 ? "hovered" : ""}`} icon={faChevronRight} style={{color: "#F9F7F7",}} /><a>Kontaktiraj nas</a></li>
                        </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <hr />
                <p>Boost Web <span><FontAwesomeIcon icon={faCopyright} style={{color: "#F9F7F7",}} /> </span>2022. Sva prava pridržana.</p>
            </div>
        </footer>
    );
}

export default Footer;