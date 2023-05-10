import { HERO } from "../../Constants/Hero";
import "./Stats.css";

function Stats() {
  return (
    <div className="stats">
      <ul className="stats__list">
        {HERO.stats.map((stat) => (
          <li className="stats__item" key={stat.id}>
            <span>{stat.value}</span>
            <span>{stat.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Stats;
