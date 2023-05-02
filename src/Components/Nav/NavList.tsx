import { useState } from "react";
import { NAVBARLINKS } from "../../Constants/Navbar";
import { NavLink } from "./Nav.types";

function NavList() {
  const [active, setActive] = useState<string>("Home");
  const handleNavLink = (title: string): void => setActive(title);

  return (
    <ul className="nav__list">
      {NAVBARLINKS.map((link: NavLink) => (
        <li key={link.id} onClick={() => handleNavLink(link.title)}>
          <a
            className={active === link.title ? "nav__link--active" : "nav__link"}
            href={`#${link.id}`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
