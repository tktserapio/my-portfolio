import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-20">
        {/* Profile Image */}
        <div className="w-full md:w-2/5 h-auto relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/profile.JPG"
            width={500} 
            height={500}
            alt="Profile Picture"
            layout="responsive"
            className="object-contain"
          />
        </div>
        {/* Hero Text */}
        <div className="w-full md:w-3/5 max-w-2xl text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900">Hi, I&apos;m Tyrone.</h1>
          <p className="text-lg text-gray-700 mt-4">
            I&apos;m a student at <span className="font-bold">Brown University</span> studying Computer Science, Applied Mathematics, and Economics.
          </p>
          <p className="text-lg text-gray-700 mt-2">
            
          </p>
          <p className="text-lg text-gray-700 mt-2">
            I&apos;m currently conducting research in the Fox-Kemper Research Group and part of the E-GLAMOR (Economics - Games, Learning, Agents, Modeling, Optimization, Research) Group.
          </p>
          <p className="text-lg text-gray-700 mt-4">Thanks for dropping by!</p>

          {/* Social Icons */}
          <div className="mt-6 flex justify-center md:justify-start space-x-6">
            <Link href="https://github.com/tktserapio" target="_blank" className="text-gray-700 hover:text-gray-900 text-2xl">
              <FaGithub />
            </Link>
            <Link href="https://linkedin.com/in/tyroneserapio" target="_blank" className="text-gray-700 hover:text-gray-900 text-2xl">
              <FaLinkedin />
            </Link>
            <Link href="mailto:tyroneserapio@gmail.com" className="text-gray-700 hover:text-gray-900 text-2xl">
              <FaEnvelope />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
