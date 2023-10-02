import "./seo.css";
import Header from "../header";
import Footer from "../footer";
import FristSection from "../first-section";
import seoImg from "../../assets/images/seo-img.png";
import seoMonitorAds from "../../assets/images/seo-monitor-ads.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";

function SEO() {
  const data = [
    {
      des: "Poboljšanjem strukture i sadržaja web stranice",
    },
    {
      des: "Povećanjem kvalitete i količine poveznica koji.",
    },
    {
      des: "Optimizacijom meta podataka",
    },
    {
      des: "Korištenjem odgovarajućih ključnih riječi",
    },
    {
      des: "Optimizacijom slika i drugog medijskog sadržaja",
    },
  ];
  return (
    <>
      <Header />
      <FristSection title="SEO" />
      <main>
        <section className="seo-section">
          <div className="max-width">
            <div className="seo-content">
              <h2>Optimizacija za pretraživače</h2>
              <p>
                Optimizacija za pretraživače SEO je proces koji se koristi za
                poboljšanje pozicije web stranice u rezultatima pretraživanja na
                internetu. Cilj SEO-a je poboljšati vidljivost web stranice i
                povećati broj posjetitelja koji dolaze na stranicu putem
                organičkih rezultata pretraživanja.
              </p>
            </div>
            <div className="seo-image">
              <img src={seoImg} />
            </div>
          </div>
        </section>
        <section className="seo-section-two">
          <div className="max-width">
            <div className="seo-image-two">
              <img src={seoMonitorAds} />
            </div>
            <div className="seo-content-two">
              <p>
                SEO se ne smatra kratkoročnim procesom, te je potrebno vremena i
                truda da bi se postigli rezultati. To znači da će se web
                stranica postepeno povećavati u poziciji u rezultatima
                pretraživanja, te će se povećati broj posjetitelja koji dolaze
                na stranicu. <br />
                <br />
                Ako želite da vaša web stranica ima visoku poziciju u
                rezultatima pretraživanja, SEO je neophodan. To će pomoći u
                povećanju vidljivosti vašeg brenda i povećanju prometa na vašoj
                web stranici, što će dovesti do većeg broja potencijalnih
                kupaca.
              </p>
            </div>
          </div>
        </section>
        <section className="seo-section-three">
          <div className="max-width">
            <div className="seo-content-three">
              <div className="seo-title-last">
                <h2>Kako poboljšati SEO ?</h2>
              </div>
              <div className="seo-articles">
                {data.map((item, index) => (
                  <article key={index} className="seo-article">
                    <div>
                      <FontAwesomeIcon
                        icon={faSquareCheck}
                        style={{ color: "#3f72af" }}
                        size="xl"
                      />
                      <p>{item.des}</p>
                    </div>
                    {index < 4 && <hr style={{ width: "100%" }} />}
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default SEO;
