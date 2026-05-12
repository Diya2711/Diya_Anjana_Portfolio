import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { SectionHeader } from "./About";
import portraitImg from "@/assets/diya-portrait.png";

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:diyaanjana.ce19@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeader eyebrow="Contact" title="Let's build something amazing together" center />

        <div className="grid lg:grid-cols-2 gap-8 mt-14 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 space-y-6"
          >
            <div className="flex items-center gap-4">
              <img src={portraitImg} alt="Diya Anjana" className="w-16 h-16 rounded-2xl object-cover shadow-glow" />
              <div>
                <h3 className="text-xl font-semibold">Diya Anjana</h3>
                <p className="text-sm text-muted-foreground">Have a project, role, or idea? I&apos;d love to hear it.</p>
              </div>
            </div>

            <div className="space-y-3">
              <ContactRow Icon={Mail} label="Email" value="diyaanjana.ce19@gmail.com" href="mailto:diyaanjana.ce19@gmail.com" />
              <ContactRow Icon={Phone} label="Phone" value="+91 70962 71101" href="tel:+917096271101" />
              <ContactRow Icon={MapPin} label="Location" value="Petlad, Gujarat, India" />
              <ContactRow Icon={Linkedin} label="LinkedIn" value="diya-aniana" href="https://linkedin.com/in/diya-aniana-74ab89304" />
              <ContactRow Icon={Github} label="GitHub" value="Diya2711" href="https://github.com/Diya2711" />
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 space-y-4"
          >
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Name</label>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Email</label>
              <input
                required
                type="email"
                maxLength={200}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                maxLength={1000}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project or opportunity…"
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground py-3 rounded-xl font-medium shadow-glow hover:scale-[1.02] transition-transform"
            >
              <Send className="w-4 h-4" />
              {sent ? "Opening your mail app…" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ Icon, label, value, href }: { Icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
        <Icon className="w-5 h-5 text-primary-foreground" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer">{inner}</a> : inner;
}