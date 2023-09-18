import "../App.css";
import ClientCard from "./clients/clinet-card";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';



function ClientWords() {
    const [activeIndex, setIndex] = useState(0);

    const clients = [
        {des: "Surađujući s njihovom agencijom, moja web stranica je postala atraktivna i brzo je privukla pažnju novih kupaca. Cijeli proces suradnje bio je iznimno profesionalan, s pažnjom prema detaljima i brigom za moje potrebe. Zahvaljujući njihovoj predanosti, moj posao je procvjetao, i radujem se budućim projektima s njima.", name: "Ivan R."},
        {des: "Oduševljen sam njihovim dizajnom i stručnošću. Moja e-trgovina nikada nije izgledala bolje, a prodaja se povećala od kada su preuzeli projekt.", name: "Ivana P."},
        {des: "S njima je bilo čist zabavno. Skroz su skužili naš đir i napravili su stranicu kakvu smo priželjkivali. Ekipa za pet!", name: "Marko I."},
        {des: "Zbilja znaju svoj posao. Dizajn stranice je vrhunski, i vidimo porast u prodaji.", name: "Ana K."}
    ]

    const updIndex = (newIndex) => {
        if (newIndex > 3) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = 3;
        }
        else if (newIndex >= clients.lenght) {
            newIndex = clients.lenght - 1;
        }

        setIndex(newIndex);
    };

    useEffect(() => {
        
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 10000);
      
        return () => clearInterval(interval);
      }, []);

    return (
        <section className="section-five">
            <div className="max-width">
                <div className="clients-title">
                    <h1>Riječi klijenata</h1>
                    <div className="section-two-line"></div>
                </div>
                <div className="section-five-tabs">
                    <div className="carousel">
                        <div 
                            className="inner-carousel"
                            style={{ transform: `translate(-${activeIndex * 100}%)`}}>
                                <ClientCard clients={clients}/>
                        </div>
                        <div className="nav-client">
                            <button onClick={() => updIndex(activeIndex - 1)} className="left-button">
                                <FontAwesomeIcon size="xl" icon={faArrowLeft} style={{color: "#112d4e"}} />
                            </button>
                            <div className="dots">
                            {clients.map((client, index) => {
                                return(
                                    <FontAwesomeIcon 
                                    onClick={() => updIndex(index)}
                                    key={index} 
                                    className={`dot ${(activeIndex === index) ? "active" : "" }`} 
                                    icon={faCircle}
                                    style={{color: "#112D4E",}}/>
                            );
                            })}
                            </div>
                            <button onClick={() => updIndex(activeIndex + 1)} className="right-button">
                                <FontAwesomeIcon size="xl" icon={faArrowRight} style={{color: "#112d4e"}}/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ClientWords;