import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

export default function ContactPage() {
  const { t } = useTranslation();
  const contact = t.contact_page;

  const socialLinks = [
    { name: contact.linkedin, url: 'https://www.linkedin.com/in/miguel-nwafor', icon: '💼' },
    { name: contact.github, url: 'https://github.com/balboaid', icon: '💻' },
    { name: contact.behance, url: 'https://www.behance.net/miguelnwafor', icon: '🎨' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {contact.title}
          </h1>
          <p className="text-xl text-gray-300">
            {contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div {...fade(0.1)} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white mb-6">{contact.social}</h2>
            <div className="space-y-4">
              <a
                href="mailto:miguel@miguelnwafor.com.br"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] transition-colors"
              >
                <span className="text-2xl">📧</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{contact.email}</div>
                  <div className="text-white font-medium">miguel@miguelnwafor.com.br</div>
                </div>
              </a>
              <a
                href="tel:+5511954349950"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] transition-colors"
              >
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{contact.phone}</div>
                  <div className="text-white font-medium">+55 (11) 95434-9950</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05]">
                <span className="text-2xl">📍</span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{contact.location}</div>
                  <div className="text-white font-medium">Campinas, SP - Brazil</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social links + availability */}
          <motion.div {...fade(0.15)} className="flex flex-col gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">{contact.availability}</h2>
              <p className="text-purple-400 font-medium text-lg">
                {contact.availability_status}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                Open to full-time roles in technology, software engineering, digital products, and applied AI.
              </p>
            </div>

            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Connect</h2>
              <div className="flex flex-col gap-3">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] transition-colors"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span className="text-white font-medium">{link.name}</span>
                    <span className="ml-auto text-purple-400">→</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div {...fade(0.2)} className="mt-12 text-center">
          <a
            href="mailto:miguel@miguelnwafor.com.br"
            className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold px-10 py-4 rounded-full transition-colors text-lg"
          >
            {contact.cta} →
          </a>
        </motion.div>
      </div>
    </div>
  );
}