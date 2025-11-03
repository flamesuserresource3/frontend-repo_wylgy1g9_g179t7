import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AI Reel Generator',
    tech: ['GitHub Actions', 'Docker', 'K8s', 'Terraform', 'SonarQube', 'Trivy'],
    desc:
      'Built a cloud-native pipeline with quality assurance automation and security scanning across the complete product life cycle.',
    categories: ['CI/CD & Automation', 'Monitoring & Security', 'Containers & GitOps', 'Cloud & Infrastructure'],
  },
  {
    title: 'MyTodo: GitOps Pipeline',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
    desc:
      'Implemented a 100% automated CI/CD pipeline achieving 80% faster deployments through a collaborative GitOps workflow.',
    categories: ['CI/CD & Automation', 'Containers & GitOps'],
  },
  {
    title: 'ToDo Web Application',
    tech: ['Flask', 'SQLite', 'Docker', 'GitHub Actions'],
    desc:
      'Developed a full-stack application with a user experience focus, achieving 99.9% uptime through automated CI/CD.',
    categories: ['CI/CD & Automation', 'Containers & GitOps'],
  },
  {
    title: 'Password Reset Automation',
    tech: ['Shell Script', 'Linux', 'SMTP', 'Cron'],
    desc:
      'Engineered workflow automation for 50+ users, improving efficiency by 95%.',
    categories: ['CI/CD & Automation'],
  },
];

export default function ProjectsSection({ selectedCategory, clearFilter }) {
  const filtered = selectedCategory
    ? PROJECTS.filter((p) => p.categories.includes(selectedCategory))
    : PROJECTS;

  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Filter className="size-5 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-semibold">Projects</h3>
          </div>

          {selectedCategory && (
            <button
              onClick={clearFilter}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
            >
              <X className="size-4" /> Clear filter
            </button>
          )}
        </div>

        <motion.div
          className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
        >
          {filtered.map((p) => (
            <motion.div
              key={p.title}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:bg-white/10 transition"
            >
              <div className="absolute inset-0 rounded-2xl bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-colors" />
              <div className="relative">
                <h4 className="text-xl font-semibold text-white">{p.title}</h4>
                <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-gray-300">No projects match this filter yet.</div>
        )}
      </div>
    </section>
  );
}
