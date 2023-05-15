import { DEALS } from "../../Constants/Deals";
import StartButton from "../SubComponents/StartButton";
import "./Deals.css";
function Deals() {
  return (
    <section className="deals center-elem" id="deals">
      <header className="deals__header text-center">
        <h2 className="dynamic-h2">{DEALS.title}</h2>
        <p className="dynamic-p">{DEALS.content}</p>
        <StartButton text="Get Started" />
      </header>
      <div className="deals__img">
        <img src={DEALS.mainImage} alt="Analytics illustrations" />
      </div>
    </section>
  );
}

export default Deals;
