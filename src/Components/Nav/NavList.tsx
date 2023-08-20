import { useState } from "react";
import { NAVBARLINKS } from "../../Constants/Navbar";
import { NavLinkProps } from "./nav.types";

function NavList({ toggleSetter }: NavLinkProps) {
  const [active, setActive] = useState<string>("Home");
  const handleNavLink = (title: string): void => {
    setActive(title);
    if (toggleSetter !== undefined) {
      toggleSetter((prev) => !prev);
    }
  };

  return (
    <ul className="nav__list">
      {NAVBARLINKS.map((link) => (
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
