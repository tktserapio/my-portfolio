// app/page.tsx
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-4">
      <Hero />

      <Projects />
    </main>
  );
}
