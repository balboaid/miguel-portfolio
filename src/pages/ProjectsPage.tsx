import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const projectsData = [
  {
    title: { en: "Bosch® Car Service", pt: "Bosch® Car Service" },
    type: { en: "Website", pt: "Website" },
    behanceUrl: "https://www.behance.net/gallery/203838285/Bosch-Car-Service-Website-AHP-Campinas",
    thumbnail: "/thumbnails/Bosch Car Service.png",
  },
  {
    title: { en: "SETIN INCORPORADORA", pt: "SETIN INCORPORADORA" },
    type: { en: "Website", pt: "Website" },
    behanceUrl: "https://www.behance.net/gallery/157225691/Cartao-de-Visitas-SETIN-INCORPORADORA",
    thumbnail: "/thumbnails/SETIN.png",
  },
  {
    title: { en: "E-Commerce - BAD BOY", pt: "E-Commerce - BAD BOY" },
    type: { en: "E-commerce", pt: "E-commerce" },
    behanceUrl: "https://www.behance.net/gallery/223343701/E-Commerce-BAD-BOY",
    thumbnail: "/thumbnails/E-Commerce - BAD BOY.png",
  },
  {
    title: { en: "Hotsite - TEGRA", pt: "Hotsite - TEGRA" },
    type: { en: "Hotsite", pt: "Hotsite" },
    behanceUrl: "https://www.behance.net/gallery/156883727/Hotsite-TEGRA-Grand-Guanabara-Campinas",
    thumbnail: "/thumbnails/TEGRA.png",
  },
  {
    title: { en: "Hotsite - VITACON", pt: "Hotsite - VITACON" },
    type: { en: "Hotsite", pt: "Hotsite" },
    behanceUrl: "https://www.behance.net/gallery/156884977/Hotsite-VITACON-Isabelle-Quaglio",
    thumbnail: "/thumbnails/VITACON.png",
  },
  {
    title: { en: "Key Visual - CYRELA", pt: "Key Visual - CYRELA" },
    type: { en: "Key Visual", pt: "Key Visual" },
    behanceUrl: "https://www.behance.net/gallery/157318135/Key-Visual-CYRELA",
    thumbnail: "/thumbnails/Key Visual - CYRELA.png",
  },
  {
    title: { en: "Key Visual - TEAM NOGUEIRA", pt: "Key Visual - TEAM NOGUEIRA" },
    type: { en: "Key Visual", pt: "Key Visual" },
    behanceUrl: "https://www.behance.net/gallery/157319139/Key-Visual-TEAM-NOGUEIRA",
    thumbnail: "/thumbnails/Key Visual - TEAM NOGUEIRA.png",
  },
  {
    title: { en: "Newsletter HTML - AMBEV _ CORONA EXTRA", pt: "Newsletter HTML - AMBEV _ CORONA EXTRA" },
    type: { en: "Newsletter", pt: "Newsletter" },
    behanceUrl: "https://www.behance.net/gallery/156883927/Newsletter-HTML-AMBEV-CORONA-EXTRA",
    thumbnail: "/thumbnails/CORONA.png",
  },
  {
    title: { en: "Site - Brazil Health + Estadão _ UI_UX", pt: "Site - Brazil Health + Estadão _ UI_UX" },
    type: { en: "Site", pt: "Site" },
    behanceUrl: "https://www.behance.net/gallery/220337937/Site-Brazil-Health-Estadao-UIUX",
    thumbnail: "/thumbnails/Site - Brazil Health + Estadão _ UI_UX.png",
  },
  {
    title: { en: "The Lord's Pub - Logo", pt: "The Lord's Pub - Logo" },
    type: { en: "Logo", pt: "Logo" },
    behanceUrl: "https://www.behance.net/gallery/95214371/The-Lords-Pub-Logo",
    thumbnail: "/thumbnails/LORD'S PUB.png",
  },
  {
    title: { en: "Video Motion - GERMÂNIA CHOPP", pt: "Video Motion - GERMÂNIA CHOPP" },
    type: { en: "Video Motion", pt: "Video Motion" },
    behanceUrl: "https://www.behance.net/gallery/157317609/Video-Motion-GERMANIA-CHOPP",
    thumbnail: "/thumbnails/Video Motion - GERMÂNIA CHOPP.png",
  },
  {
    title: { en: "Video Motion - SHELL", pt: "Video Motion - SHELL" },
    type: { en: "Video Motion", pt: "Video Motion" },
    behanceUrl: "https://www.behance.net/gallery/157317137/Video-Motion-SHELL",
    thumbnail: "/thumbnails/SHELL.png",
  },
  {
    title: { en: "XP Investimentos", pt: "XP Investimentos" },
    type: { en: "Investments", pt: "Investimentos" },
    behanceUrl: "https://www.behance.net/gallery/95109307/XP-Investimentos",
    thumbnail: "/thumbnails/XP Investimentos.png",
  },
];

export default function ProjectsPage() {
  const { t, lang } = useTranslation();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {t.projects_page.title}
          </h1>
          <p className="text-xl text-gray-300">
            {t.projects_page.subtitle}
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div {...fade(0.1)} className="grid md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-colors"
            >
              <img
                src={project.thumbnail}
                alt={project.title[lang ?? "pt"]}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-5">
                <h3 className="text-base font-semibold text-white mb-2 uppercase">
                  {project.title[lang ?? "pt"]}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{project.type[lang ?? "pt"]}</p>
                <a
                  href={project.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-purple-400 text-sm underline hover:text-purple-300 transition-colors"
                >
                  Behance
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}