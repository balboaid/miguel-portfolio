import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function TestimonialsPage() {
  const { t } = useTranslation();
  const testimonials = t.testimonials_page;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {testimonials.title}
          </h1>
          <p className="text-xl text-gray-300">
            {testimonials.subtitle}
          </p>
        </motion.div>

        {/* Empty state */}
        <motion.div {...fade(0.1)} className="text-center py-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-purple-500/10 mb-6">
            <span className="text-4xl">💬</span>
          </div>
          <p className="text-gray-400 mb-6">
            {testimonials.empty_state}
          </p>
          <a
            href="https://www.linkedin.com/in/miguel-nwafor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-6 py-3 rounded-full transition-colors"
          >
            {testimonials.cta} →
          </a>
        </motion.div>
      </div>
    </div>
  );
}