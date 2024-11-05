// pages/index.tsx

import Link from "next/link";
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-pink-50 font-sans">
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center h-[50vh] bg-cover bg-center text-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/001/410/432/large_2x/pink-fluid-dynamic-abstract-background-free-vector.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-pink-800 opacity-60"></div>
        <div className="relative z-10 text-white p-6">
          <h1 className="text-8xl font-bold mb-4 font-mono">Welcome!</h1>
          <p className="text-2xl font-mono">Here is my portfolio.</p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 bg-pink-100">
        <h2 className="text-3xl text-pink-900 font-bold text-center mb-10">
          Projects
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <Link href="/cc" passHref>
              <h3 className="text-xl font-semibold text-pink-800 cursor-pointer">
                Code Challenge
              </h3>
            </Link>
            <p className="mt-2 text-pink-700">A code challenge project.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-pink-50">
        <h2 className="text-3xl text-pink-900 font-bold text-center mb-10">
          Skills
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-6">
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaHtml5 className="text-4xl text-orange-600" />
            <span className="text-pink-800 font-semibold mt-2">HTML</span>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaCss3Alt className="text-4xl text-blue-600" />
            <span className="text-pink-800 font-semibold mt-2">CSS</span>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaJs className="text-4xl text-yellow-500" />
            <span className="text-pink-800 font-semibold mt-2">JavaScript</span>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <SiTypescript className="text-4xl text-blue-500" />
            <span className="text-pink-800 font-semibold mt-2">TypeScript</span>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <SiTailwindcss className="text-4xl text-teal-500" />
            <span className="text-pink-800 font-semibold mt-2">Tailwind</span>
          </div>
          <div className="bg-pink-200 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-pink-300 hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 ease-in-out">
            <FaReact className="text-4xl text-blue-400" />
            <span className="text-pink-800 font-semibold mt-2">React</span>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 bg-pink-200">
        <h2 className="text-3xl text-pink-900 font-bold text-center mb-10">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto bg-pink-50 p-8 rounded-lg shadow-md text-center text-pink-700">
          <p className="text-lg">
            Hi! I&apos;m a bootcamp student at Purwadhika. I take full-stack web
            development class. I learn to improve my coding skills every day.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Home;
