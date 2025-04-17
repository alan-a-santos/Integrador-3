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
 

  async function logar(event: FormEvent) {
    event.preventDefault()

    const usuario = usuarioref.current?.value
    const senha = senharef.current?.value


    

    if (!usuario || !senha) {
      return alert("Informe usuário e senha.")
    }
   
    try {
      const response = await server.post('/', {
        usuario,
        senha,
     
      })
 
      if (response.data === 'Autorizado') {
        window.location.href = "/home"
        }
       else {
        (response.data === 'Negado')
        alert("Usuário e/ou senha inválidos")
      }

    } catch (error) {
      console.error("Erro ao tentar logar:", error)
      alert("Erro ao conectar ao banco de dados")
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


