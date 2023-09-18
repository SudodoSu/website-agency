import "../App.css";
import Logo from "../assets/images/logo-min2.png";
import DarkLogo from "../assets/images/dark-logo.png";
import { useState, useEffect } from 'react';

function Header() {

    const [scrolled, setScrolled] = useState(false);

    function HandleScroll() {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    useEffect(() => {
      window.addEventListener("scroll", HandleScroll);

      return () => {
        window.removeEventListener("scroll", HandleScroll);
      };
    }, []);

    return (
        <header className={(scrolled) ? "scrolled" : ""}>
            <nav className={`navbar ${(scrolled) ? "scrolled" : ""}`}>
                {(!scrolled) && <a href="/" className="logo">
                  <img src={Logo} alt="logo boost web" className={`nav-logo ${(scrolled) ? "scrolled" : ""}`}/>
                </a>}
                {scrolled && <a className="logo">
                  <img src={DarkLogo} alt="logo boost web" className={`nav-logo ${(scrolled) ? "scrolled" : ""}`}/>
                </a>}
              <ul className="navbar-lista">
                <li><a href="/" className={`nav-a ${(scrolled) ? "scrolled" : ""}`}>Početna</a></li>
                <li><a href="/services" className={`nav-a ${(scrolled) ? "scrolled" : ""}`}>Services</a></li>
                <li><a className={`nav-a ${(scrolled) ? "scrolled" : ""}`}>Reference</a></li>
                <button className="button-class" type="button"><a href="/contact">Besplatne Konzultacije <span>zakaži odmah!</span></a></button>
              </ul>
            </nav>
        </header>
    );
}

export default Header;