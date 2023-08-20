import { logo, close, menu } from "../../assets";
import { useState } from "react";
import NavList from "./NavList";
import "./Nav.css";

function Nav() {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const handleMenuToggle = (): void => setIsToggle(!isToggle);
  return (
    <nav className="nav">
      <div className="nav__container">
        <img src={logo} alt="hoobank" className="nav__logo" />
        <img
          src={isToggle ? close : menu}
          alt="Menu icon"
          className="nav__menu"
          onClick={handleMenuToggle}
        />
        <div className={`nav__mobile-menu ${isToggle ? "visible" : "hidden"}`}>
          <NavList toggleSetter={setIsToggle} />
        </div>
        <div className="nav__desktop-menu">
          <NavList />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
