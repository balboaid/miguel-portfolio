import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';

// ---------- Icons (inline SVG) ----------
function IconCode() {
  return (
    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}
function IconBox() {
  return (
    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 1-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081-.768-2.015-1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}

const pillarIcons = [<IconCode key="code" />, <IconBox key="box" />, <IconBrain key="brain" />];

const brands = ['Google', 'Shell', 'Ambev', 'Red Bull', 'Iveco', 'XP Investimentos', 'Omnibees', 'UENI'];

const skillIcons: Record<string, string> = {
  React: 'React', Angular: 'Angular', 'Node.js': 'Node', Java: 'Java', Python: 'Python',
  'AI & LLMs': 'AI', 'Product Management': 'Product', 'UX/UI': 'UX',
  'Cloud (AWS / Azure)': 'Cloud', '3D & Creative Tools': '3D',
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Home() {
  const { t, lang } = useTranslation();
  const hero = t.hero;
  const pillars = t.pillars;
  const about = t.about_page;
  const skills = t.skills_page;
  const experience = t.experience_page;
  const contact = t.contact_page;

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative w-full min-h-screen overflow-hidden pt-16">
        {/* Background image (desktop) */}
        <div className="hidden lg:block absolute inset-0">
          <div className="w-full h-full bg-[url('/hero.jpg')] bg-no-repeat bg-right bg-contain bg-zinc-900" />
        </div>
        {/* Radial glow overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(120,40,200,0.18),transparent)]" />
        {/* Dark overlay for readability */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-black/10" />

        <div className="relative max-w-7xl w-full mx-auto px-6 flex items-center py-20 min-h-screen">
          <div className="flex flex-col gap-6 max-w-2xl">
            <motion.div {...fade(0.05)}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                {hero.badge}
              </span>
            </motion.div>

            <motion.h1 {...fade(0.1)} className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
              {hero.title}
              <br />
              <span className="text-purple-400">{hero.subtitle}</span>
            </motion.h1>

            <motion.p {...fade(0.2)} className="text-lg text-gray-300 max-w-lg leading-relaxed">
              {hero.tagline}
            </motion.p>

            <motion.div {...fade(0.3)} className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                {IconMail()} {hero.cta_connect}
              </Link>
              <a
                href="/cv/miguel-nwafor-cv-en.pdf"
                download="Miguel-Nwafor-CV-EN.pdf"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/50 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                {IconBriefcase()} {hero.cta_resume}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PILARES ──────────────────────────────────────────── */}
      <section className="w-full py-8 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-4">
          {pillars.map((pillar, i) => (
            <motion.div key={i} {...fade(0.1 * i)}
              className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-5 hover:border-purple-500/40 transition-colors group cursor-default"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors">
                {pillarIcons[i]}
              </div>
              <div>
                <div className="text-white font-semibold text-sm">{pillar.title}</div>
                <div className="text-gray-400 text-xs mt-0.5 leading-relaxed">{pillar.desc}</div>
              </div>
              <span className="ml-auto text-gray-600 group-hover:text-purple-400 transition-colors text-lg">→</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── BRANDS ───────────────────────────────────────────── */}
      <section className="w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-6">{t.brands.label}</p>
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <span key={i} className="text-gray-400 font-bold text-lg md:text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ─────────────────────────────────────────── */}
      <section id="projects" className="w-full py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-purple-400 mb-6">
            {t.projects_page.title}
          </p>
          <div className="grid md:grid-cols-4 gap-5 mt-3">
            {[
              { title: { en: "Bosch® Car Service", pt: "Bosch® Car Service" }, type: { en: "Website", pt: "Website" }, behanceUrl: "https://www.behance.net/gallery/203838285/Bosch-Car-Service-Website-AHP-Campinas", thumbnail: "/thumbnails/Bosch Car Service.png" },
              { title: { en: "E-Commerce - BAD BOY", pt: "E-Commerce - BAD BOY" }, type: { en: "E-commerce", pt: "E-commerce" }, behanceUrl: "https://www.behance.net/gallery/223343701/E-Commerce-BAD-BOY", thumbnail: "/thumbnails/E-Commerce - BAD BOY.png" },
              { title: { en: "Hotsite - TEGRA", pt: "Hotsite - TEGRA" }, type: { en: "Hotsite", pt: "Hotsite" }, behanceUrl: "https://www.behance.net/gallery/156883727/Hotsite-TEGRA-Grand-Guanabara-Campinas", thumbnail: "/thumbnails/TEGRA.png" },
              { title: { en: "Key Visual - CYRELA", pt: "Key Visual - CYRELA" }, type: { en: "Key Visual", pt: "Key Visual" }, behanceUrl: "https://www.behance.net/gallery/157318135/Key-Visual-CYRELA", thumbnail: "/thumbnails/Key Visual - CYRELA.png" },
              { title: { en: "Key Visual - TEAM NOGUEIRA", pt: "Key Visual - TEAM NOGUEIRA" }, type: { en: "Key Visual", pt: "Key Visual" }, behanceUrl: "https://www.behance.net/gallery/157319139/Key-Visual-TEAM-NOGUEIRA", thumbnail: "/thumbnails/Key Visual - TEAM NOGUEIRA.png" },
              { title: { en: "Newsletter HTML - AMBEV _ CORONA EXTRA", pt: "Newsletter HTML - AMBEV _ CORONA EXTRA" }, type: { en: "Newsletter", pt: "Newsletter" }, behanceUrl: "https://www.behance.net/gallery/156883927/Newsletter-HTML-AMBEV-CORONA-EXTRA", thumbnail: "/thumbnails/CORONA.png" },
              { title: { en: "Site - Brazil Health + Estadão _ UI_UX", pt: "Site - Brazil Health + Estadão _ UI_UX" }, type: { en: "Site", pt: "Site" }, behanceUrl: "https://www.behance.net/gallery/220337937/Site-Brazil-Health-Estadao-UIUX", thumbnail: "/thumbnails/Site - Brazil Health + Estadão _ UI_UX.png" },
              { title: { en: "The Lord's Pub - Logo", pt: "The Lord's Pub - Logo" }, type: { en: "Logo", pt: "Logo" }, behanceUrl: "https://www.behance.net/gallery/95214371/The-Lords-Pub-Logo", thumbnail: "/thumbnails/LORD'S PUB.png" },
              { title: { en: "Video Motion - GERMÂNIA CHOPP", pt: "Video Motion - GERMÂNIA CHOPP" }, type: { en: "Video Motion", pt: "Video Motion" }, behanceUrl: "https://www.behance.net/gallery/157317609/Video-Motion-GERMANIA-CHOPP", thumbnail: "/thumbnails/Video Motion - GERMÂNIA CHOPP.png" },
              { title: { en: "Video Motion - SHELL", pt: "Video Motion - SHELL" }, type: { en: "Video Motion", pt: "Video Motion" }, behanceUrl: "https://www.behance.net/gallery/157317137/Video-Motion-SHELL", thumbnail: "/thumbnails/SHELL.png" },
              { title: { en: "XP Investimentos", pt: "XP Investimentos" }, type: { en: "Investments", pt: "Investimentos" }, behanceUrl: "https://www.behance.net/gallery/95109307/XP-Investimentos", thumbnail: "/thumbnails/XP Investimentos.png" },
              { title: { en: "Hotsite - VITACON", pt: "Hotsite - VITACON" }, type: { en: "Hotsite", pt: "Hotsite" }, behanceUrl: "https://www.behance.net/gallery/156884977/Hotsite-VITACON-Isabelle-Quaglio", thumbnail: "/thumbnails/VITACON.png" },
              { title: { en: "Cartão de Visitas - SETIN INCORPORADORA", pt: "Cartão de Visitas - SETIN INCORPORADORA" }, type: { en: "Website", pt: "Website" }, behanceUrl: "https://www.behance.net/gallery/157225691/Cartao-de-Visitas-SETIN-INCORPORADORA", thumbnail: "/thumbnails/SETIN.png" },
            ].map((project) => (
              <a
                key={project.behanceUrl}
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-colors group"
              >
                <img
                  src={project.thumbnail}
                  alt={project.title[lang ?? "pt"]}
                  className="w-full h-32 object-cover"
                  loading="lazy"
                />
                <div className="p-3">
                  <h4 className="text-sm font-semibold text-white mb-1 uppercase">{project.title[lang ?? "pt"]}</h4>
                  <p className="text-xs text-gray-400">{project.type[lang ?? "pt"]}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + SKILLS + EXPERIENCE ──────────────────────── */}
      <section id="about" className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-[auto_1fr_1fr] gap-10 items-start">

          {/* Photo card */}
          <motion.div {...fade(0)} className="hidden md:block w-56 h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden bg-[url('/hero.jpg')] bg-no-repeat bg-center bg-cover bg-zinc-900 border border-white/10 shrink-0" />

          {/* About text */}
          <motion.div {...fade(0.1)} id="experience">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {about.title}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              {about.headline}{' '}
              <span className="text-purple-400">{about.highlight}</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-5">{about.intro}</p>
            <Link to="/about" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
              {about.cta} →
            </Link>
          </motion.div>

          {/* Skills */}
          <motion.div {...fade(0.15)} id="skills">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {skills.title}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.categories.map((cat) =>
                cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-gray-200 hover:border-purple-500/50 transition-colors"
                  >
                    {skillIcons[skill] && <span className="text-sm">{skillIcons[skill]}</span>}
                    {skill}
                  </span>
                ))
              )}
            </div>
          </motion.div>
        </div>

        {/* Experience counter */}
        <motion.div {...fade(0.2)} className="max-w-7xl mx-auto mt-10">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {experience.title}
            </span>
            <div className="flex items-baseline gap-1 ml-auto">
              <span className="text-5xl font-black text-white">{experience.years}</span>
              <span className="text-2xl font-bold text-gray-400">{experience.years}</span>
            </div>
            <div className="text-gray-400 text-sm max-w-xs">
              {experience.subtitle}
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────── */}
      <section id="contact" className="w-full px-6 pb-24">
        <motion.div {...fade(0)} className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-white/[0.04] border border-white/10 rounded-2xl px-8 py-8 flex flex-col md:flex-row items-center gap-6">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_0%_50%,rgba(120,40,200,0.12),transparent)]" />
            <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <div className="text-white font-bold text-lg">{t.contact_page.title}</div>
              <div className="text-gray-400 text-sm mt-1">
                Entre em contato para que possamos desenvolver projetos de tecnologia, engenharia de software, produtos digitais e IA aplicada.
              </div>
            </div>
            <a
              href="mailto:miguel@miguelnwafor.com.br"
              className="shrink-0 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              {IconMail()} {contact.cta} →
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}