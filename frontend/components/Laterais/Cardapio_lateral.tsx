'use client'
import React, { useEffect, useState } from "react";
//import "../../src/styles/Laterais.css";
import img1 from "../../public/image/Fichatecnica.png";
//import img2 from "../../public/image/montagem.jpg";
import img3 from "../../public/image/incluircardapio.jpg";
// import img4 from '../../public/image/preco.png'
import img5 from "../../public/image/home.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Cardapio_lateral() {
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
        <fieldset className="lateral_cardapio">
        <a onClick={() => router.push('/cardapio/cadastro')}>
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Cadastrar
            </label>
          </a>
          {/* <a href="/cardapio/montagem"><Image src={img2} alt='' id='img2' className='icones'/>
            <label htmlFor="" className='label_icones'>Montar</label></a> */}
           <a onClick={() => router.push('/cardapio/oferta')}>
            <Image src={img3} alt="" id="img3" className="icones" />
            <label htmlFor="" className="label_icones">
              Ofertar
            </label>
          </a>
          {/* <a href="/cardapio/preco"><Image src={img4} alt='' id='img4' className='icones'/></a>
           <label htmlFor="" className='label_icones'>Preço</label> */}

          <a onClick={() => router.push('/home')}>
            <Image src={img5} alt="" id="img5ca" className="icones" />
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Cardapio_lateral;
