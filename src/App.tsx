import Nav from "./Components/Nav/Nav";
import Hero from "./Components/Hero/Hero";
import Stats from "./Components/Stats/Stats";
import Features from "./Components/Features/Features";
import Billing from "./Components/Billing/Billing";
import Deals from "./Components/Deals/Deals";
import Testimonials from "./Components/Testimonials/Testimonials";
import Cta from "./Components/CTA/Cta";
import Footer from "./Components/Footer/Footer";

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
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
