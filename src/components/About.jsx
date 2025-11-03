import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ to, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = Math.floor(start + (to - start) * eased);
      setValue(next);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, to]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center rounded-lg border border-teal-400/20 bg-white/5 px-6 py-5 text-center shadow-inner shadow-black/40">
      <div className="text-4xl font-extrabold text-white">{value}%</div>
      <div className="mt-1 text-sm text-[#b0b0b0]">{label}</div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-black/30 px-3 py-1 text-xs text-teal-300">
        <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_10px_2px_rgba(45,212,191,0.7)]" />
        Digital Nervous System
      </div>
      <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        About Me
      </h2>
      <p className="mt-4 max-w-3xl text-[#b0b0b0]">
        DevOps Engineer with 1+ year of experience in software engineering, CI/CD automation, and cloud infrastructure management. Expert in product life cycle management, quality assurance, and workflow automation. A decisive and collaborative leader with a strong Computer Science background focused on system reliability and user experience optimization.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Counter to={80} label="Faster Deployments" />
        <Counter to={90} label="Improved Efficiency" />
        <Counter to={60} label="Reduction in MTTR" />
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-white">Experience Timeline</h3>
        <div className="relative mt-6 pl-6">
          <div className="absolute left-3 top-0 h-full w-0.5 bg-gradient-to-b from-teal-400/70 via-teal-500/30 to-transparent" />
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="relative mb-8"
          >
            <div className="absolute -left-1 top-1 h-3 w-3 rounded-full bg-teal-400 shadow-[0_0_12px_3px_rgba(45,212,191,0.7)]" />
            <div className="rounded-lg border border-white/10 bg-white/5 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="font-semibold text-white">DevOps Engineer - Freelance</div>
                <div className="text-sm text-[#b0b0b0]">Aug 2024 – Present (1+ Year)</div>
              </div>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-[#c9c9c9]">
                <li>Led 4+ software engineering projects implementing CI/CD automation and quality assurance using AWS.</li>
                <li>Improved deployment efficiency by 80% through workflow automation using Jenkins, ArgoCD, and Kubernetes.</li>
                <li>Reduced security vulnerabilities by 90% via automated monitoring and remediation.</li>
                <li>Built comprehensive monitoring systems with Prometheus and Grafana, achieving a 60% reduction in MTTR.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#c9c9c9]">
            <li className="opacity-0 [animation:fadeUp_0.4s_ease_forwards] [animation-delay:0.05s]">Oracle Cloud Infrastructure 2025 Certified Foundations Associate</li>
            <li className="opacity-0 [animation:fadeUp_0.4s_ease_forwards] [animation-delay:0.15s]">Generative AI Foundations Certificate</li>
            <li className="opacity-0 [animation:fadeUp_0.4s_ease_forwards] [animation-delay:0.25s]">Microsoft Azure Fundamentals</li>
          </ul>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Education</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#c9c9c9]">
            <li className="opacity-0 [animation:fadeUp_0.4s_ease_forwards] [animation-delay:0.1s]">Bachelor of Computer Applications - Medi-Caps University</li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </section>
  );
}
