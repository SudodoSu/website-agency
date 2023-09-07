import "../App.css";
import Logo from "../assets/images/logo-min2.png";

function Header() {
    return (
        <header>
            <nav className="navbar">
              <div className="logo">
                <a className="logo">
                  <img src={Logo} alt="logo boost web"/>
                </a>
              </div>
              
              <ul className="navbar-lista">
                <li><a>Početna</a></li>
                <li><a>Zašto Mi</a></li>
                <li><a>Reference</a></li>
                <li><button type="button">Besplatne Konzultacije <span>zakaži odmah</span></button></li>
              </ul>
            </nav>
        </header>
    );
}

export default Header;