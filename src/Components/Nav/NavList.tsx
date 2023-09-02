import { useState } from "react";
import { NAVBARLINKS } from "../../Constants/Navbar";
import { NavLinkProps } from "./nav.types";

function NavList({ toggleSetter }: NavLinkProps) {
  const handleNavLink = (): void => {
    if (toggleSetter !== undefined) {
      toggleSetter((prev) => !prev);
    }
  };

  return (
    <ul className="nav__list">
      {NAVBARLINKS.map((link) => (
        <li key={link.id} onClick={handleNavLink}>
          <a className={"nav__link"} href={`#${link.id}`}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavList;
