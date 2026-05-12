import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 border-t border-white/5">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Diya Anjana. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: "https://github.com/Diya2711" },
            { Icon: Linkedin, href: "https://linkedin.com/in/diya-aniana-74ab89304" },
            { Icon: Mail, href: "mailto:diyaanjana.ce19@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground inline-flex items-center gap-1.5">
          Built with <Heart className="w-3.5 h-3.5 text-secondary fill-secondary" /> & lots of ☕
        </p>
      </div>
    </footer>
  );
}