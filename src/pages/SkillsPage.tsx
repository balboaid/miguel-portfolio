import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

const icons: Record<string, string> = {
  brain: '🧠',
  code: '💻',
  briefcase: '💼',
  palette: '🎨',
  cube: '🪐',
  cloud: '☁️',
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
                  {icons[category.icon] || '⚡'}
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