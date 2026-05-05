import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <main
      className="
      min-h-screen text-white font-sans
      bg-black 
      bg-[radial-gradient(circle_at_center,_#1B1225_0%,_#000000_70%)]
      "
    >
      {/* Header fixo */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Header />
      </div>

      {/* Home */}
      <section id="home" className="pt-24">
        <Home />
      </section>

      {/* About */}
      <section id="about" className="pt-24">
        <About />
      </section>

      {/* Projects */}
      <section id="projects" className="pt-24">
        <Projects />
      </section>

      {/* Contact */}
      <section id="contact" className="pt-24 pb-32">
        <Contact />
      </section>
    </main>
  );
}