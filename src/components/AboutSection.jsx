import React, { useTransition, useState } from "react";
import { programador } from "../assets";
import TabButton from "./TabButton";


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className=" flex flex-wrap justify-between mr-10 mx-5 m w-full">
<div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Linguagens de Programação</h2>
</div>

<div className="grid grid-cols-3 gap-0 m-0 ">
<div>
        <img src="https://camo.githubusercontent.com/4a09e2a2a46ff51d57bfe440ca3ff9ec4c2bf576bf5ab89fbd4044fcaf7e3086/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/06ebb795f056eabee8ab4f494c7553a9b3538ded60bb226730d0d60a0f8ef4ef/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4a6176615363726970742d4637444631453f7374796c653d666f722d7468652d6261646765266c6f676f3d6a617661736372697074266c6f676f436f6c6f723d776869746526636f6c6f723d313130443235" alt="" />
    </div>
 
    <div>
        <img src="https://camo.githubusercontent.com/0562f16a4ae7e35dae6087bf8b7805fb7e664a9e7e20ae6d163d94e56b94f32d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f707974686f6e2d3336373041303f7374796c653d666f722d7468652d6261646765266c6f676f3d707974686f6e266c6f676f436f6c6f723d666664643534" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/8e31ce4df532515ac9a1c0418c03b7793471ff9e282dfc28e6473b65334fbac9/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f727573742d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d72757374266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/79cf738a834e1250967162f9ce82ee449077bd7ac32e043b87020fee9efa316b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f432d3030353939433f7374796c653d666f722d7468652d6261646765266c6f676f3d63266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/1c1b141d32f5e01a0c794c685f1c38f7b857f1ecdf6e0772ad38ded52529c675/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f432532422532422d3030353939433f7374796c653d666f722d7468652d6261646765266c6f676f3d63253242253242266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/ef0c3b237f677d294b4fb284b21eaf40d65936e17e877c74ce741f5cb1ae3a86/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f73776966742d4635344132413f7374796c653d666f722d7468652d6261646765266c6f676f3d7377696674266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/376adc79df22c1948702915e328829cc6898f02e5d77a7fefe75c512649a2f16/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4b6f746c696e2d3030393544353f267374796c653d666f722d7468652d6261646765266c6f676f3d6b6f746c696e266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/b0648ef7a9b6980ea27c1caaeb06d5c8503dbb4f9b4d9d7ca1df60a5edc14340/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6a6176612d2532334544384230302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6f70656e6a646b266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/d782685f94e3a4ce4c3fc60f6d609f2c21fc10f021813b723d75d9af4bac6de1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f626173682532307363726970742d303130313f7374796c653d666c6174266c6f676f3d676e7562617368266c6f676f436f6c6f723d253233464646464646266c6162656c436f6c6f723d253233303030303030" alt="" />
    </div>
</div>
</div>
     

        <div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Linguagens de Marcação</h2>
</div>

<div className="grid grid-cols-3 gap-0 m-0 ">
  
    <div>
        <img src="https://camo.githubusercontent.com/bfe6a48836e87b13a16f1f56f88fee428475c2ac29247992ec9b8bcc7154f881/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f48544d4c352d4533344632363f7374796c653d666f722d7468652d6261646765266c6f676f3d68746d6c35266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/472c222e8f240a48ae51cd9b082a1b857be809dcd851a25150890c2da50c13a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f435353332d3135373242363f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/0cb8aa1c5653d4ac43512b0eff03878ec44d591a4f8b6fc87af43fc36b5aa83a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536173732d3030303f7374796c653d666f722d7468652d6261646765266c6f676f3d73617373" alt="" />
    </div>
    
</div>
</div>


        <div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Bibliotecas e Frameworks</h2>
</div>

<div className="grid grid-cols-3 ">
  
    <div>
        <img src="https://camo.githubusercontent.com/6c3957842901e5baa389f3bb8758c8966683333b28493013062fcab5fab645e7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163742d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/c30a17d34fecc874999240e59c1adf56ca0eeebb7d6a5bc0fddc0e7c8592869d/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f4e61746976652d3230323332413f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d363144414642" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/3b41d3ae73bc489dbb2be32e772cc814e3a76e372027056c72e5b970c04684a5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f7461696c77696e646373732d2532333338423241432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/2abe53f4176fd7b9639f1c316e77574575c1c99c660e03fefa08299045988ba5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742d626c61636b3f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/d9e3534fab2bbe9cc4adaa0927695d3d17ff048c0e24a69f008d6e0876abb825/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f2d626f6f73747261702d3044313131373f7374796c653d666f722d7468652d6261646765266c6f676f3d626f6f747374726170266c6162656c436f6c6f723d304431313137" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/6d5704fb73e1524be26bec29f0065acec83252fe818a4bd58dfbf09f23db8a6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f646a616e676f2d2532333039324532302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d646a616e676f266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    
</div>
</div>


<div className="text-xl font-bold m-2 mb-2 mt-2 mr-8 ml-2 mx-2 my-2">
  <div className="mx-2  m-2">
<h2>Ferramentas</h2>
</div>

<div className="grid grid-cols-3 ">
  
    <div>
        <img src="https://camo.githubusercontent.com/0d58facab1be74748c39244ff3d990ae8ddd765af40263ed006219154ba90649/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6e6f64652e6a732d3644413535463f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6f64652e6a73266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/7b1b0bcf013f27d9700d574b84824ce2238930c33ae34767df76c5929c306f5c/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4749542d4534344333303f7374796c653d666f722d7468652d6261646765266c6f676f3d676974266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/997bb900c37784cf2b8f742d57c35467a8dbf51473cdafe6efefcde452cfd491/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5673636f64652d3030374143433f7374796c653d666f722d7468652d6261646765266c6f676f3d76697375616c2d73747564696f2d636f6465266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/1f1dc3a74857c732fa528d358206f9c86518563223858582da9949bbae3efc6a/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4669676d612d3639363936393f7374796c653d666f722d7468652d6261646765266c6f676f3d6669676d61266c6f676f436f6c6f723d6669676d61" alt="" />
    </div>
    <div>
        <img src="https://camo.githubusercontent.com/fd0fa98fcbccb832797511476264680bdd181783dcdcd4223a79a8e236e1cbaa/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f73746d616e2d4646364333372e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d506f73746d616e266c6f676f436f6c6f723d7768697465" alt="" />
    </div>
    
</div>
</div>

        <div className="">
        <div className=" ">
          <h2 className="text-xl font-bold m-0 mb-2 mt-0 mr-8 ml-0 mx-0 my-0">
          Databases
          </h2>
          <ul className="list-disc pl-4 mb-4 ">
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/c1c08eb7625abe1a813e5ad05a94891aa127a37e0ce126b59ecda28233effdac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d7953514c2d3030303030463f7374796c653d666f722d7468652d6261646765266c6f676f3d6d7973716c266c6f676f436f6c6f723d7768697465" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/7e95531437f8c91626ae46cb69240160dfde5c39c1119c550cd174ba8a19e712/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4d6f6e676f44422d2532333465613934622e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6d6f6e676f6462266c6f676f436f6c6f723d7768697465" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/d95ad87c214e2374f3e38f16fb449a605a2163e2a71d4abd4c2c30ba4a985fb1/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f506f737467726553514c2d3030303f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/a04742aeb388be6e3240199008de7fab8db34d612af03dc8becfbbae7f3a3ec6/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f53514c6974652d3030303f7374796c653d666f722d7468652d6261646765266c6f676f3d73716c697465266c6f676f436f6c6f723d303734303545" alt="" />
           </li>
          
          </ul>
          </div>
        </div>

        <div className="">
        <div className=" ">
          <h2 className="text-xl font-bold m-0 mb-2 mt-0 mr-8 ml-0 mx-0 my-0">
          Cloud Computing
          </h2>
          <ul className="list-disc pl-4 mb-4 ">
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/b9ff564d8c311812747f1aacea54cf703d850756f9179f9eff6899da20a701a2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f76657263656c2d2532333030303030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d76657263656c266c6f676f436f6c6f723d7768697465" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/494048f5340c80e80581dc89eb0b43011df26bdd7b20e0bcf377505f72217e97/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f436c6f7564666c6172652d4633383032303f7374796c653d666f722d7468652d6261646765266c6f676f3d436c6f7564666c617265266c6f676f436f6c6f723d7768697465" alt="" />
           </li>
           <li className="flex items-center mb-2"> 
            <img src="https://camo.githubusercontent.com/6dc1867bcca570983bdf14c9108b161ed74b99b6bd70698386be964e6bbe6032/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4157532d3030302e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d616d617a6f6e2d617773266c6f676f436f6c6f723d7768697465" alt="" />
           </li>
      
          </ul>
          </div>
        </div>



      


      </div>
    ),
  },


  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>IBMR - Bacharelado em Ciência da computação (Cursando)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Professional Cloud Developer</li>
        <li>Santander - Backend com Java</li>
        <li>AWS Academy Cloud Foundations</li>
        <li> Udemy: JavaScript e TypeScript do básico ao avançado</li>
        <li> Udemy: React.Js e Next.Js</li>
        <li> Udemy: Python e Django | Django Rest(DRF)</li>
        <li> CS50: Introduction to Computer Science</li>
      </ul>
    ),
  },
];



const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <img src={programador} alt="programador" width={800} height={800} />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Sobre mim</h2>
          <p className="text-base lg:text-lg text-justify">
          Olá, meu nome é Anderson Lima, eu sou um desenvolvedor Full Stack
          apaixonado por criar aplicações. Aprendo rápido e estou sempre procurando
          expandir meus conhecimentos e conjunto de habilidades. Atualmente estou cursando
          Bacharel em Ciência da Computação. Sou apaixonado por tecnologia e desenvolvimento.
          Amo a ideia de criar, inovar e inventar. Além disso, tenho um forte interesse em cibersegurança
          e hacking ético. Gosto de explorar técnicas e práticas para proteger sistemas e dados.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Formação{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certificados{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>

        {/* <div>
          <Image src="assets/programador.svg" width={800} height={800} />
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
