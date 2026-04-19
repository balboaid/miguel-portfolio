type Project = {
  title: string;
  description: string;
};

const projects: Project[] = [
  {
    title: "DJ Vinyl Store",
    description: "Custom eCommerce experience with automated assets pipeline."
  },
  {
    title: "TAKA Dog Walk",
    description: "Full brand and website for a canine wellbeing company in the US."
  },
  {
    title: "Google Brazil",
    description: "High-end digital production and internal platforms."
  },
  {
    title: "Red Bull",
    description: "Visual and digital assets for LATAM campaigns."
  },
  {
    title: "XP Investimentos",
    description: "Frontend and UX for financial platforms."
  },
  {
    title: "Shell",
    description: "UX and UI for mobility and energy products."
  }
];

export default function Projects() {
  return (
    <section className="px-6 md:px-20 py-24 max-w-7xl mx-auto">
      
      {/* Title */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Selected Work
        </h2>
        <p className="text-gray-400">
          A selection of high-end digital projects across industries.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group border border-zinc-800 rounded-xl p-6 bg-zinc-900/40 backdrop-blur hover:border-purple-500 transition"
          >
            <div className="h-40 bg-zinc-800 rounded mb-4" />

            <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-400 transition">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}