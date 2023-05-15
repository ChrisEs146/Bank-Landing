import { FEATURES } from "../../Constants/Features";
import FeatureCard from "./FeatureCard";
import StartButton from "../SubComponents/StartButton";
import "./Features.css";
function Features() {
  return (
    <section id="features" className="features center-elem">
      <header className="features__header text-center">
        <h2 className="dynamic-h2">{FEATURES.title}</h2>
        <p className="dynamic-p">{FEATURES.content}</p>
        <StartButton text="Get Started" />
      </header>
      <ul className="features__list">
        {FEATURES.features.map((feature) => (
          <FeatureCard
            id={feature.id}
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </ul>
    </section>
  );
}

export default Features;
