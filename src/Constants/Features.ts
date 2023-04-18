import { star, send, shield } from "../assets";
export const FEATURES = {
  title: "You do the business, we'll handle the money.",
  content:
    "With the right credit card, you can improve your financial life by building credit, earning rewards and saving money.",
  features: [
    {
      id: "f-1",
      title: "Rewards",
      icon: star,
      content: "The best credit cards offer some tantalizing combination of promotions and prizes.",
    },
    {
      id: "f-2",
      title: "100% Secured",
      icon: shield,
      content: "We take proactive steps to make sure your information and transactions are secure.",
    },
    {
      id: "f-3",
      title: "Balance Transfer",
      icon: send,
      content: "A balance transfer credit card can save you a lot of money in interest charges.",
    },
  ],
};
