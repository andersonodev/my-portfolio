import React from "react";
import NavLink from "./NavLink";



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


const MenuLinks = ({ }) => {
  return (
    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
    {navLinks.map((link, index) => (
      <li key={index}>
         <NavLink href={link.path} title={link.title} />
      </li>
    ))}
  </ul>
  );
};

export default MenuLinks;







