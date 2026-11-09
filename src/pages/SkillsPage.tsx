import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

function IconBrain() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  );
}
function IconBriefcase() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081-.768-2.015-1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
    </svg>
  );
}
function IconPalette() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3v13.5a9 9 0 1 0 9-9H7.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.75 15 11.25m0 0L8.25 18m6.75-6.75 5.25 5.25m-13.5 0-5.25 5.25" />
    </svg>
  );
}
function IconCube() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.5C21 16.88 20.79 17.21 20.44 17.38 20.09 17.55 19.76 17.55 19.41 17.38l-5.3-3.03c-.36-.2-.56-.6-.56-1.04V5.77c0-.45.2-1.05.56-1.04l5.3-3.03c.36-.2.69-.2 1.04 0l5.3 3.03c.35.17.55.5.56 1.04v6.66c0 .44-.2 1.04-.56 1.04-.35.17-.68.17-1.04 0l-5.3 3.03Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.41 17.38l-5.3 3.03c-.35.17-.68.17-1.04 0l-5.3-3.03M12 2.25V21" />
    </svg>
  );
}
function IconCloud() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.59 3.8a2.25 2.25 0 1 0 1.82 4.4H4.5a3 3 0 0 0-2.83 4 3 3 0 0 0 2.45 5.09c.31.28.69.41 1.07.28 1.13-.39 2.13-1.26 2.7-2.55a5.25 5.25 0 0 1 5.2-5.25c.3-.03.6-.2.82-.48a1.875 1.875 0 1 0-2.25-2.56 5.253 5.253 0 0 1-3.04 2.29Z" />
    </svg>
  );
}

const icons = {
  brain: <IconBrain />,
  code: <IconCode />,
  briefcase: <IconBriefcase />,
  palette: <IconPalette />,
  cube: <IconCube />,
  cloud: <IconCloud />,
};

export default function SkillsPage() {
  const { t } = useTranslation();
  const skills = t.skills_page;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {skills.title}
          </h1>
          <p className="text-xl text-gray-300">
            {skills.subtitle}
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.categories.map((category, index) => (
            <motion.div
              key={index}
              {...fade(0.1 * index)}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-2xl">
                  {icons[category.icon] ?? <span className="text-lg text-gray-400">⚡</span>}
                </div>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/[0.05] border border-white/10 rounded-full px-3 py-1.5 text-gray-200 hover:border-purple-500/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}