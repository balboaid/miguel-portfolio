import MotionFade from "../components/MotionFade";
import SectionTitle from "../components/SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "Bad Boy E-commerce",
      desc: "High performing merchandising focused store built with cinematic visuals",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      title: "Ueni Websites",
      desc: "Hundreds of small business sites developed with structured UX & SEO",
      img: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    },
    {
      title: "Motion for Global Brands",
      desc: "Motion design and animations for international campaigns",
      img: "https://images.unsplash.com/photo-1550439062-609e1531270e",
    }
  ];

  return (
    <div id="projects" className="w-full py-32 bg-black text-gray-300">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle title="Projects" />

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((p, index) => (
            <MotionFade key={index}>
              <div className="bg-zinc-900/60 rounded-xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
                <img src={p.img} className="w-full h-52 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <p className="text-gray-400 mt-2">{p.desc}</p>
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </div>
  );
}