'use client'
import React, { useEffect, useState } from "react";
//import "../../src/styles/Laterais.css";
import Image from "next/image";
import img1 from "../../public/image/marmitex.jpg";
import img2 from "../../public/image/fitness.jpg";
import img3 from "../../public/image/acompanharpedido.png";
//import img4 from "../../public/image/historico.png";
import img5 from "../../public/image/home.jpg";
import { useRouter } from "next/navigation";

function Pedidos_lateral() {
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
        <fieldset className="lateral_pedidos">
        <a onClick={() => router.push('/pedidos/marmitex')}>
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Marmitex
            </label>
          </a>
          <a onClick={() => router.push('/pedidos/fitness')}>
            <Image src={img2} alt="" id="img2" className="icones" />
            <label htmlFor="" className="label_icones">
              Fitness
            </label>
          </a>
          <a onClick={() => router.push('/pedidos/painel')}>
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Painel
            </label>
          </a>
          {/* <a href="/pedidos/historico"><Image src={img4} alt='' id='img4' className='icones'/>
           <label htmlFor="" className='label_icones'>Histórico</label></a> */}
           <a onClick={() => router.push('/home')}>
            <Image src={img5} alt="" id="img5p" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Pedidos_lateral;
