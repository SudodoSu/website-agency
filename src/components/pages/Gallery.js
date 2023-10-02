import "./gallery.css";

import Header from "../header";
import Footer from "../footer";
import FristSection from "../first-section";

import PlateImg from "../../assets/images/gallery-one.png";
import VideoCall from "../../assets/images/gallery-one-videocall.png";

function Gallery() {
  return (
    <>
      <Header />
      <FristSection title="Obrada slika i glerija" />
      <main>
        <section className="gallery">
          <div className="max-width">
            <div className="gallery-up">
              <div className="gallery-up-img">
                <img src={PlateImg} />
              </div>
              <div className="gallery-up-content">
                <h2>Obrada slika</h2>
                <p>
                  Obrada slika obuhvaća procese kojima se slike prilagođavaju
                  potrebama web stranice. To može uključivati optimizaciju
                  veličine slike za brži učitavanje, promjenu formata slike za
                  određeni cilj, kao što je web, te korištenje alata za obradu
                  slika za poboljšanje kvalitete slike.
                </p>
              </div>
            </div>
            <div className="gallery-down">
              <div className="gallery-up-img">
                <img src={VideoCall} />
              </div>
              <div className="gallery-up-content">
                <h2>Integracija galerije</h2>
                <p>
                  Integracija galerije u web stranicu omogućuje prikaz više
                  slika na jednom mjestu. Galerija se može implementirati kao
                  dio postojećeg sadržaja stranice ili kao samostalna sekcija.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Gallery;
