import MotionFade from "../components/MotionFade";
import SectionTitle from "../components/SectionTitle";
import { useTranslation } from "../hooks/useTranslation";

const projects = [
  {
    title: { en: "Small Business Websites", pt: "Sites para Pequenos Negócios" },
    desc: { en: "Hundreds of small business websites developed with structured UX & SEO strategy.", pt: "Centenas de sites para pequenos negócios desenvolvidos com UX estruturado e estratégia de SEO." },
    tags: ["React", "UX/UI", "SEO"],
  },
  {
    title: { en: "Motion for Global Brands", pt: "Motion para Marcas Globais" },
    desc: { en: "Motion design and digital animations produced for international marketing campaigns.", pt: "Motion design e animações digitais produzidas para campanhas de marketing internacionais." },
    tags: ["Motion Design", "After Effects", "Branding"],
  },
  {
    title: { en: "AI & Automation Workflows", pt: "Fluxos de IA & Automação" },
    desc: { en: "Applied AI solutions and intelligent automation workflows for business productivity.", pt: "Soluções de IA aplicada e fluxos de automação inteligente para produtividade empresarial." },
    tags: ["AI", "LLMs", "Automation"],
  },
];

export default function Projects() {
  const { t, lang } = useTranslation();

  return (
    <div className="w-full px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title={t.nav.projects} />

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {projects.map((p, index) => (
            <MotionFade key={index}>
              <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-colors group">
                <div className="h-40 bg-gradient-to-br from-purple-900/30 to-zinc-900 flex items-center justify-center">
                  <span className="text-4xl opacity-40">⬡</span>
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold text-white mb-2">{p.title[lang]}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{p.desc[lang]}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full px-2.5 py-0.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </MotionFade>
          ))}
        </div>
      </div>
    </div>
  );
}
