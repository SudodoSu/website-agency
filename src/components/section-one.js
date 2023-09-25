import "../App.css";
import CompImg from "../assets/images/section-one-rotate-2.png";

function SectionOne() {
  return (
    <section className="section-one">
      <div className="max-width flex">
        <div className="section-one-title">
          <h1>Vaš Partner za Vrhunski Web Dizajn i Razvoj</h1>
          <p>
            Izradili smo web stranice koje ne samo privlače, već i zadržavaju
            korisnike zahvaljujući njihovom jedinstvenom dizajnu i
            funkcionalnosti.
          </p>
          <button>
            <a href="/contact">Lansiraj Stranicu</a>
          </button>
        </div>
        <div className="section-one-compimg">
          <img src={CompImg} />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
