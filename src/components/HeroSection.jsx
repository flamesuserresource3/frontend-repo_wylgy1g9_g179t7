import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const CATEGORIES = [
  'CI/CD & Automation',
  'Cloud & Infrastructure',
  'Containers & GitOps',
  'Monitoring & Security',
];

export default function HeroSection({ onSelectCategory, selectedCategory }) {
  return (
    <section className="relative flex items-center justify-center min-h-[90vh] w-full">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to enhance readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-sm" />

      {/* Center Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 mx-4 w-full max-w-3xl rounded-2xl border border-white/10 bg-white/10 p-8 md:p-10 shadow-xl backdrop-blur-xl"
        style={{ boxShadow: '0 10px 40px rgba(0, 200, 255, 0.2)' }}
      >
        <motion.h1
          className="text-3xl md:text-5xl font-semibold tracking-tight text-white text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          What challenge can I solve for you?
        </motion.h1>

        <motion.p
          className="mt-4 text-center text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          I build, deploy, and automate the systems that power modern software. Select a domain to see how.
        </motion.p>

        {/* Skill Prompts */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`group relative w-full rounded-xl border border-cyan-400/30 bg-white/5 px-5 py-4 text-left text-sm md:text-base font-medium text-gray-100 transition-all ${
                selectedCategory === cat
                  ? 'ring-2 ring-cyan-400/70 shadow-[0_0_0_3px_rgba(34,211,238,0.15)]'
                  : 'hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-[1]">{cat}</span>
              <span className="pointer-events-none absolute inset-0 rounded-xl bg-cyan-400/10 opacity-0 blur-md transition-opacity group-hover:opacity-100" />
            </motion.button>
          ))}
        </motion.div>

        <motion.p
          className="mt-6 text-center text-sm text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Select a challenge to filter my work.
        </motion.p>
      </motion.div>
    </section>
  );
}
