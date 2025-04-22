'use client'
import Image from "next/image";
import React, { useState, useEffect } from "react";
//import "../../src/styles/Laterais.css";
import img1 from "../../public/image/cliente.png";
import img2 from "../../public/image/pratos.png";
import img3 from "../../public/image/financeiro.png";
import img4 from "../../public/image/pedido.jpg";
import img5 from "../../public/image/config.jpeg";
import img6 from "../../public/image/sair.jpg";
import { useRouter } from 'next/navigation'; // Importando useRouter

function Principal() {
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
    <div className="lateral_principal">
      <fieldset className="principal">
        <a onClick={() => router.push('/clientes')}>
          <Image src={img1} alt="" id="img1" className="icones" />
          <label htmlFor="" className="label_icones">
            Clientes
          </label>
        </a>

        <a onClick={() => router.push('/pedidos')}>
          <Image src={img4} alt="" id="img4" className="icones" />
          <label htmlFor="" className="label_icones">
            Pedidos
          </label>
        </a>

        <a onClick={() => router.push('/cardapio')}>
          <Image src={img2} alt="" id="img2" className="icones" />
          <label htmlFor="" className="label_icones">
            Cardápio
          </label>
        </a>

        <a onClick={() => router.push('/financas')}>
          <Image src={img3} alt="" id="img3" className="icones" />
          <label htmlFor="" className="label_icones">
            Finanças
          </label>
        </a>

        <a onClick={() => router.push('/config')}>
          <Image src={img5} alt="" id="img5" className="icones" />
          <label htmlFor="" className="label_icones">
            Config.
          </label>
        </a>

        <a onClick={handleLogout}> {/* Chama a função de logout */}
          <Image src={img6} alt="" id="img6" className="icones" />
        </a>
      </fieldset>
    </div>
  );
}

export default Principal;


// 'use client'
// import Image from "next/image";
// import React from "react";
// import "../../src/styles/Laterais.css";
// import img1 from "../../public/image/cliente.png";
// import img2 from "../../public/image/pratos.png";
// import img3 from "../../public/image/financeiro.png";
// import img4 from "../../public/image/pedido.jpg";
// import img5 from "../../public/image/config.jpeg";
// import img6 from "../../public/image/sair.jpg";
// import { useRouter } from 'next/router'; // Importando useRouter

// function Principal() {
//   const router = useRouter(); // Inicializando o useRouter

//   // Função para lidar com o logout
//   const handleLogout = () => {
//     localStorage.removeItem('autenticado'); // Remover a chave de autenticação
//     router.push('/'); // Redireciona para a página de login ou home
//   };

//   return (
//     <div className="lateral_principal">
//       <fieldset className="principal">
//         <a onClick={() => router.push('/clientes/')}>
//           <Image src={img1} alt="" id="img1" className="icones" />
//           <label htmlFor="" className="label_icones">
//             Clientes
//           </label>
//         </a>

//         <a onClick={() => router.push('/pedidos/')}>
//           <Image src={img4} alt="" id="img4" className="icones" />
//           <label htmlFor="" className="label_icones">
//             Pedidos
//           </label>
//         </a>

//         <a onClick={() => router.push('/cardapio/')}>
//           <Image src={img2} alt="" id="img2" className="icones" />
//           <label htmlFor="" className="label_icones">
//             Cardápio
//           </label>
//         </a>

//         <a onClick={() => router.push('/financas/')}>
//           <Image src={img3} alt="" id="img3" className="icones" />
//           <label htmlFor="" className="label_icones">
//             Finanças
//           </label>
//         </a>

//         <a onClick={() => router.push('/config/')}>
//           <Image src={img5} alt="" id="img5" className="icones" />
//           <label htmlFor="" className="label_icones">
//             Config.
//           </label>
//         </a>

//         <a onClick={handleLogout}> {/* Chama a função de logout */}
//           <Image src={img6} alt="" id="img6" className="icones" />
//         </a>
//       </fieldset>
//     </div>
//   );
// }

// export default Principal;


// 'use client'
// import Image from "next/image";
// import React from "react";
// import "../../src/styles/Laterais.css";
// import img1 from "../../public/image/cliente.png";
// import img2 from "../../public/image/pratos.png";
// import img3 from "../../public/image/financeiro.png";
// import img4 from "../../public/image/pedido.jpg";
// import img5 from "../../public/image/config.jpeg";
// import img6 from "../../public/image/sair.jpg";

// function Principal() {

//   return (
//     <>
//       <div className="lateral_principal">
//         <fieldset className="principal">
//           <a href="/clientes/">
//             <Image src={img1} alt="" id="img1" className="icones" />
//             <label htmlFor="" className="label_icones">
//               Clientes
//             </label>{" "}
//           </a>
//           <a href="/pedidos/">
//             <Image src={img4} alt="" id="img4" className="icones" />
//             <label htmlFor="" className="label_icones">
//               Pedidos
//             </label>
//           </a>
//           <a href="/cardapio/">
//             <Image src={img2} alt="" id="img2" className="icones" />
//             <label htmlFor="" className="label_icones">
//               Cardápio
//             </label>
//           </a>

//           <a href="/financas/">
//             <Image src={img3} alt="" id="img3" className="icones" />
//             <label htmlFor="" className="label_icones">
//               Finanças
//             </label>{" "}
//           </a>

//           <a href="/config/">
//             <Image src={img5} alt="" id="img5" className="icones" />
//             <label htmlFor="" className="label_icones">
//               Config.
//             </label>
//           </a>
//           <a href="/">
          
//             <Image src={img6} alt="" id="img6" className="icones" />
//           </a>
//           {/* <label htmlFor="" className='label_icones' id='lsair'>Sair</label> */}
//         </fieldset>
//       </div>
//     </>
//   );
// }

// export default Principal;
