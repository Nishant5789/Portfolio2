import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-slate-900 bg-[url('https://cdn.jsdelivr.net/gh/jashezan/jashezan-reactjs-tailwindcss-portfolio/public/vanishing-stripes.svg')] bg-blend-overlay backdrop-blur-md">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <SocialLinks />
    </>
  );
}

export default App;
