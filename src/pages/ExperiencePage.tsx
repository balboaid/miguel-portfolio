import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import SEOHead from '../components/SEOHead';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, delay },
});

function IconMapPin() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
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
function IconGlobe() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
    </svg>
  );
}

export default function ExperiencePage() {
  const { t } = useTranslation();
  const exp = t.experience_page;

  return (
    <>
      <SEOHead />
      <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div {...fade(0)} className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            {exp.title}
          </h1>
          <p className="text-xl text-gray-300">
            {exp.subtitle}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {exp.timeline.map((item, index) => (
              <motion.div
                key={index}
                {...fade(0.1 * index)}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-black z-10" />

                {/* Content card */}
                <div className={`md:w-[calc(50%-3rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'}`}>
                  <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-purple-500/40 transition-colors">
                    {/* Period badge */}
                    <div className="inline-flex items-center gap-2 mb-3 text-xs font-semibold text-purple-400 uppercase tracking-widest">
                      <span className="w-2 h-2 rounded-full bg-purple-500" />
                      {item.period}
                    </div>

                    {/* Company and role */}
                    <h3 className="text-2xl font-bold text-white mb-2">{item.company}</h3>
                    <h4 className="text-lg font-semibold text-purple-400 mb-3">{item.role}</h4>

                    {/* Meta info */}
                    <div className="flex flex-wrap gap-2 mb-4 text-sm text-gray-400">
                      <span className="inline-flex items-center gap-1 bg-white/[0.05] px-3 py-1 rounded-full">
                        <IconMapPin /> {item.location}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/[0.05] px-3 py-1 rounded-full">
                        <IconBriefcase /> {item.type}
                      </span>
                      <span className="inline-flex items-center gap-1 bg-white/[0.05] px-3 py-1 rounded-full">
                        <IconGlobe /> {item.mode}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>

                    {/* Responsibilities */}
                    {item.responsibilities && item.responsibilities.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Responsibilities:</h5>
                        <ul className="space-y-1.5 text-sm text-gray-400">
                          {item.responsibilities.slice(0, 4).map((resp, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-purple-400 shrink-0">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="pt-4 border-t border-white/10">
                        <h5 className="text-sm font-semibold text-white mb-2">Key Achievements:</h5>
                        <ul className="space-y-1.5 text-sm text-gray-300">
                          {item.achievements.map((ach, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-green-400 shrink-0">✓</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
</div>
      </div>
    </>
  );
}
