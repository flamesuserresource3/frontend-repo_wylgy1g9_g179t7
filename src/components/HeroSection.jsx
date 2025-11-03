import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

const CATEGORIES = [
  'CI/CD & Automation',
  'Cloud & Infrastructure',
  'Containers & GitOps',
  'Monitoring & Security',
];

export default function HeroSection({ onSelectCategory, selectedCategory }) {
  const words = useMemo(
    () => ['Ship faster.', 'Automate everything.', 'Scale reliably.', 'Secure by design.'],
    []
  );

  return (
    <section className="relative flex items-center justify-center min-h-[100vh] w-full">
      {/* Full-width Spline Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Atmospheric gradients and blur for readability */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(34,211,238,0.18),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/85" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-sm" />

      {/* Floating glow orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-24 w-24 rounded-full bg-cyan-500/10 blur-3xl"
            initial={{
              x: Math.random() * window.innerWidth - 100,
              y: Math.random() * 600,
              opacity: 0.2,
            }}
            animate={{
              x: [null, Math.random() * window.innerWidth - 100],
              y: [null, Math.random() * 600],
              opacity: [0.12, 0.25, 0.12],
            }}
            transition={{ duration: 8 + i, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Center Frosted Card */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 mx-4 w-full max-w-4xl rounded-3xl border border-white/15 bg-white/10 p-8 md:p-10 shadow-2xl backdrop-blur-2xl"
        style={{ boxShadow: '0 10px 60px rgba(34,211,238,0.25)' }}
      >
        <div className="flex items-center justify-center gap-2 text-cyan-300">
          <Sparkles className="size-5 animate-pulse" />
          <span className="text-xs tracking-widest uppercase">Interactive DevOps Terminal</span>
        </div>

        <motion.h1
          className="mt-3 text-center text-3xl md:text-6xl font-semibold tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.6 }}
        >
          Himanshu Solanki
        </motion.h1>

        <motion.p
          className="mt-2 text-center text-base md:text-lg text-gray-300"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          DevOps Engineer — I build, deploy, and automate the systems that power modern software.
        </motion.p>

        {/* Rotating action words */}
        <motion.div
          className="mt-3 h-8 overflow-hidden text-center text-cyan-300/90"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 2, delayChildren: 0.2 } },
          }}
        >
          {words.map((w, i) => (
            <motion.div
              key={w}
              className="text-sm md:text-base"
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
              transition={{ duration: 0.6 }}
            >
              {w}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Prompts */}
        <motion.div
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3"
          initial="hidden"
          animate="show"
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
        >
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`group relative w-full rounded-2xl border px-5 py-4 text-left text-sm md:text-base font-medium transition-all ${
                selectedCategory === cat
                  ? 'border-cyan-400/60 bg-cyan-400/10 ring-2 ring-cyan-400/50 text-white'
                  : 'border-white/10 bg-white/5 hover:bg-white/10 text-gray-100'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-[1]">{cat}</span>
              <span className="pointer-events-none absolute inset-0 rounded-2xl bg-cyan-400/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
              <span className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_0deg,rgba(34,211,238,0.0),rgba(34,211,238,0.25),rgba(34,211,238,0.0))] animate-[spin_6s_linear_infinite]" />
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
