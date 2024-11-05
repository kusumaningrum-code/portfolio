// pages/index.tsx

import Link from "next/link";
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <main
      className="min-h-screen font-sans bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/11/a3/8a/11a38a1437020212440809650c4a62d2.jpg')",
      }}
    >
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[50vh] bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/001/410/432/large_2x/pink-fluid-dynamic-abstract-background-free-vector.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-pink-800 opacity-60"></div>
        <div className="relative z-10 text-white p-4 sm:p-6">
          <h1 className="text-4xl sm:text-8xl font-bold mb-2 sm:mb-4 font-mono">
            Welcome!
          </h1>
          <p className="text-lg sm:text-2xl font-mono">
            I am Kusuma Ningrum and here is my portfolio.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 sm:py-16 bg-transparent">
        <h2 className="text-2xl sm:text-3xl text-pink-900 font-bold text-center mb-6 sm:mb-10">
          My Projects
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out flex flex-col sm:flex-row">
            <div className="w-full sm:w-1/2 h-auto">
              <img
                src="/dressw.png"
                alt="Code Challenge"
                className="object-cover h-full w-full rounded-lg"
              />
            </div>
            <div className="w-full sm:w-1/2 sm:pl-4 mt-4 sm:mt-0">
              <Link href="/cc" passHref>
                <h2 className="text-2xl sm:text-3xl font-semibold text-pink-900 cursor-pointer font-mono">
                  De La Reina Store
                </h2>
              </Link>
              <p className="mt-2 text-pink-900">
                De La Reina is a vintage-inspired store project showcasing my
                coding skills, developed as part of a code challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-10 sm:py-16 bg-transparent">
        <h2 className="text-2xl sm:text-3xl text-pink-900 font-bold text-center mb-6 sm:mb-10">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaHtml5 className="text-3xl sm:text-4xl text-orange-600" />
            <span className="text-pink-800 font-semibold mt-2">HTML</span>
          </div>
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaCss3Alt className="text-3xl sm:text-4xl text-blue-600" />
            <span className="text-pink-800 font-semibold mt-2">CSS</span>
          </div>
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaJs className="text-3xl sm:text-4xl text-yellow-500" />
            <span className="text-pink-800 font-semibold mt-2">JavaScript</span>
          </div>
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <SiTypescript className="text-3xl sm:text-4xl text-blue-500" />
            <span className="text-pink-800 font-semibold mt-2">TypeScript</span>
          </div>
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <SiTailwindcss className="text-3xl sm:text-4xl text-teal-500" />
            <span className="text-pink-800 font-semibold mt-2">Tailwind</span>
          </div>
          <div className="bg-pink-200 p-4 sm:p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaReact className="text-3xl sm:text-4xl text-blue-400" />
            <span className="text-pink-800 font-semibold mt-2">React</span>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-10 sm:py-16 bg-transparent">
        <h2 className="text-2xl sm:text-3xl text-pink-900 font-bold text-center mb-6 sm:mb-10">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-pink-50 p-6 sm:p-8 rounded-lg shadow-md text-center text-pink-700">
          <p className="text-base sm:text-lg">
            Hi! I&apos;m a bootcamp student at Purwadhika. I take full-stack web
            development class. I learn to improve my coding skills every day.
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 sm:py-8 bg-pink-500 text-white text-center">
        <h2 className="text-lg sm:text-xl mb-3 sm:mb-4">Contact Me</h2>
        <div className="flex justify-center space-x-3 sm:space-x-4">
          <a
            href="https://www.instagram.com/kusumaningrum12_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/kusuma-ningrum-882032245/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaLinkedin className="text-2xl sm:text-3xl" />
          </a>
          <a
            href="https://github.com/kusumaningrum-code"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <FaGithub className="text-2xl sm:text-3xl" />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Home;
