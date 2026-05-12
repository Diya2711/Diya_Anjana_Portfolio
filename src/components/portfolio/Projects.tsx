import { motion } from "framer-motion";
import { Github, ExternalLink, Sparkles, Leaf, BarChart3, Smartphone } from "lucide-react";
import { SectionHeader } from "./About";

type Project = {
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stack: string[];
  github?: string;
  demo?: string;
  Icon: React.ComponentType<{ className?: string }>;
  gradient: string;
};

const projects: Project[] = [
  {
    title: "PromptGenie",
    tagline: "AI-Powered Prompt Engineering Platform",
    description:
      "Full-stack AI platform with JWT auth, email verification, and Gemini-powered prompt generation under 2s.",
    features: [
      "Role-based access for 2+ user tiers",
      "Google Gemini API integration",
      "MongoDB Atlas + Render deployment",
    ],
    stack: ["Flutter", "FastAPI", "MongoDB", "Gemini API", "JWT"],
    github: "https://github.com/Diya2711/PromptGenie_backend.git",
    Icon: Sparkles,
    gradient: "from-purple-500/30 to-pink-500/30",
  },
  {
    title: "Crop Prediction System",
    tagline: "Smart Agriculture Mobile App",
    description:
      "Flutter app + Flask ML backend recommending crops from 7+ soil & weather parameters with 95%+ accuracy.",
    features: [
      "Random Forest on 2,200+ records",
      "22 crop categories supported",
      "Offline-first with SQLite",
    ],
    stack: ["Flutter", "Flask", "Scikit-learn", "SQLite", "Random Forest"],
    github: "https://github.com/Diya2711/crop-recommendation-system.git",
    Icon: Leaf,
    gradient: "from-emerald-500/30 to-teal-500/30",
  },
  {
    title: "Crop Recommendation EDA",
    tagline: "Interactive Data Science Dashboard",
    description:
      "Streamlit dashboard with 10+ visualizations, real-time ML predictions, and model accuracy benchmarks.",
    features: [
      "EDA on 2,200+ agricultural records",
      "10+ interactive visualizations",
      "Real-time predictions",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    Icon: BarChart3,
    gradient: "from-blue-500/30 to-purple-500/30",
  },
  {
    title: "Pet Clinic Management",
    tagline: "Cross-platform Flutter App @ AMUL",
    description:
      "Role-based clinic system with real-time appointments and digital pet records — 100% paperless.",
    features: [
      "3+ user roles (admin, vet, receptionist)",
      "Real-time appointment scheduling",
      "40% efficiency improvement",
    ],
    stack: ["Flutter", "Firebase", "Dart"],
    github: "https://github.com/Diya2711/Pet_Clinic_management",
    Icon: Smartphone,
    gradient: "from-pink-500/30 to-rose-500/30",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Projects" title="Featured work I'm proud of" />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative glass-strong rounded-3xl overflow-hidden hover:shadow-glow transition-all"
            >
              <div className={`relative h-44 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-2xl glass-strong flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-6 transition-transform">
                    <p.Icon className="w-10 h-10 text-foreground" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 text-xs font-mono text-foreground/70 uppercase tracking-widest">
                  {p.tagline}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>

                <ul className="space-y-1.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-foreground/80">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 glass px-4 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
                    >
                      <Github className="w-4 h-4" /> Code
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-4 py-2 rounded-lg text-sm shadow-glow hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}