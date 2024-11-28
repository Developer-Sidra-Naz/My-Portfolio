import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Project"
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
  <div>
    <Header />
    <main className="container mx-auto my-10 px-4">
      <About />
      <Skills />
      <Projects />
      <Footer />
    </main>
  </div>

    </div>
  );
}
