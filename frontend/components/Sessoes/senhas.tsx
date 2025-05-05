"use client";
import React, { FormEvent, useRef, useState } from "react";
//import "../../src/styles/Sessoes/config.css";
import { server } from "@/service/server";

function Senha() {
  const usuarioref = useRef<HTMLInputElement | null>(null);
  const senharef = useRef<HTMLInputElement | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function enviar(event: FormEvent) {
    event.preventDefault();

    if (!usuarioref.current?.value) return;

    const response = await server.put("/configuracao/atualiza_senha", {
      usuario: usuarioref.current?.value,
      senha: senharef.current?.value,
    });

    console.log(response.data);
    // if (response.data=== "Autorizado"){

    setSuccessMessage(response.data);
    setTimeout(() => {
      setSuccessMessage(null); // Esconde a mensagem depois de 5 segundos
    }, 2000);
    // } else{
    //   alert ("Usuario e/ou senha inválidos")
    // }
  }

  return (
    <>
      <legend id="servico_usuario">Atualizar Senha do Usuário</legend>
      <div className="geralu">
        <div className="labelu">
          <label htmlFor="" className="labels" id="label1u">
            Usuário
          </label>
          <label htmlFor="" className="labels" id="label2u">
            Senha
          </label>
        </div>
        <div className="inputu">
          <input
            type="text"
            name=""
            id=""
            className="inputs"
            ref={usuarioref}
          />
          <input
            type="password"
            name=""
            id=""
            className="inputs"
            ref={senharef}
          />{" "}
          <button id="botao_cad1" onClick={enviar}>
            Cadastrar
          </button>
        </div>
        {successMessage && <p id="mensagem">{successMessage}</p>}
      </div>
    </>
  );
}

export default Senha;
