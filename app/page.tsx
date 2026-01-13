// app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <div className="snap-start min-h-screen flex items-center">
        <Hero />
      </div>

      <div className="snap-start">
        <Publications />
      </div>

      <div className="snap-start">
        <Projects />
      </div>
    </main>
  );
}
