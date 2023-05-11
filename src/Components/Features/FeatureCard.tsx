import { FeatureProps } from "./Feature.types";
function FeatureCard({ icon, title, content, id }: FeatureProps) {
  return (
    <li key={id} className="features__item">
      <div>
        <img src={icon} alt="Feature's icon" />
      </div>
      <div>
        <h3 className="dynamic-h3">{title}</h3>
        <p className="dynamic-p-1">{content}</p>
      </div>
    </li>
  );
}

export default FeatureCard;
