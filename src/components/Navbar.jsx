import React, { useState } from "react";
import { logo } from "../assets";
import MenuOverlay from "./MenuOverlay";
import MenuLinks from "./MenuLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// Heroicons para representar o ícone de menu e o
// ícone de fechar o menu em dispositivos menores

const navLinks = [
  {
    title: "Sobre",
    path: "#about",
  },

  // {
  //   title: "Experiência",
  //   path: "#experience",
  // },

  {
    title: "Projetos",
    path: "#projects",
  },
  {
    title: "Contato",
    path: "#contact",
  },
];

const Navbar = () => {
  //É definido um estado navbarOpen com useState,
  // que controla se o menu de navegação está aberto ou fechado.
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleClick = () => {
    setNavbarOpen(false);
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#050816] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href={"/"} className="text-2xl md:text-5xl text-white font-semibold">
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{ fontSize: "18px", verticalAlign: "middle" }}>
              &lt;
              <span
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                  marginLeft: "0px", // Sem margem esquerda
                  marginRight: "auto", // Empurre o logotipo para a direita
                }}
              >
                <img src={logo} alt="logo-anderson" width={40} height={40} />
              </span>
              /&gt;
            </span>
          </div>
        </a>

        {/* // Este bloco de código controla o ícone do menu que aparece
        // em dispositivos menores. Ele alterna entre o ícone de menu
        // e o ícone de fechar com base no estado navbarOpen e adiciona
        // um evento de clique para alternar o estado. */}

        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* imagem do menu  */}
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              {/* // imagem do menu */}
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* // Esta lista de itens de navegação é renderizada
        // apenas em telas maiores (maiores que o breakpoint definido para md).
        // Os itens de navegação são mapeados a partir do array navLinks e 
        //renderizados usando o componente NavLink. */}
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <MenuLinks links={navLinks} onClick={handleClick} />
        </div>
      </div>

      {/* Se navbarOpen for true, o componente MenuOverlay
      é renderizado para exibir o menu de navegação em
      dispositivos menores. */}
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onClick={handleClick} />
      ) : null}
    </nav>
  );
};

export default Navbar;
