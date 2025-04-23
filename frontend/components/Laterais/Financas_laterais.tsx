'use client'
import React, { useEffect, useState } from "react";
//import "../../src/styles/Laterais.css";
import img1 from "../../public/image/receber.png";
// import img2 from "../../public/image/pagar.png";
// import img3 from "../../public/image/pesquisar.png";
// import img4 from "../../public/image/banco.jpg";
import img5 from "../../public/image/home.jpg";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Financas_laterais() {
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
        <fieldset className="menu_financas">
        <a onClick={() => router.push('/financas/recebimento')}>
            <Image src={img1} alt="" id="img1" className="icones" />
            <label htmlFor="" className="label_icones">
              Receber
            </label>
          </a>
          {/* <a href="/financas/pagamento"><Image src={img2} alt='' id='img2' className='icones'/>
            <label htmlFor="" className='label_icones'>Pagar</label></a>
            <a href="/financas/consulta"><Image src={img3} alt='' id='img3' className='icones'/>
            <label htmlFor="" className='label_icones'>Consultar</label></a>
            <a href="/financas/contas"><Image src={img4} alt='' id='img4' className='icones'/>
           <label htmlFor="" className='label_icones'>Contas</label></a> */}
           <a onClick={() => router.push('/home')}>
            <Image src={img5} alt="" id="img5f" className="icones" />
            <label htmlFor="" className="label_icones">
              Home
            </label>
          </a>
        </fieldset>
      </div>
    </>
  );
}

export default Financas_laterais;
