import "./responsive.css";

import Header from "../header";
import Footer from "../footer";
import FristSection from "../first-section";

import rightResponsiveImage from "../../assets/images/responsive.png";

function Responsive() {
  return (
    <>
      <Header />
      <FristSection title="Responzivni dizajn" />
      <main>
        <section className="responsive">
          <div className="max-width">
            <div className="responsive-content">
              <div>
                <h2>Responzivni dizajn</h2>
                <p>
                  Je metoda kreiranja web stranica koja omogućuje web stranici
                  da se prilagođava različitim veličinama ekrana i korištenja na
                  različitim uređajima, uključujući pametne telefone, tablete i
                  računala. Responsive dizajn je važan jer sve više ljudi
                  koristi mobilne uređaje za pristup internetu.
                </p>
              </div>
              <div>
                <h2>Važnost responzivnog dizajna</h2>
                <p>
                  Ako vaša web stranica nije prilagođena za mobilne uređaje,
                  posjetitelji će imati teškoća s navigacijom i čitanjem
                  sadržaja, što može dovesti do lošijeg korisničkog iskustva i
                  manjeg broja posjetitelja. Korištenjem responsive dizajna,
                  vaša web stranica će se prilagoditi različitim veličinama
                  ekrana i korištenja na različitim uređajima, što će poboljšati
                  korisničko iskustvo i povećati broj posjetitelja
                </p>
              </div>
            </div>
            <div className="responsive-image">
              <img src={rightResponsiveImage} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Responsive;
