"use client";

import { DeleteOutline } from '@mui/icons-material'
import React from 'react'
import { Box, Button, Modal } from '@mui/material';
import Link from 'next/link';

const Cart = () => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleClosePlusDelete = () => {
        setOpen(false);
    }

  return (
    <div className='absolute right-[10px] left-[100px] sm:left-[300px] md:left-[400px] lg:left-[600px] xl:left-[800px] 2xl:left-[1000px] top-[65px] sm:top-[72px] z-[100] bg-[#2d2d2d] p-[20px]'>
        <h1 className='text-xl font-bold mb-6'>Produtos no carrinho<span> (0)</span></h1>
            <div className='flex items-center gap-[20px] mb-[30px]'>
                <Link className='w-fit min-w-[80px] max-w-[80px]' href="/produto" ><img src="https://picsum.photos/200" alt="Jogo" /></Link>
                <div className='flex-grow'>
                    <h1 className='font-bold text-ellipsis line-clamp-2'>Titulo</h1>
                    <p className='text-ellipsis line-clamp-2'>Descrição</p>
                    <div className='flex gap-2 items-center'>
                        <p>1x</p>
                        <div className='text-sm sm:text-lg'><span className='text-gray-400 line-through text-sm'>R$33</span></div>
                        <div className='text-sm sm:text-lg'><span className='text-[#7b61ff] font-bold'>R$44</span></div>
                    </div>
                </div>
                <DeleteOutline onClick={() => {}} className='text-red-600 text-[30px] cursor-pointer hover:bg-red-600/90 hover:text-white hover:rounded-md' />
            </div>
        <div className='text-lg flex items-center justify-between mb-3'>
            <span>TOTAL: </span>
            <span className='text-[#7b61ff] font-bold text-2xl'>R$100</span>
        </div>
        <div className='flex items-center justify-center'>
            <Link href="/carrinho" className='w-full p-[10px] bg-[#7b61ff] flex items-center justify-center cursor-pointer disabled:bg-[#7b61ff]/70 disabled:cursor-default hover:bg-[#7b61ff]/80 gap-[10px] border-0 font-[500] mb-3'>
            Ir para o carrinho
            </Link>
        </div>
        <React.Fragment>
            <Button onClick={handleOpen}><p className='text-red-600 hover:text-red-600/80 text-[12px]'>Limpar o carrinho</p></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] bg-[#2d2d2d] border-[2px] border-[#121212] pt-4 px-4 pb-3">
                <h2 id="child-modal-title" className='font-bold text-[1.3rem] mb-4'>Tem certeza que deseja excluir todos os itens do carrinho?</h2>
                <p id="child-modal-description" className='mb-4'>
                    Você não poderá desfazer essa ação!
                </p>
                <Button onClick={handleClosePlusDelete}><p className='text-red-600'>Limpar o carrinho</p></Button>
                </Box>
            </Modal>
        </React.Fragment>
    </div>
  )
}

export default Cart