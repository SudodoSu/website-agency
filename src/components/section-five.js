import "../App.css";
import ClientCard from "./clients/clinet-card";
import { motion } from "framer-motion";
import { useRef, useState, useEffect} from "react";

function ClientWords() {

    const [width, setWidth] = useState(0);
    const carousel = useRef();
    const clients = [
        {des: "Surađujući s njihovom agencijom, moja web stranica je postala atraktivna i brzo je privukla pažnju novih kupaca. Cijeli proces suradnje bio je iznimno profesionalan, s pažnjom prema detaljima i brigom za moje potrebe. Zahvaljujući njihovoj predanosti, moj posao je procvjetao, i radujem se budućim projektima s njima.", name: "Ivan R."},
        {des: "Oduševljen sam njihovim dizajnom i stručnošću. Moja e-trgovina nikada nije izgledala bolje, a prodaja se povećala od kada su preuzeli projekt.", name: "Ivana P."},
        {des: "S njima je bilo čist zabavno. Skroz su skužili naš đir i napravili su stranicu kakvu smo priželjkivali. Ekipa za pet!", name: "Marko I."},
        {des: "Zbilja znaju svoj posao. Dizajn stranice je vrhunski, i vidimo porast u prodaji.", name: "Ana K."}
    ]

    useEffect(() => {
        console.log(carousel.current.scrollWidth);
    }, []);

    return (
        <section className="section-five">
            <div className="max-width">
                <div className="clients-title">
                    <h1>Riječi klijenata</h1>
                    <div className="section-two-line"></div>
                </div>
                <div className="section-five-tabs">
                    <motion.div ref={carousel} className="carousel">
                        <motion.div drag="x" dragConstraints={{ right: 0 }} className="inner-carousel">
                            <ClientCard clients={clients}/>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default ClientWords;