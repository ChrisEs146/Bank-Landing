import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import Features from "./Components/Features/Features";
import Billing from "./Components/Billing/Billing";
import Deals from "./Components/Deals/Deals";
import Testimonials from "./Components/Testimonials/Testimonials";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <Stats />
      <Features />
      <Billing />
      <Deals />
      <Testimonials />
    </div>
  );
}

export default App;
