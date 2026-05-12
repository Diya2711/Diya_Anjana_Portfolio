import { Github, Linkedin, Mail } from "lucide-react";

export function SocialRail() {
  const links = [
    { Icon: Github, href: "https://github.com/Diya2711", label: "GitHub" },
    { Icon: Linkedin, href: "https://linkedin.com/in/diya-aniana-74ab89304", label: "LinkedIn" },
    { Icon: Mail, href: "mailto:diyaanjana.ce19@gmail.com", label: "Email" },
  ];
  return (
    <div className="hidden xl:flex flex-col gap-3 fixed left-6 top-1/2 -translate-y-1/2 z-40">
      {links.map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all shadow-soft"
        >
          <Icon className="w-4 h-4" />
        </a>
      ))}
      <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent mx-auto mt-2" />
    </div>
  );
}