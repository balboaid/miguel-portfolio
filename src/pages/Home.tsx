import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

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
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}

const pillarIcons = [<IconCode key="code" />, <IconBox key="box" />, <IconBrain key="brain" />];

const brands = ['Google', 'IBM', 'Microsoft', 'Meta', 'Red Bull', 'Shell', 'Ambev', 'Iveco'];

const skillIcons: Record<string, string> = {
  React: '⚛', Angular: '🅰', 'Node.js': '🟩', Java: '☕', Python: '🐍',
  'AI & LLMs': '🤖', 'Product Management': '📊', 'UX/UI': '✏',
  'Cloud (AWS / Azure)': '☁', '3D & Creative Tools': '🎨',
  'IA & LLMs': '🤖', 'Gestão de Produto': '📊',
  '3D & Ferramentas Criativas': '🎨',
};

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="relative w-full min-h-screen flex items-center overflow-hidden pt-16">
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_70%_40%,rgba(120,40,200,0.18),transparent)]" />
        <div className="pointer-events-none absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(ellipse_80%_80%_at_80%_20%,rgba(80,20,160,0.12),transparent)]" />

        <div className="relative max-w-7xl w-full mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center py-20">

          {/* Left: text */}
          <div className="flex flex-col gap-6">
            <motion.div {...fade(0.05)}>
              <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                {t.hero.badge}
              </span>
            </motion.div>

            <motion.h1 {...fade(0.1)} className="text-5xl md:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight text-white">
              {t.hero.title}
              <br />
              <span className="text-purple-400">{t.hero.highlight}</span>
            </motion.h1>

            <motion.p {...fade(0.2)} className="text-lg text-gray-300 max-w-lg leading-relaxed">
              {t.hero.tagline}
            </motion.p>

            <motion.div {...fade(0.3)} className="flex flex-wrap gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <IconBriefcase />
                {t.hero.cta_resume}
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <IconMail />
                {t.hero.cta_connect}
              </a>
            </motion.div>
          </div>

          {/* Right: photo placeholder + vertical text */}
          <div className="relative flex justify-center lg:justify-end items-center">
            {/* Glow ring behind photo */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-purple-700/20 blur-3xl" />

            {/* Photo */}
            <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-purple-500/30 bg-zinc-900 flex items-end justify-center">
              <img
                src="/src/assets/hero.png"
                alt="Miguel Nwafor"
                className="w-full h-full object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>

            {/* Vertical text right */}
            <div className="hidden xl:flex flex-col items-center gap-2 absolute right-0 top-1/2 -translate-y-1/2">
              {t.hero.side.map((word, i) => (
                <span key={i} className="text-xs font-bold tracking-[0.3em] text-gray-500 uppercase" style={{ writingMode: 'vertical-rl' }}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PILARES ──────────────────────────────────────────── */}
      <section className="w-full py-8 px-6">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-3 gap-4">
          {t.pillars.map((pillar, i) => (
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
            {brands.map((brand) => (
              <span key={brand} className="text-gray-400 font-bold text-lg md:text-xl tracking-tight opacity-60 hover:opacity-100 transition-opacity">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT + SKILLS + EXPERIENCE ──────────────────────── */}
      <section id="about" className="w-full py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-[auto_1fr_1fr] gap-10 items-start">

          {/* Photo card */}
          <motion.div {...fade(0)} className="hidden md:block w-56 h-64 lg:w-64 lg:h-72 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 shrink-0">
            <img
              src="/src/assets/hero.png"
              alt="Miguel Nwafor"
              className="w-full h-full object-cover object-top"
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          </motion.div>

          {/* About text */}
          <motion.div {...fade(0.1)} id="experience">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {t.about.label}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
              {t.about.title}{' '}
              <span className="text-purple-400">{t.about.highlight}</span>
            </h2>
            <p className="text-gray-300 leading-relaxed text-sm mb-5">{t.about.p}</p>
            <a href="#contact" className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
              {t.about.cta} →
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div {...fade(0.15)} id="skills">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {t.skills.label}
            </span>
            <div className="flex flex-wrap gap-2">
              {t.skills.items.map((skill) => (
                <span
                  key={skill}
                  className="flex items-center gap-1.5 bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5 text-xs font-medium text-gray-200 hover:border-purple-500/50 transition-colors"
                >
                  {skillIcons[skill] && <span className="text-sm">{skillIcons[skill]}</span>}
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Experience counter */}
        <motion.div {...fade(0.2)} className="max-w-7xl mx-auto mt-10">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl px-8 py-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-purple-500" />
              {t.experience.label}
            </span>
            <div className="flex items-baseline gap-1 ml-auto">
              <span className="text-5xl font-black text-white">{t.experience.years}</span>
              <span className="text-2xl font-bold text-gray-400">{t.experience.sub}</span>
            </div>
            <div className="text-gray-400 text-sm max-w-xs">
              {t.experience.desc}
              <br />
              <span className="text-gray-500 text-xs">{t.experience.note}</span>
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
              <div className="text-white font-bold text-lg">{t.cta_banner.title}</div>
              <div className="text-gray-400 text-sm mt-1">{t.cta_banner.sub}</div>
            </div>
            <a
              href="mailto:miguel@miguelnwafor.com.br"
              className="shrink-0 inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
            >
              <IconMail />
              {t.cta_banner.cta} →
            </a>
          </div>
        </motion.div>
      </section>
    </>
  );
}
