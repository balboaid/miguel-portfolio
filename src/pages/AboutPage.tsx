import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function AboutPage() {
  const { t } = useTranslation();
  const about = t.about_page;

  return (
    <>
      <SEOHead />
      <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {about.headline} <span className="text-purple-400">{about.highlight}</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {about.intro}
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <motion.p {...fade(0.1)}>{about.p1}</motion.p>
          <motion.p {...fade(0.15)}>{about.p2}</motion.p>
          <motion.p {...fade(0.2)}>{about.p3}</motion.p>
          <motion.p {...fade(0.25)}>{about.p4}</motion.p>
          <motion.p {...fade(0.3)}>{about.p5}</motion.p>
          <motion.p {...fade(0.35)}>{about.p6}</motion.p>
          <motion.p {...fade(0.4)}>{about.p7}</motion.p>
        </div>

        {/* CTA */}
        <motion.div {...fade(0.45)} className="mt-12">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-4 rounded-full transition-colors"
          >
            {about.cta} →
          </Link>
        </motion.div>
</div>
      </div>
    </>
  );
}
