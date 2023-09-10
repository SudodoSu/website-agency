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
                {(!scrolled) && <a className="logo">
                  <img src={Logo} alt="logo boost web" className={`nav-logo ${(scrolled) ? "scrolled" : ""}`}/>
                </a>}
                {scrolled && <a className="logo">
                  <img src={DarkLogo} alt="logo boost web" className={`nav-logo ${(scrolled) ? "scrolled" : ""}`}/>
                </a>}
              <ul className="navbar-lista">
                <li><a className={(scrolled) ? "scrolled" : ""}>Početna</a></li>
                <li><a className={(scrolled) ? "scrolled" : ""}>Zašto Mi</a></li>
                <li><a className={(scrolled) ? "scrolled" : ""}>Reference</a></li>
                <li className="button-class"><button type="button">Besplatne Konzultacije <span>zakaži odmah</span></button></li>
              </ul>
            </nav>
        </header>
    );
}

export default Header;