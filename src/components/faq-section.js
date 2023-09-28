import FaqImage from "../assets/images/faq-image.png";
import FAQ from "./faq";

function FAQSection({ SectionTitle, Questions }) {
  return (
    <section className="faq-section">
      <div className="max-width">
        <div className="faq-section-title">
          <h1>{SectionTitle}</h1>
          <div className="section-two-line"></div>
        </div>
        <div className="faq-section-bottom">
          <div className="faq-section-content">
            <div className="inner-faq-content">
              <FAQ questions={Questions} />
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
