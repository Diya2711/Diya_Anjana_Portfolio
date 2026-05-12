import { motion } from "framer-motion";
import { SectionHeader } from "./About";
import { Code, Database, Brain, Smartphone, Globe, Server, Wrench } from "lucide-react";

const groups = [
  { Icon: Code, title: "Programming", items: ["Python", "Dart", "JavaScript", "Java", "SQL"] },
  { Icon: Brain, title: "AI / ML", items: ["Scikit-learn", "Random Forest", "Pandas", "NumPy", "Google Gemini API"] },
  { Icon: Database, title: "Data Science", items: ["Power BI", "Matplotlib", "Seaborn", "Streamlit", "EDA"] },
  { Icon: Smartphone, title: "Flutter Dev", items: ["Flutter", "Dart", "Firebase", "Provider", "REST APIs"] },
  { Icon: Globe, title: "Web / Backend", items: ["FastAPI", "Flask", "JWT Auth", "Render", "Resend"] },
  { Icon: Server, title: "Databases", items: ["MongoDB", "Firebase", "SQLite", "MySQL"] },
  { Icon: Wrench, title: "Tools & Cloud", items: ["Git", "GitHub", "Postman", "VS Code", "Render"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Skills" title="My toolkit for building intelligent products" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {groups.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <g.Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{g.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/85">
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}