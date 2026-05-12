import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Timeline } from "@/components/portfolio/Timeline";
import { Certificates } from "@/components/portfolio/Certificates";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { SocialRail } from "@/components/portfolio/SocialRail";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Diya Anjana — Computer Engineer | AI & Flutter Developer" },
      {
        name: "description",
        content:
          "Portfolio of Diya Anjana — Computer Engineer, MSc Data Science student, and AI & Flutter developer building production apps and ML systems.",
      },
      { property: "og:title", content: "Diya Anjana — AI & Flutter Developer" },
      {
        property: "og:description",
        content:
          "Featured projects in Flutter, machine learning, and data science by Diya Anjana.",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <SocialRail />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
