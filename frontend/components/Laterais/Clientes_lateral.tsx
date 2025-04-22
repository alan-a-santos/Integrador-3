'use client'
import React, { useEffect, useState } from "react";
//import "../../src/styles/Laterais.css";
import img1 from "../../public/image/cadastrar.png";
import img2 from "../../public/image/pesquisar.png";
import img3 from "../../public/image/atualizar.jpg";
import img4 from "../../public/image/excluir.png";
import img5 from "../../public/image/home.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Clientes_lateral() {
  const [isClient, setIsClient] = useState(false); // Estado para garantir execução no cliente
  const router = useRouter(); // Inicializando o useRouter

  // Garantir que o código será executado apenas no cliente
  useEffect(() => {
    setIsClient(true);

    // Verifica se o usuário está autenticado no localStorage
    const isAuthenticated = localStorage.getItem('autenticado');
    if (!isAuthenticated) {
      router.push('/'); // Redireciona para a página de login se não estiver autenticado
    }
  }, []);
  
  const handleLogout = () => {
    localStorage.removeItem('autenticado'); // Remover a chave de autenticação
    router.push('/'); // Redireciona para a página de login ou home
  };

  if (!isClient) {
    return null; // Retorna nada durante a renderização do servidor
  }

  return (
    <>
      <div className="lateral_principal">
        
        <fieldset className="lateral_cliente">
        <a onClick={() => router.push('/clientes/cadastro')}>
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Cadastrar
            </label>
          </a>
          <a onClick={() => router.push('/clientes/consulta')}>
            <Image src={img2} alt="" id="img2" className="icones" />
            <label htmlFor="" className="label_icones">
              Consultar
            </label>
          </a>
          <a onClick={() => router.push('/clientes/atualiza')}>
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Atualizar
            </label>
          </a>
          <a onClick={() => router.push('/clientes/exclusao')}>
            <Image src={img4} alt="" id="img4" className="icones" />
            <label htmlFor="" className="label_icones">
              Excluir
            </label>
          </a>
          <a onClick={() => router.push('/home')}>
            <Image src={img5} alt="" id="img5c" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Clientes_lateral;
