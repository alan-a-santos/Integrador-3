'use client'

import React, { FormEvent, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import logo from '../../public/image/Logo.jpg'
import '../styles/Sessoes/login.css'
import { server } from '@/service/server'

function Login() {
  const usuarioref = useRef<HTMLInputElement | null>(null)
  const senharef = useRef<HTMLInputElement | null>(null)
  const router = useRouter()

  async function logar(event: FormEvent) {
    event.preventDefault()

    const usuario = usuarioref.current?.value
    const senha = senharef.current?.value

    console.log(usuario, senha)

    if (!usuario || !senha) {
      return alert("Informe usuário e senha.")
    }

    try {
      const response = await server.post('/', {
        usuario,
        senha
      })

      if (response.data === 'Autorizado') {
        router.push('/home') // navegação com Next
      } else {
        alert("Usuário e/ou senha inválidos")
      }

    } catch (error) {
      console.error("Erro ao tentar logar:", error)
      alert("Erro ao conectar com o servidor")
    }
  }

  return (
    <div className='login' id='div1'>
      <Image src={logo} alt="Logo da empresa" id='logo' priority />
      <form id='acesso' onSubmit={logar}>
        <input
          type="text"
          name="usuario"
          id="usuario"
          className='inputs'
          placeholder='Usuário'
          ref={usuarioref}
        />
        <input
          type="password"
          name="senha"
          id="senha"
          className='inputs'
          placeholder='Senha'
          ref={senharef}
        />
        <button type="submit" id='btentrar'>Entrar</button>
      </form>
    </div>
  )
}

export default Login



// 'use client'
// import React, { FormEvent,  useRef } from 'react'
// import logo from '../../public/image/Logo.jpg'
// import Image from 'next/image'
// import '../styles/Sessoes/login.css'
// import { server } from '@/service/server'

// export async function logar(event: FormEvent) {
//   event.preventDefault()

//   const usuario = usuarioref.current?.value
//   const senha = senharef.current?.value

//   if (!usuario) return alert("Necessário Informar um Usuário")

//   try {
//     const response = await server.post('/', { usuario, senha })

//     if (response.data === "Autorizado") {
//       window.location.href = '/home'
//       // ou useRouter().push('/home') com o hook do Next
//     } else {
//       alert("Usuário e/ou senha inválidos")
//     }
//   } catch (error) {
//     console.error("Erro ao tentar logar:", error)
//     alert("Erro ao conectar com o servidor")
//   }
// }


// function Login() {

//   const usuarioref = useRef<HTMLInputElement | null> (null)
//   const senharef = useRef<HTMLInputElement | null> (null)

//   // useEffect(() => {
//   //   // Qualquer lógica necessária para formatar a página
//   //   // Por exemplo, ajustar o estado ou aplicar algum estilo
//   // }, []); // O arr
// async function logar(event: FormEvent){
//   event.preventDefault()
//   usuario:  usuarioref.current?.value
//    senha: senharef.current?.value

//    console.log(usuarioref) 
   
//   if (!usuarioref.current?.value) return(alert("Necessário Informar um Usuário"))

//   const response = await server.post('/', {
//       usuario: usuarioref.current?.value,
//       senha : senharef.current?.value,
//   })

// if (response.data=== "Autorizado"){
//   window.location.href = '/home'
//     // router.push('/home')
// } else{
//   alert ("Usuario e/ou senha inválidos")
// }
// }
  

//   return (
//   <>

//         <div className='login' id='div1'>
//             <Image src={logo} alt="" id='logo' priority/>
//             <form action="" id='acesso' onSubmit={logar}>
//                 <input type="text" name="usuario" id="usuario" className='inputs' placeholder='usuario' ref={usuarioref}/>
//                 <input type="password" name="senha" id="senha" className='inputs' placeholder='senha' ref={senharef} />
//                 <button type="submit" id='btentrar'> Entrar</button>
//             </form>
//         </div>

//   </>
//   )
// }

// export default Login