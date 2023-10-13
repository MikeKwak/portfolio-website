import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Experiences, Projects, Contact, StarsCanvas } from "./components";

function App() {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <About />
        <Experiences />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App
