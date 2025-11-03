import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';

const SKILLS = {
  'Cloud & Infrastructure': [
    'AWS (EC2, S3, IAM, VPC)',
    'Azure',
    'OCI',
  ],
  'CI/CD & Automation': [
    'Jenkins',
    'GitHub Actions',
    'Ansible',
    'Terraform',
    'Git',
  ],
  'Containers & GitOps': [
    'Docker',
    'Kubernetes',
    'Helm',
    'ArgoCD (GitOps)',
  ],
  'Monitoring & Security': [
    'Prometheus',
    'Grafana',
    'SonarQube',
    'Trivy',
  ],
};

const CERTS = [
  'Oracle Cloud Infrastructure',
  'Generative AI Foundations',
  'Microsoft Azure Fundamentals',
];

export default function SkillsAndContactSection({ selectedCategory }) {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="text-2xl md:text-3xl font-semibold">Technical Skills</h3>
        <p className="mt-2 text-gray-300">Clicking a prompt highlights relevant skills.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(SKILLS).map(([group, items]) => {
            const active = !selectedCategory || selectedCategory === group;
            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`rounded-2xl border p-6 backdrop-blur-xl transition ${
                  active
                    ? 'border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_30px_rgba(34,211,238,0.15)]'
                    : 'border-white/10 bg-white/5 opacity-60'
                }`}
              >
                <div className={`text-lg font-semibold ${active ? 'text-cyan-200' : 'text-white'}`}>{group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <span
                      key={it}
                      className={`rounded-md border px-2.5 py-1 text-xs ${
                        active
                          ? 'border-cyan-400/40 bg-cyan-400/10 text-cyan-100'
                          : 'border-white/10 bg-white/5 text-gray-300'
                      }`}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h4 className="text-xl font-semibold">Certifications</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {CERTS.map((c) => (
              <span
                key={c}
                className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-200"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="mt-10 border-t border-white/10 pt-8 flex flex-col items-center gap-4">
          <div className="text-gray-300">Let’s connect</div>
          <div className="flex items-center gap-4">
            <a
              href="mailto:you@example.com"
              className="group inline-flex size-11 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 text-white hover:bg-cyan-400/10 transition shadow hover:shadow-cyan-400/30"
              aria-label="Email"
            >
              <Mail className="size-5 group-hover:text-cyan-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex size-11 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 text-white hover:bg-cyan-400/10 transition shadow hover:shadow-cyan-400/30"
              aria-label="LinkedIn"
            >
              <Linkedin className="size-5 group-hover:text-cyan-300" />
            </a>
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex size-11 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 text-white hover:bg-cyan-400/10 transition shadow hover:shadow-cyan-400/30"
              aria-label="GitHub"
            >
              <Github className="size-5 group-hover:text-cyan-300" />
            </a>
          </div>
          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Himanshu Solanki</p>
        </div>
      </div>
    </section>
  );
}
