import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { github, linkedin, instagram, discord } from "../assets";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Olá, eu sou{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Anderson",
                1000,
                "Full-Stack",
                1000,
                "Mobile Developer",
                1000,
                "Ethical Hacker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              (:
            </p>
          </div>

          <div className="relative">
            <a
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Contrate-me
            </a>

            <a
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <br />
          <br />

          <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
              Vamos nos conectar
            </h5>
            <p className="text-[#ADB7BE] mb-5 max-w-md text-justify">
              {" "}
              Atualmente estou em busca de novas oportunidades, minha caixa de
              entrada está sempre aberta. Se você tiver alguma dúvida ou apenas
              quiser dizer oi, farei o possível para entrar em contato com você!
            </p>

            <br />

            <div className="socials flex justify-center md:justify-start gap-2  ">
              <a
                className="float"
                href="https://www.instagram.com/oieanderson"
                target="_blank"
                alt="icon instagram"
              >
                <img src={instagram} alt="Instagram Icon" />
              </a>
              <br />
              <a
                className="float"
                href="https://www.github.com/andersonodev"
                target="_blank"
                alt="icon instagram"
              >
                <img src={github} alt="Github Icon" />
              </a>
              <br />
              <a
                className="float"
                href="./"
                target="_blank"
                alt="icon instagram"
              >
                <img src={linkedin} alt="Linkedin Icon" />
              </a>
              <br />
              <a
                className="float"
                href="https://discordapp.com/users/288341344685129731"
                target="_blank"
                alt="icon instagram"
              >
                <img src={discord} alt="Discord Icon" />
              </a>
            </div>
          </div>

          <br />
          <br />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
