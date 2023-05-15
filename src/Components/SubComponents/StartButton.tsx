import { ButtonProps } from "./button.types";
function StartButton({ text }: ButtonProps) {
  return (
    <a href="#" className="start-btn">
      {text}
    </a>
  );
}

export default StartButton;
