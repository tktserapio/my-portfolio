import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Market-Based LLM Coordination",
    description: "Multi-agent simulations for scenarios such as real-world delivery tasks, implementing prediction markets and Vickrey auctions to coordinate LLM agents.",
    // tech: ["#PyTorch", "#", "#Python"],
    image: "/auction.jpg",
    github: "https://github.com/tktserapio/LLM-Prediction-Markets"
  },
  {
    title: "Fink",
    description:
      "Multi-modal AI notes assistant for retrieving and managing notes via natural language conversation.",
    // tech: ["#React", "#TypeScript", "#LangChain"],
    image: "/fink.png", // Update paths to match your images
    github: "https://github.com/tktserapio/fink-ai",
  },
  {
    title: "stream.ai",
    description:
      "Workout app that offers personalized exercises to swimmers. Also trained a machine learning (ML) video action classifier model -- 90.2% accuracy -- to detect exercise form.",
    // tech: ["#Swift", "#SwiftUI", "#CoreML"],
    image: "/stream.png",
    github: "https://github.com/tktserapio/Stream.ai",
  },
  {
    title: "Matttr",
    description:
      "A platform for debaters that features condensed transcriptions of arguments on various motions. It uses Natural Language Processing (NLP) to automate transcription of speeches.",
    // tech: ["#Python", "#OpenAI API", "#JavaScript"],
    image: "/matttr.png",
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

        {/* Grid Layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="bg-white-800 rounded-xl overflow-hidden shadow-lg">
              {/* Image Container */}
              <div className="relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-80"
                />
                {/* GitHub Icon (Top Right) */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-3 right-3 bg-black/70 p-2 rounded-full hover:bg-gray-700 transition"
                >
                  <FaGithub className="text-white text-2xl" />
                </Link>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tag, idx) => (
                    <span key={idx} className="text-sm text-blue-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
