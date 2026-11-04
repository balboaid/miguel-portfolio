import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <main className="min-h-screen text-white font-sans bg-black bg-[radial-gradient(circle_at_center,_#1B1225_0%,_#000000_70%)]">
      <Header />

      <div className="pt-16">
        <Home />

        <section id="projects" className="pt-8 pb-24">
          <Projects />
        </section>

        <section id="contact-page" className="pt-8 pb-24">
          <Contact />
        </section>
      </div>
    </main>
  );
}
