import "../App.css";
import OurAgency from "../assets/images/agency-test.png";

function SectionThree() {
    return(
        <section>
            <div className="flex max-width">
                <div>
                    <img src={OurAgency}/>
                </div>
                <div>
                    <h1>Zašto Naša Agencija</h1>
                    <div className="section-two-line"></div>
                </div>
                
            </div>
        </section>
    );
}

export default SectionThree;