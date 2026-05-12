import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, Languages } from "lucide-react";
import { SectionHeader } from "./About";

const certs = [
  {
    Icon: Award,
    title: "GenAI Powered Data Analytics",
    issuer: "TATA Forage / TCS",
    desc: "Job simulation on applying generative AI to real-world data analytics workflows.",
  },
  {
    Icon: BadgeCheck,
    title: "Python Programming Certification",
    issuer: "Skills India Digital",
    desc: "Hands-on certification covering Python fundamentals, data structures, and applied scripting.",
  },
  {
    Icon: Trophy,
    title: "Production Internships",
    issuer: "AMUL · Tech Elecon",
    desc: "Shipped real-world Flutter products used by clinics and 500+ school students.",
  },
  {
    Icon: Languages,
    title: "Trilingual Communicator",
    issuer: "English · Hindi · Gujarati",
    desc: "Comfortable collaborating across diverse teams and stakeholders.",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Achievements" title="Certifications and recognitions" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {certs.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-4 group-hover:rotate-6 transition-transform">
                <c.Icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-1">{c.title}</h3>
              <p className="text-xs text-secondary mb-3">{c.issuer}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}