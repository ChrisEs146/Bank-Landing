import { HERO } from "../../Constants/Hero";
import { discount, robot } from "../../assets";
import "./Hero.css";
function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__discount-card">
          <img src={discount} alt="discount" />
          <p>
            <span>20% </span>
            Discount for
            <span> 1 Month </span>
            Account
          </p>
        </div>
        <header className="hero__text">
          <h1>
            The Next
            <br />
            <span>Generation</span>
            <br />
            Payment Method
          </h1>
          <p>{HERO.content}</p>
        </header>
      </div>
      <div className="hero__img">
        <img src={robot} alt="hero illustration" />
      </div>
    </section>
  );
}

export default Hero;
