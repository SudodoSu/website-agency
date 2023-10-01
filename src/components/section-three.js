import "../App.css";
import OurAgency from "../assets/images/section-3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function SectionThree() {
  return (
    <section className="section-three">
      <div className="content flex max-width">
        <div className="section-three-img">
          <img src={OurAgency} />
        </div>
        <div className="section-three-right">
          <div className="section-three-title">
            <h1>Naša zadaća</h1>
            <div className="section-two-line section-three-line"></div>
          </div>
          <div className="section-three-text">
            <p>
              U našoj agenciji, stvaramo digitalna rješenja prema vašim željama,
              posebno usmjerena prema malim poduzetnicima koji žele izgraditi
              online prisutnost. Naša stručnost obuhvaća izradu web stranica,
              marketinške strategije, e-trgovinu i održavanje web stranica.
              <br />
              <br />
              Svaki projekt za nas je prilika za izražavanje kreativnosti i
              postizanje vaših ciljeva. Naš cilj je pružiti podršku i stručno
              vođenje kroz cijeli proces kako biste postigli online uspjeh.
            </p>
            <button>
              <a href="/contact">
                Besplatne Konzultacije{" "}
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#F9F7F7" }}
                />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="blur-div-blue"></div>
    </section>
  );
}

export default SectionThree;
