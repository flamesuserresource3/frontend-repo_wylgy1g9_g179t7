import { motion } from 'framer-motion';

const groups = [
  {
    title: 'Cloud',
    items: ['AWS (EC2, S3, IAM, VPC)', 'Azure', 'OCI'],
  },
  {
    title: 'CI/CD & Automation',
    items: ['Jenkins', 'GitHub Actions', 'Ansible', 'Terraform', 'Git'],
  },
  {
    title: 'Containers & Orchestration',
    items: ['Docker', 'Kubernetes', 'Helm', 'ArgoCD (GitOps)'],
  },
  {
    title: 'Monitoring & Security',
    items: ['Prometheus', 'Grafana', 'SonarQube', 'Trivy'],
  },
  {
    title: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite'],
  },
  {
    title: 'Languages & OS',
    items: ['Python', 'Bash', 'Linux', 'Windows Server'],
  },
];

function Badge({ children }) {
  return (
    <div className="group relative">
      <span className="inline-block cursor-default rounded-md border border-teal-500/30 bg-black/40 px-3 py-1 text-sm text-teal-200 shadow-[0_0_20px_rgba(45,212,191,0.08)] transition-transform duration-200 group-hover:scale-105">
        {children}
      </span>
      <span className="pointer-events-none absolute -inset-1 -z-10 rounded-md opacity-0 blur group-hover:opacity-100" style={{ boxShadow: '0 0 24px 6px rgba(45,212,191,0.25)' }} />
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        Technical Skills
      </h2>
      <p className="mt-3 max-w-3xl text-[#b0b0b0]">
        A constellation of tools I use to architect reliable, scalable, and secure systems.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-5 shadow-inner shadow-black/40"
          >
            <div className="mb-4 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-400 shadow-[0_0_10px_3px_rgba(45,212,191,0.7)]" />
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Subtle constellation dots */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        {[...Array(40)].map((_, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <span key={i} className="absolute h-1 w-1 rounded-full bg-teal-400/60" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: 'drop-shadow(0 0 6px rgba(45,212,191,0.6))',
            animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          }} />
        ))}
      </div>
      <style>{`
        @keyframes twinkle { 0%,100% { opacity: .4; transform: scale(1); } 50% { opacity: 1; transform: scale(1.2);} }
      `}</style>
    </section>
  );
}
