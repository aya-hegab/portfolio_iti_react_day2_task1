import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hero from "./componants/hero";
import About from "./componants/About";
import Skills from "./componants/Skills";
import Portfolio from "./componants/portfolio";
import Footer from "./componants/Footer";
import "./componants/hero.css";
import "./componants/About.css";
import "./componants/Skills.css";
import "./componants/potfolio.css";
import "./componants/Footer.css";
import "./App.css";

function App() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
      {/* <button className="btn btn-danger"></button> */}
    </>
  );
}

export default App;
