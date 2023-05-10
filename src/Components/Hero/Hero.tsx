import { HERO } from "../../Constants/Hero";
import { discount, robot } from "../../assets";
import "./Hero.css";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div aria-label="discount card" className="hero__discount-card">
          <img src={discount} alt="discount" />
          <p className="hero__card-description">
            <span>20% </span>
            Discount for
            <span> 1 Month </span>
            Account
          </p>
        </div>
        <header className="hero__header">
          <h1 className="hero__title">
            The Next
            <br />
            <span>Generation</span>
            <br />
            Payment Method
          </h1>
          <p className="hero__description">{HERO.content}</p>
        </header>
      </div>
      <div className="hero__img">
        <img src={robot} alt="hero illustration" />
        <div className="gradient-pink"></div>
        <div className="gradient-white"></div>
        <div className="gradient-blue"></div>
      </div>
    </section>
  );
}

export default Hero;
