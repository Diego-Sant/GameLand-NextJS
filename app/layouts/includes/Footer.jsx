"use client"

import Link from 'next/link'
import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-[#1f1f1f] text-white pt-10 pb-3'>
      <div className='flex flex-col sm:flex-row items-center gap-y-6 md:gap-y-0 justify-between'>
        <div className='flex'>
          <div className='flex flex-col gap-y-2 md:ml-2 md:mr-2 mr-9'>
            <h1 className='font-bold text-xl mb-2'>Categorias</h1>
            <Link href="/produtos/novidades">Novidades</Link>
            <Link href="/produtos/maisvendidos">Mais vendidos</Link>
            <Link href="/produtos/umjogador">Um jogador</Link>
            <Link href="/produtos/multijogador">Multijogador</Link>
          </div>
          <div className='flex flex-col mt-11 gap-y-2'>
            <Link href="/produtos/online">Online</Link>
            <Link href="/produtos/playstation">Playstation</Link>
            <Link href="/produtos/xbox">Xbox</Link>
            <Link href="/produtos/nintendo">Nintendo</Link>
          </div>
        </div>
        <div className='md:mb-12 block sm:hidden md:block'>
            <h1 className='font-bold text-xl mb-4'>Sobre</h1>
            <p className='flex flex-wrap max-w-[215px] md:max-w-[310px]'>Somos uma loja de vendas de jogos com diversas categorias, multi plataformas e com os melhores preços!</p>
        </div>
        <div className='flex flex-col md:mr-2 gap-y-2'> 
          <h1 className='font-bold text-xl mb-2'>Contatos</h1>
          <Link className='flex items-center gap-x-2' href="https://wa.me/5521996790499" target='_blank'><p>+55 (21) 99679-0499</p></Link>
          <Link className='flex items-center gap-x-2' href="mailto:diegossantana071@gmail.com" target='_blank'><p>diegossantana071@gmail.com</p></Link>
          <div>
            <Link className='flex items-center gap-x-2' href="https://www.linkedin.com/in/diego-de-souza-sant-ana-7784b821b/" target='_blank'><BsLinkedin /> Linkedin</Link>
          </div>
          <div>
            <Link className='flex items-center gap-x-2' href="https://github.com/Diego-Sant" target='_blank'><BsGithub /> Github</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center md:mr-12 mt-5'> 
        <p>&copy; GameLand. Todos os direitos reservados.</p>
      </div>
    </div>
  )
}

export default Footer