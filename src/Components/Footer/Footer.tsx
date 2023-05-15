import { FOOTER } from "../../Constants/Footer";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer center-elem">
      <div className="footer__main-wrapper">
        <div className="footer__content">
          <img src={FOOTER.logo} alt="HooBank's logo" />
          <p className="dynamic-p">{FOOTER.content}</p>
        </div>
        <div className="footer__links-container">
          {FOOTER.links.map((link) => (
            <div key={link.id} className="footer__list-container">
              <h4 className="footer__title">{link.title}</h4>
              <ul className="footer__list">
                {link.internalLinks.map((subLink) => (
                  <li className="footer__item" key={subLink.id} title="Demo Link">
                    <a href="#" title="Demo Link">
                      {subLink.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__rights-container">
        <p>{`Copyright - ${year} HooBank. All rights reserved`}</p>
        <ul className="footer__icons-list">
          {FOOTER.socialMedia.map((logo) => (
            <li className="footer__icons-item" key={logo.id}>
              <a href={logo.link} target="_blank">
                <img src={logo.icon} alt={`${logo.title} logo`} title={logo.title} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
