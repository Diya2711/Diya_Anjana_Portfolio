import { motion } from "framer-motion";
import { Brain, Database, Smartphone, Palette, MapPin, GraduationCap, Briefcase } from "lucide-react";
import aboutImg from "@/assets/diya-about.png";

const passions = [
  { Icon: Brain, label: "AI / ML" },
  { Icon: Database, label: "Data Science" },
  { Icon: Smartphone, label: "Mobile Apps" },
  { Icon: Palette, label: "UI / UX" },
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="About Me" title="Turning ideas into impactful digital products" />

        <div className="grid lg:grid-cols-5 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -inset-6 bg-gradient-primary opacity-30 blur-3xl rounded-full" />
            <div className="relative glass-strong p-3 rounded-3xl shadow-glow">
              <img src={aboutImg} alt="Diya Anjana portrait" className="w-full h-[480px] object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -right-4 glass-strong rounded-2xl p-4 shadow-pink">
              <div className="text-3xl font-bold text-gradient-primary">2+</div>
              <div className="text-xs text-muted-foreground">Internships</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a <span className="text-foreground font-medium">Computer Engineer</span> and{" "}
              <span className="text-foreground font-medium">MSc Data Science student</span> passionate
              about building products that blend clean engineering with intelligent data. I&apos;ve shipped
              production apps at <span className="text-gradient-primary font-semibold">AMUL</span> and{" "}
              <span className="text-gradient-primary font-semibold">Tech Elecon Pvt. Ltd.</span>, working
              across Flutter, FastAPI, and machine learning pipelines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I love translating complex problems into scalable, user-focused solutions — whether that&apos;s a
              cross-platform mobile app, an AI-powered platform, or a data dashboard that drives decisions.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {passions.map(({ Icon, label }) => (
                <div key={label} className="glass rounded-xl p-4 flex items-center gap-3 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Pill Icon={MapPin} label="Petlad, Gujarat" />
              <Pill Icon={GraduationCap} label="MSc Data Science" />
              <Pill Icon={Briefcase} label="Open to Work" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Pill({ Icon, label }: { Icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <div className="glass px-4 py-2 rounded-full flex items-center gap-2 text-sm">
      <Icon className="w-4 h-4 text-secondary" />
      <span>{label}</span>
    </div>
  );
}

export function SectionHeader({ eyebrow, title, center }: { eyebrow: string; title: string; center?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={center ? "text-center max-w-2xl mx-auto" : "max-w-2xl"}
    >
      <div className={`inline-flex items-center gap-2 glass px-3 py-1 rounded-full text-xs uppercase tracking-widest text-secondary mb-4`}>
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        {eyebrow}
      </div>
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title.split(" ").map((w, i) =>
          i % 3 === 1 ? <span key={i} className="text-gradient-primary italic"> {w} </span> : <span key={i}> {w} </span>
        )}
      </h2>
    </motion.div>
  );
}