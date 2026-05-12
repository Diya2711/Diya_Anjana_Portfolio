import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import heroImg from "@/assets/diya-hero.jpeg";

const titles = [
  "Computer Engineer",
  "MSc Data Science Student",
  "AI & Flutter Developer",
];

function useTyping() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const full = titles[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(full.slice(0, text.length + 1));
        if (text.length + 1 === full.length) setTimeout(() => setDel(true), 1400);
      } else {
        setText(full.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((p) => (p + 1) % titles.length);
        }
      }
    }, del ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return text;
}

export function Hero() {
  const text = useTyping();
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* glow blobs */}
      <div className="absolute -top-40 -left-40 w-[480px] h-[480px] rounded-full bg-gradient-primary opacity-30 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-secondary opacity-20 blur-3xl animate-pulse-glow" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-sm mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>

          <p className="text-lg text-muted-foreground mb-2">Hi, I&apos;m</p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-3">
            Diya
            <br />
            <span className="text-gradient-primary italic">Anjana</span>
          </h1>

          <div className="h-8 mt-4 mb-6">
            <span className="text-xl md:text-2xl font-mono text-foreground/90">
              {text}
              <span className="inline-block w-[2px] h-6 bg-secondary align-middle ml-1 animate-pulse" />
            </span>
          </div>

          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed mb-8">
            I build efficient, scalable, and user-friendly solutions across mobile, AI,
            and data science — turning complex problems into impactful, production-ready products.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="/Diya_Anjana_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-glow hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => { e.preventDefault(); document.getElementById("projects")?.scrollIntoView({behavior:"smooth"}); }}
              className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-medium hover:bg-white/10 transition-colors"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: "https://github.com/Diya2711", label: "GitHub" },
              { Icon: Linkedin, href: "https://linkedin.com/in/diya-aniana-74ab89304", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:diyaanjana.ce19@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative mx-auto w-full max-w-md aspect-[4/5]">
            {/* decorative shape */}
            <div className="absolute inset-0 bg-gradient-primary rounded-[40%_60%_55%_45%/55%_45%_60%_40%] blur-2xl opacity-50 animate-pulse-glow" />
            <div className="absolute inset-2 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-[50%_50%_45%_55%/55%_45%_55%_45%] animate-float" />
            <div className="relative h-full w-full glass-strong rounded-[40%_60%_55%_45%/55%_45%_60%_40%] overflow-hidden shadow-glow">
              <img
                src={heroImg}
                alt="Diya Anjana — Computer Engineer & Data Science student"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* floating code card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-4 md:-left-12 glass-strong rounded-2xl p-4 shadow-soft font-mono text-xs w-64"
            >
              <div className="flex gap-1.5 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              </div>
              <pre className="text-foreground/80 leading-relaxed">
{`const diya = {
  stack: ["Flutter","Python","ML"],
  passion: "building 🚀",
  status: "shipping"
};`}
              </pre>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-sm shadow-pink"
            >
              <div className="text-xs text-muted-foreground">Currently</div>
              <div className="font-semibold">MSc Data Science 🎓</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}