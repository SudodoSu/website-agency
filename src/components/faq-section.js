import { useState } from "react";
import FaqImage from "../assets/images/faq-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function FAQSection({ SectionTitle }) {
  const [activeFaq, setActiveFaq] = useState(null);

  const data = [
    {
      title: "Koliko košta izrada web stranice?",
      content:
        "Cijena izrade web stranice varira ovisno o mogućnostima i složenosti projekta te o broju samih stranica, višejezičnosti, broju galerija i mnogim drugim faktorima.",
    },
    {
      title: "Koliko dugo traje izrada web stranice?",
      content:
        "Vrijeme izrade web stranice varira i ovisno je o složenosti projekta. Prosječno, izrada jednostavne web stranice može trajati od nekoliko dana do nekoliko tjedana, dok složeniji projekti mogu trajati i duže.",
    },
    {
      title: "Koje informacije i materijale trebam pripremiti?",
      content:
        "<p><strong>Cilj web stranice:</strong> Koje je svrhe web stranice i što se želi postići putem nje.</p><br><p><strong>Ciljna publika:</strong> Koja je ciljna publika web stranice i koje su njihove potrebe.</p><br><p><strong>Sadržaj:</strong> Koji sadržaj će biti prikazan na stranici, uključujući tekstove, slike i video sadržaj.</p><br><p><strong>Funkcionalnosti:</strong> Koje funkcionalnosti su potrebne na stranici, poput formulara za kontakt, e-trgovine ili integracije s društvenim mrežama.</p><br><p><strong>Dizajn:</strong> Opći stil i boje koji će se koristiti na stranici, kao i druge specifične zahtjeve za dizajn.</p><br><p><strong>Budžet:</strong> Raspoloživi budžet za izradu stranice.</p><br><p><strong>Rokovi:</strong> Rokovi za završetak projekta.</p>",
    },
    {
      title: "Hoću li dobiti podršku i održavanje nakon izrade web stranice?",
      content:
        "Da, pružamo podršku i održavanje nakon izrade web stranice. Ovisno o potrebama izmjene možete raditi po potrebi. A naplata može ići jednokratno ili prepaid.",
    },
    {
      title: "Što je domena i kako kupiti/dobiti domenu?",
      content:
        "Domena je jedinstveni naziv koji se koristi za identifikaciju web stranice na internetu.<br><br>Domenu možete kupiti od raznih poslužitelja te vam pri tome možemo pomoći. Ukoliko posjedujete obrt imate pravo an besplatnu .hr domenu.<a target='_blank' href='https://domene.hr/portal/register/info-free-hr'>Više info ovdje</a>",
    },
  ];

  function handleClickFaq(index) {
    if (activeFaq === index) {
      return setActiveFaq(null);
    }

    setActiveFaq(index);
  }

  return (
    <section className="faq-section">
      <div className="max-width">
        <div className="faq-section-title">
          <h1>{SectionTitle}</h1>
          <div className="section-two-line"></div>
          <p>Na svaki upit odgovorit ćemo u najkraćem roku.</p>
        </div>
        <div className="faq-section-bottom">
          <div className="faq-section-content">
            <div className="inner-faq-content">
              {data.map((question, index) => (
                <article key={index} className="faq-article">
                  <div
                    onClick={() => handleClickFaq(index)}
                    className={`faq-title ${
                      activeFaq === index ? "active-faq-title" : ""
                    }`}
                  >
                    <h4>{question.title}</h4>
                    <FontAwesomeIcon
                      className={`faq-arrow ${
                        activeFaq === index ? "rotate-faq-arrow" : ""
                      }`}
                      icon={faChevronDown}
                      style={{ color: "#112d4e" }}
                    />
                  </div>
                  <div
                    className={
                      activeFaq === index ? "faq-content-active" : "faq-content"
                    }
                  >
                    <p
                      className={`faq-des ${
                        activeFaq === index ? "active-faq" : ""
                      }`}
                      dangerouslySetInnerHTML={{ __html: question.content }}
                    ></p>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="faq-section-image">
            <img src={FaqImage} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
