import "./social.css";

import Header from "../header";
import Footer from "../footer";
import FristSection from "../first-section";

import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import youtube from "../../assets/images/youtube.png";
import tiktok from "../../assets/images/tiktok.png";
import linkedin from "../../assets/images/linkedin.png";
import twitter from "../../assets/images/twitter.png";
import integration from "../../assets/images/integration.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

function Social() {
  const images = [facebook, instagram, youtube, tiktok, linkedin, twitter];

  return (
    <>
      <Header />
      <FristSection title="Društvene mreže" />
      <main>
        <section className="social">
          <div className="max-width">
            <h2>Važnost društvenih mreža</h2>
            <p>
              Integriranje web stranice s društvenim mrežama omogućuje
              klijentima da lako dijele sadržaj s prijateljima i prate društvene
              mreže kompanije bez potrebe da se prebacuju na druge web stranice.
              To također pomaže u povećanju prometa na web stranici i
              poboljšanju SEO-a. Klijentima se također omogućuje da se lako i
              brzo povežu s kompanijom putem društvenih mreža i da prate njene
              aktivnosti. Ukratko, integracija web stranice s društvenim mrežama
              pomaže u povećanju komunikacije i povezanosti s klijentima, što je
              od koristi za rast i razvoj kompanije.
            </p>
          </div>
        </section>
        <section className="social-two">
          <div className="max-width">
            <div className="social-two-images">
              {images.map((image, index) => (
                <div>
                  <img key={index} src={image} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="social-three">
          <div className="max-width">
            <div className="social-three-title">
              <h2>Integracija</h2>
            </div>
            <div className="social-bellow-content">
              <div className="social-bellow-content-text">
                <div>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ color: "#112d4e" }}
                    size="2xl"
                  />
                  <p>
                    Gumbi za društveno dijeljenje: omogućuju korisnicima da
                    jednostavno dijele sadržaj s prijateljima na društvenim
                    mrežama poput Facebooka, Twittera i LinkedIn-a.
                  </p>
                </div>
                <div>
                  <FontAwesomeIcon
                    icon={faThumbsUp}
                    style={{ color: "#112d4e" }}
                    size="2xl"
                  />
                  <p>
                    Widgetovi za društvene mreže: pružaju korisnicima pregled
                    najnovijih objave i aktivnosti na društvenim mrežama, kao
                    što su Twitter feed ili Facebook stranica widget.
                  </p>
                </div>
              </div>
              <div className="social-bellow-image">
                <img src={integration} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Social;
