import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const roles = [
  'DevOps Engineer',
  'CI/CD Automation Specialist',
  'Cloud Infrastructure Architect',
];

function useTypingCycle(words, typingSpeed = 70, pause = 1200) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timer;

    if (!deleting) {
      if (display.length < current.length) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), typingSpeed / 1.6);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [words, index, display, deleting, typingSpeed, pause]);

  return display + (deleting ? '' : '|');
}

export default function Hero() {
  const typed = useTypingCycle(roles);
  const overlayGradient = useMemo(
    () => (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(13,17,23,0) 0%, rgba(13,17,23,0.35) 40%, rgba(13,17,23,0.7) 70%, rgba(13,17,23,0.9) 100%)',
        }}
      />
    ),
    []
  );

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[#0d1117] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/BWzdo650n-g-M9RS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {overlayGradient}

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-extrabold tracking-tight sm:text-6xl"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          HIMANSHU SOLANKI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-4 text-xl text-[#b0b0b0] sm:text-2xl"
          style={{ fontFamily: 'Source Code Pro, ui-monospace, SFMono-Regular, Menlo, monospace' }}
        >
          {typed}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-[#b0b0b0] sm:text-lg"
        >
          I build and automate the systems that power modern software, achieving 80% faster deployments and 90% improved efficiency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-md bg-teal-500/90 px-6 py-3 font-medium text-white shadow-lg shadow-teal-500/30 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-md border border-teal-400/50 bg-black/30 px-6 py-3 font-medium text-white backdrop-blur transition hover:border-teal-300 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Subtle animated data streams at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <div className="relative h-full w-full">
          {[...Array(6)].map((_, i) => (
            <span
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              className="absolute h-px w-1/2 bg-gradient-to-r from-transparent via-teal-400/70 to-transparent opacity-60"
              style={{
                top: `${10 + i * 12}%`,
                left: i % 2 === 0 ? '-20%' : '0%',
                animation: `stream ${6 + i}s linear infinite`,
                filter: 'drop-shadow(0 0 6px rgba(45,212,191,0.7))',
              }}
            />
          ))}
        </div>
      </div>
      <style>{`
        @keyframes stream { to { transform: translateX(160%); } }
      `}</style>
    </section>
  );
}
