import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#110D25] border-l-transparent border-r-transparent text-white">
      <div className="container p-4 md:p-8 lg:p-12 flex items-center justify-between">
        <span style={{ fontSize: "18px", verticalAlign: "middle" }}>
          &lt;
          <span
            style={{
              display: "inline-block",
              verticalAlign: "middle",
              marginLeft: "5px",
              marginRight: "5px",
            }}
          >
            <img src={logo} alt="Linkedin Icon" width={40} height={40} />
          </span>
          /&gt;
        </span>
        <span className="text-slate-600">
          Todos os direitos reservados. <br />
          Copyright© 2024 Anderson Lima. <br />
          @oieanderson <br />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
