import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AI Reel Generator',
    tech: ['GitHub Actions', 'Docker', 'K8s', 'Terraform', 'SonarQube', 'Trivy'],
    desc: 'Built a cloud-native CI/CD pipeline with full quality assurance automation and security scanning.',
    github: 'https://github.com/h8815',
    demo: undefined,
  },
  {
    title: 'MyTodo: GitOps Pipeline',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
    desc: 'Implemented a 100% automated CI/CD pipeline, achieving 80% faster deployments with a collaborative GitOps workflow.',
    github: 'https://github.com/h8815',
    demo: undefined,
  },
  {
    title: 'ToDo Web Application',
    tech: ['Flask', 'SQLite', 'Docker', 'GitHub Actions'],
    desc: 'Developed a full-stack application focused on 99.9% uptime through automated CI/CD and QA.',
    github: 'https://github.com/h8815',
    demo: undefined,
  },
  {
    title: 'Password Reset Automation',
    tech: ['Shell Script', 'Linux', 'SMTP', 'Cron'],
    desc: 'Engineered workflow automation for 50+ users, improving efficiency by 95%.',
    github: 'https://github.com/h8815',
    demo: undefined,
  },
];

function Card({ p, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: i * 0.05 }}
      className="group relative overflow-hidden rounded-xl border border-teal-500/20 bg-[#0f1319]/80 p-5 shadow-xl shadow-black/30"
      style={{ backdropFilter: 'blur(6px)' }}
    >
      <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: 'inset 0 0 0 2px rgba(45,212,191,0.6), 0 0 40px rgba(45,212,191,0.25)' }} />
      <div className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-white">{p.title}</h3>
        <div className="flex items-center gap-2">
          <a href={p.github} target="_blank" rel="noreferrer" className="rounded-md p-1.5 text-teal-200 transition hover:bg-white/10">
            <Github size={18} />
          </a>
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-md p-1.5 text-teal-200 transition hover:bg-white/10">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="mt-2 text-sm text-[#c9c9c9]">{p.desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {p.tech.map((t) => (
          <span
            key={t}
            className="animate-pulse rounded-md border border-teal-400/30 bg-black/30 px-2 py-1 text-xs text-teal-200 group-hover:animate-none"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-20">
      <h2 className="text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        Projects
      </h2>
      <p className="mt-3 max-w-3xl text-[#b0b0b0]">
        Interactive showcases of automation, infrastructure, and reliability engineering.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title} p={p} i={i} />
        ))}
      </div>
    </section>
  );
}
