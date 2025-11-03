import { motion, AnimatePresence } from 'framer-motion';
import { Filter, X, ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AI Reel Generator',
    tech: ['GitHub Actions', 'Docker', 'K8s', 'Terraform', 'SonarQube', 'Trivy'],
    desc:
      'Built a cloud-native pipeline with quality assurance automation and security scanning across the complete product life cycle.',
    categories: ['CI/CD & Automation', 'Monitoring & Security', 'Containers & GitOps', 'Cloud & Infrastructure'],
    link: '#',
  },
  {
    title: 'MyTodo: GitOps Pipeline',
    tech: ['Jenkins', 'Docker', 'Kubernetes', 'Helm', 'ArgoCD'],
    desc:
      'Implemented a 100% automated CI/CD pipeline achieving 80% faster deployments through a collaborative GitOps workflow.',
    categories: ['CI/CD & Automation', 'Containers & GitOps'],
    link: '#',
  },
  {
    title: 'ToDo Web Application',
    tech: ['Flask', 'SQLite', 'Docker', 'GitHub Actions'],
    desc:
      'Developed a full-stack application with a user experience focus, achieving 99.9% uptime through automated CI/CD.',
    categories: ['CI/CD & Automation', 'Containers & GitOps'],
    link: '#',
  },
  {
    title: 'Password Reset Automation',
    tech: ['Shell Script', 'Linux', 'SMTP', 'Cron'],
    desc:
      'Engineered workflow automation for 50+ users, improving efficiency by 95%.',
    categories: ['CI/CD & Automation'],
    link: '#',
  },
];

export default function ProjectsSection({ selectedCategory, clearFilter }) {
  const filtered = selectedCategory
    ? PROJECTS.filter((p) => p.categories.includes(selectedCategory))
    : PROJECTS;

  return (
    <section className="w-full py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <Filter className="size-5 text-cyan-400" />
            <h3 className="text-2xl md:text-3xl font-semibold">Projects</h3>
          </div>

          {selectedCategory && (
            <button
              onClick={clearFilter}
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-white/5 px-3 py-2 text-sm text-gray-200 hover:bg-white/10"
            >
              <X className="size-4" /> Clear filter
            </button>
          )}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={selectedCategory || 'all'}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {filtered.map((p) => (
              <motion.article
                key={p.title}
                whileHover={{ y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl"
              >
                <div className="pointer-events-none absolute -inset-[1px] rounded-2xl bg-[conic-gradient(from_0deg,rgba(34,211,238,0.0),rgba(34,211,238,0.25),rgba(34,211,238,0.0))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-xl font-semibold text-white">{p.title}</h4>
                    <a
                      href={p.link}
                      className="inline-flex items-center gap-1 rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-xs text-cyan-200 hover:bg-cyan-400/20"
                    >
                      View <ArrowUpRight className="size-3.5" />
                    </a>
                  </div>
                  <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <motion.span
                        key={t}
                        initial={{ opacity: 0, y: 6 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3 }}
                        className="rounded-md border border-cyan-400/30 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-200"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="mt-10 text-center text-gray-300">No projects match this filter yet.</div>
        )}
      </div>
    </section>
  );
}
