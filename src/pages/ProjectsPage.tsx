import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function ProjectsPage() {
  const { t } = useTranslation();
  const projects = t.projects_page;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {projects.title}
          </h1>
          <p className="text-xl text-gray-300">
            {projects.subtitle}
          </p>
        </motion.div>

        {/* Coming soon placeholder */}
        <motion.div {...fade(0.1)} className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 mb-6">
            <span className="text-4xl">🚀</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-3">Case Studies Coming Soon</h3>
          <p className="text-gray-400 max-w-lg mx-auto">
            I'm preparing detailed case studies that demonstrate my technical expertise and product vision.
            These will include projects in AI evaluation, web development, mobile applications, and 3D interactive experiences.
          </p>
          <p className="text-gray-500 text-sm mt-4">
            {projects.cta}
          </p>
        </motion.div>
      </div>
    </div>
  );
}