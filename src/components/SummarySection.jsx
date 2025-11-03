import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Metric({ label, value }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1200; // ms
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
    <div
      ref={ref}
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl text-center overflow-hidden"
    >
      <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_0deg,rgba(34,211,238,0.0),rgba(34,211,238,0.25),rgba(34,211,238,0.0))] animate-[spin_8s_linear_infinite]" />
      <div className="relative">
        <div className="text-3xl md:text-5xl font-semibold text-white drop-shadow">{count}%</div>
        <div className="mt-1 text-gray-300 text-sm">{label}</div>
      </div>
    </div>
  );
}

export default function SummarySection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl md:text-4xl font-semibold text-white">
            DevOps Engineer focused on automation and reliability
          </h2>
          <p className="text-gray-300 max-w-3xl">
            DevOps Engineer with 1+ year of experience in software engineering, CI/CD automation, and cloud
            infrastructure. Expert in product life cycle management and workflow automation, achieving 80% faster
            deployments and 90% improved efficiency.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
          <Metric label="Faster Deployments" value={80} />
          <Metric label="Improved Efficiency" value={90} />
          <Metric label="Reduction in MTTR" value={60} />
        </div>
      </div>
    </section>
  );
}
