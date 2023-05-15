import StartButton from "../SubComponents/StartButton";
import "./Cta.css";
function Cta() {
  return (
    <div aria-label="Call to action card" className="cta">
      <header className="cta__header text-center">
        <h2 className="cta__title">Let's try our service now!</h2>
        <p className="dynamic-p">
          Everything you need to accept card payments and grow your business anywhere.
        </p>
      </header>
      <StartButton text="Get Started" />
    </div>
  );
}

export default Cta;
