import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function App() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      {/* Header fixo */}
      <section id="header" className="fixed top-0 left-0 w-full z-50">
        <Header />
      </section>

      {/* Home */}
      <section id="home" className="pt-24">
        <Hero />
      </section>

      {/* About 
      <section id="about" className="pt-24">
        <About />
      </section>
      */}

      {/* Projects */}
      <section id="projects" className="pt-24">
        <Projects />
      </section>

      {/* Contact 
      <section id="contact" className="pt-24">
        <Contact />
      </section>
      */}
    </main>
  );
}