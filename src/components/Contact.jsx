import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-20">
      <div className="absolute inset-x-0 -top-20 h-40 bg-gradient-to-b from-teal-500/10 to-transparent" />
      <h2 className="text-center text-3xl font-bold text-white sm:text-4xl" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
        Build Together
      </h2>
      <p className="mx-auto mt-3 max-w-2xl text-center text-[#b0b0b0]">
        I"m currently available for new opportunities and collaborations.
      </p>

      <div className="mt-10 flex items-center justify-center gap-6">
        <a
          href="mailto:hsolanki81815@gmail.com"
          className="group relative inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-white/5 px-5 py-3 text-white transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 30px 10px rgba(45,212,191,0.25)' }} />
          <Mail /> Email
        </a>
        <a
          href="https://linkedin.com/in/himanshu-solanki81815"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-white/5 px-5 py-3 text-white transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 30px 10px rgba(45,212,191,0.25)' }} />
          <Linkedin /> LinkedIn
        </a>
        <a
          href="https://github.com/h8815"
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 rounded-full border border-teal-400/40 bg-white/5 px-5 py-3 text-white transition-transform hover:scale-105"
        >
          <span className="absolute inset-0 -z-10 rounded-full opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" style={{ boxShadow: '0 0 30px 10px rgba(45,212,191,0.25)' }} />
          <Github /> GitHub
        </a>
      </div>

      <footer className="mt-16 text-center text-xs text-[#9aa0a6]">
        © {new Date().getFullYear()} Himanshu Solanki. All Rights Reserved.
      </footer>
    </section>
  );
}
