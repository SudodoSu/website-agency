import "./design.css";
import Header from "../header";
import Footer from "../footer";
import FristSection from "../first-section";
import analiza from "../../assets/images/design-analysis.png";
import razvoj from "../../assets/images/design-design.png";
import izrada from "../../assets/images/design-dev.png";
import test from "../../assets/images/design-security.png";
import launch from "../../assets/images/design-launch.png";
import rightImage from "../../assets/images/design-right-img.png";

function Design() {
  const data = [
    {
      image: analiza,
      des: "Analiza potreba i ciljeva klijenta.",
    },
    {
      image: razvoj,
      des: "Razvoj koncepta i dizajna.",
    },
    {
      image: izrada,
      des: "Izrada i implementacija funkcionalnosti.",
    },
    {
      image: test,
      des: "Testiranje i kontrola kvalitete.",
    },
    {
      image: launch,
      des: "Puštanje u rad i održavanje.",
    },
  ];

  return (
    <>
      <Header />
      <FristSection title="Izrada i dizajn" />
      <main>
        <section className="design-section-one">
          <div className="max-width">
            <div className="design-content">
              <h2>
                Proces izrade web stranice se sastoji od sljedećih koraka:
              </h2>
              <div className="design-content-articles">
                {data.map((article, index) => (
                  <article key={index} className="design-article">
                    <div>
                      <img src={article.image} />
                      <p>{article.des}</p>
                    </div>
                    {index < 4 && <hr style={{ width: "100%" }} />}
                  </article>
                ))}
              </div>
            </div>
            <div className="design-image">
              <img src={rightImage} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Design;
