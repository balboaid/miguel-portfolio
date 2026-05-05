import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Miguel Fredman Nwafor  
          <span className="block text-neutral-400 text-2xl md:text-3xl mt-4">
            Creative Developer   Producer
          </span>
        </motion.h1>

        {/* Subtitulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg md:text-xl text-neutral-300 mt-8 max-w-2xl mx-auto"
        >
          I build high quality digital experiences with a mix of design,
          code and cinematic aesthetics. From interfaces to full stack logic,
          your idea becomes reality in its most elevated form.
        </motion.p>

        {/* Botão CTA */}
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="inline-block mt-10 px-8 py-3 border border-neutral-700 rounded-lg 
                     hover:bg-white hover:text-black transition-all duration-300"
        >
          View Projects
        </motion.a>

      </div>
    </section>
  );
}