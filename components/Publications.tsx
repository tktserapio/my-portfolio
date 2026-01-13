import Link from "next/link";
import { FaExternalLinkAlt, FaFilePdf } from "react-icons/fa";

const publications = [
  {
    title: "Spectral Collapse Drives Loss of Plasticity in Deep Continual Learning",
    authors: "Naicheng He, Kaicheng Guo, Arjun Prakash, Saket Tiwari, Ruo Yu Tao, Tyrone Serapio, Amy Greenwald, George Konidaris",
    venue: "NeurIPS 2025 ARLET Workshop",
    // description: "A brief description of what this publication is about and its key contributions.",
    links: {
      paper: "https://arxiv.org/abs/2509.22335", // Add your paper URL
      pdf: "https://arxiv.org/pdf/2509.22335",  // Uncomment and add PDF link if available
      // code: "#", // Uncomment and add code repository link if available
    }
  },
  // Add more publications here
];

export default function Publications() {
  return (
    <section id="publications" className="py-20">
      <div className="max-w-[90%] lg:max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <h2 className="relative text-4xl font-bold mb-20 text-center">
          Research
          <span className="absolute left-1/2 transform -translate-x-1/2 bottom-[-20px] w-24 h-1 bg-blue-500"></span>
        </h2>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {pub.title}
              </h3>
              
              {/* Authors */}
              <p className="text-gray-600 mb-1">
                {pub.authors}
              </p>
              
              {/* Venue */}
              <p className="text-blue-600 font-medium mb-3">
                {pub.venue}
              </p>
              
              {/* Description */}
              {/* <p className="text-gray-700 mb-4">
                {pub.description}
              </p> */}
              
              {/* Links */}
              <div className="flex flex-wrap gap-4">
                {pub.links.paper && (
                  <Link
                    href={pub.links.paper}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                  >
                    <FaExternalLinkAlt />
                    arXiv
                  </Link>
                )}
                {pub.links.pdf && (
                  <Link
                    href={pub.links.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    <FaFilePdf />
                    PDF
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
