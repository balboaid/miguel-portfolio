import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

function IconMail() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />
    </svg>
  );
}
function IconPhone() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .88.49l3.91 3.91a1 1 0 0 1 .49.88v3.28a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
    </svg>
  );
}
function IconMapPin() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
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
function IconCode() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
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

export default function ContactPage() {
  const { t } = useTranslation();
  const contact = t.contact_page;

  const socialLinks = [
    { name: contact.linkedin, url: 'https://www.linkedin.com/in/miguel-nwafor', icon: <IconBriefcase /> },
    { name: contact.github, url: 'https://github.com/balboaid', icon: <IconCode /> },
    { name: contact.behance, url: 'https://www.behance.net/miguelnwafor', icon: <IconPalette /> },
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
                <span className="text-2xl">
                  <IconMail />
                </span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{contact.email}</div>
                  <div className="text-white font-medium">miguel@miguelnwafor.com.br</div>
                </div>
              </a>
              <a
                href="tel:+5511954349950"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.10] transition-colors"
              >
                <span className="text-2xl">
                  <IconPhone />
                </span>
                <div>
                  <div className="text-xs text-gray-400 uppercase tracking-wider">{contact.phone}</div>
                  <div className="text-white font-medium">+55 (11) 95434-9950</div>
                </div>
              </a>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.05]">
                <span className="text-2xl">
                  <IconMapPin />
                </span>
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