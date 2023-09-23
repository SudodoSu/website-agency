import "../App.css";
import Logo from "../assets/images/logo-min2.png";
import DarkLogo from "../assets/images/dark-logo.png";
import { useState, useEffect } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hamburgerColor, setHamburgerColor] = useState("freeze");

  function HandleScroll() {
    if (window.scrollY > 0) {
      setScrolled(true);
      setHamburgerColor("#000");
    } else {
      setScrolled(false);
      setHamburgerColor("#F9F7F7");
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);

    return () => {
      window.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        {!scrolled && (
          <a href="/" className="logo">
            <img
              src={Logo}
              alt="logo boost web"
              className={`nav-logo ${scrolled ? "scrolled" : ""}`}
            />
          </a>
        )}
        {scrolled && (
          <a className="logo">
            <img
              src={DarkLogo}
              alt="logo boost web"
              className={`nav-logo ${scrolled ? "scrolled" : ""}`}
            />
          </a>
        )}
        <ul className="navbar-lista">
          <li>
            <a href="/" className={`nav-a ${scrolled ? "scrolled" : ""}`}>
              Početna
            </a>
          </li>
          <li>
            <a
              href="/services"
              className={`nav-a ${scrolled ? "scrolled" : ""}`}
            >
              Services
            </a>
          </li>
          <li>
            <a className={`nav-a ${scrolled ? "scrolled" : ""}`}>Reference</a>
          </li>
          <button className="button-class" type="button">
            <a href="/contact">
              Besplatne Konzultacije <span>zakaži odmah!</span>
            </a>
          </button>
        </ul>
        <svg
          className="hb"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 10 10"
          stroke={hamburgerColor}
          strokeWidth=".6"
          fill="rgba(0, 0, 0, 0)"
          strokeLinecap="round"
          style={{ cursor: "pointer" }}
          width="50"
          height="50"
        >
          <path d="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7">
            <animate
              dur="0.2s"
              attributeName="d"
              values="M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7;M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7"
              fill="freeze"
              begin="start.begin"
            />
            <animate
              dur="0.2s"
              attributeName="d"
              values="M3,3L5,5L7,3M5,5L5,5M3,7L5,5L7,7;M2,3L5,3L8,3M2,5L8,5M2,7L5,7L8,7"
              fill="freeze"
              begin="reverse.begin"
            />
          </path>
          <rect width={10} height={10} stroke="none">
            <animate
              dur="2s"
              id="reverse"
              attributeName="width"
              begin="click"
            />
          </rect>
          <rect width={10} height={10} stroke="none">
            <animate
              dur="0.001s"
              id="start"
              attributeName="width"
              values="10;0"
              fill="freeze"
              begin="click"
            />
            <animate
              dur="0.001s"
              attributeName="width"
              values="0;10"
              fill="freeze"
              begin="reverse.begin"
            />
          </rect>
        </svg>
      </nav>
    </header>
  );
}

export default Header;
