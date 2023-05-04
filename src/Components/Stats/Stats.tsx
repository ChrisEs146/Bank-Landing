import { HERO } from "../../Constants/Hero";
import "./Stats.css";
function Stats() {
  return (
    <ul className="stats">
      {HERO.stats.map((stat) => (
        <li key={stat.id}>
          <span>{stat.value}</span>
          <span>{stat.text}</span>
        </li>
      ))}
    </ul>
  );
}

export default Stats;
