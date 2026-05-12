import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeader } from "./About";

type Item = {
  type: "work" | "edu";
  title: string;
  org: string;
  period: string;
  desc: string;
};

const items: Item[] = [
  {
    type: "edu",
    title: "MSc Data Science",
    org: "Parul University, Vadodara",
    period: "2025 — 2027",
    desc: "Currently pursuing — focused on machine learning, statistics, and applied data engineering.",
  },
  {
    type: "work",
    title: "Mobile Application Developer Intern",
    org: "AMUL · Gujarat",
    period: "Feb 2025 — May 2025",
    desc: "Built a cross-platform Pet Clinic Management System (Flutter + Firebase) with role-based access; improved clinic efficiency by 40%.",
  },
  {
    type: "edu",
    title: "B.E. Computer Engineering",
    org: "Charutar Vidhyamandal University, Anand",
    period: "2022 — 2025",
    desc: "Foundation in software engineering, algorithms, databases, and full-stack development.",
  },
  {
    type: "work",
    title: "Flutter Developer Intern",
    org: "Tech Elecon Pvt. Ltd. · Gujarat",
    period: "May 2024 — Jun 2024",
    desc: "Engineered a School Management System for 500+ students; eliminated 100% of class scheduling conflicts.",
  },
  {
    type: "edu",
    title: "Diploma in Computer Engineering",
    org: "Gujarat Technological University",
    period: "2019 — 2022",
    desc: "Built strong fundamentals in programming, computer systems, and engineering practices.",
  },
];

export function Timeline() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Journey" title="My experience and education timeline" />

        <div className="relative max-w-3xl mx-auto mt-14">
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/60 to-transparent" />

          {items.map((it, i) => {
            const isLeft = i % 2 === 0;
            const Icon = it.type === "work" ? Briefcase : GraduationCap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex md:items-center mb-10 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="md:w-1/2 pl-14 md:pl-0 md:px-8">
                  <div className="glass-strong rounded-2xl p-5 hover:shadow-glow transition-all">
                    <div className="text-xs font-mono text-secondary mb-1">{it.period}</div>
                    <h3 className="text-lg font-semibold">{it.title}</h3>
                    <p className="text-sm text-gradient-primary font-medium mb-2">{it.org}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                  </div>
                </div>

                <div className="absolute left-5 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow ring-4 ring-background">
                  <Icon className="w-4 h-4 text-primary-foreground" />
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}