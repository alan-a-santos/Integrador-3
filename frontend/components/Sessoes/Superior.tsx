"use client";
import React from "react";
//import "../../src/styles/Sessoes/sessoes.css";
import Logo from "../../public/image/Logo.jpg";
import Image from "next/image";

function Superior() {
  return (
    <>
      <div className="superior">
        <Image src={Logo} alt="" id="superior_logo" />
        {/* <section id="titulo_superior"> */}
          <h1 id="titulo">DMais Marmitaria - Sistema de Gestão </h1>
        {/* </section> */}
        {/* <Image src={Logo} alt="" id="logo" /> */}
      </div>
    </>
  );
}

export default Superior;
