import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Metric({ label, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1000; // ms
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(value * progress));
      if (progress < 1) requestAnimationFrame(step);
    };

    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md text-center">
      <div className="text-3xl md:text-4xl font-semibold text-white">{count}%</div>
      <div className="mt-1 text-gray-300 text-sm">{label}</div>
    </div>
  );
}

export default function SummarySection() {
  return (
    <section className="relative w-full py-16 md:py-20 bg-gradient-to-b from-transparent to-cyan-500/5">
      <div className="mx-auto max-w-5xl px-4">
        <motion.h2
          className="text-2xl md:text-4xl font-semibold text-white"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          DevOps Engineer focused on automation and reliability
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-300 max-w-3xl"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          DevOps Engineer with 1+ year of experience in software engineering, CI/CD automation, and cloud infrastructure. Expert in product life cycle management and workflow automation, achieving 80% faster deployments and 90% improved efficiency.
        </motion.p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Metric label="Faster Deployments" value={80} />
          <Metric label="Improved Efficiency" value={90} />
          <Metric label="Reduction in MTTR" value={60} />
        </div>
      </div>
    </section>
  );
}
