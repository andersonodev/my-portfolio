import React from "react";
import { BrowserRouter } from "react-router-dom";

import {
  Navbar,
  HeroSection,
  AboutSection,
  Experience,
  ProjectsSection,
  Contact,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <main className="flex min-h-screen flex-col bg-[#050816]">
        {/* Navbar */}
        <Navbar />

        {/* Conteúdo principal */}
        <div className="container mt-24 mx-auto px-12 py-4">
          {/* Seção principal */}
          <HeroSection />

          {/* Seção comentada | pausada */}
          {/* <AchievementsSection /> */}

          {/* Seção sobre */}
          <AboutSection />

          {/* <Experience/> */}

          {/* Seção de projetos */}
          <ProjectsSection />
        </div>

        {/* Seção de contato e canvas de estrelas/planeta */}
        <div className="relative z-0 bg-primaryOne">
          <div className="relative z-0">
            {/* Formulário de contato */}
            <Contact />

            {/* Canvas de estrelas */}
            <StarsCanvas />
          </div>
        </div>

        {/* Rodapé */}
        <Footer />
      </main>
    </BrowserRouter>
  );
};

export default App;
