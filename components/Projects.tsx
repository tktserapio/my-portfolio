import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Market-Based LLM Coordination",
    description:
      "Multi-agent simulations for scenarios such as real-world delivery tasks, implementing prediction markets and Vickrey auctions to coordinate LLM agents.",
    github: "https://github.com/tktserapio/LLM-Prediction-Markets",
  },
  {
    title: "Fink",
    description:
      "Multi-modal AI notes assistant for retrieving and managing notes via natural language conversation.",
    github: "https://github.com/tktserapio/fink-ai",
  },
  {
    title: "stream.ai",
    description:
      "Workout app that offers personalized exercises to swimmers. Also trained a machine learning (ML) video action classifier model — 90.2% accuracy — to detect exercise form.",
    github: "https://github.com/tktserapio/Stream.ai",
  },
  {
    title: "Matttr",
    description:
      "A platform for debaters that features condensed transcriptions of arguments on various motions. It uses Natural Language Processing (NLP) to automate transcription of speeches.",
    github: "https://github.com/tktserapio/matttr",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-[90%] lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="relative text-4xl font-bold mb-20 text-center">
          Projects
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-24 h-1 bg-blue-500"></span>
        </h2>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
              >
                <FaGithub />
                GitHub
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
