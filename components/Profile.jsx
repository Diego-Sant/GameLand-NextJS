"use client";

import React from 'react'
import { Box, Button, Modal } from '@mui/material';
import Link from 'next/link';

import { AiOutlineHistory } from 'react-icons/ai';
import { LuLogOut } from 'react-icons/lu';
import { useUser } from '@/context/user';

const Profile = ({ onClose }) => {
    const [open, setOpen] = React.useState(false);
    const user = useUser();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleCloseAndSignOut = async () => {
        await user.signOut();
        onClose();
    };

    function limitWords(text, maxWords) {
        const words = text.split(' ');
    
        if (words.length <= maxWords) {
            return text;
        }
    
        const limitedText = words.slice(0, maxWords).join(' ');
        return `${limitedText}...`;
    }

  return (
    <div className='absolute w-[200px] right-24 top-[65px] sm:top-[72px] z-[100] bg-[#2d2d2d] p-[20px]'>
        <div className='flex items-center gap-[20px] mb-[30px]'>
            <div className='w-fit min-w-[80px] max-w-[80px]'><img className='rounded-full' src={user?.picture} alt="Foto de perfil" /></div>
            <div className='font-bold text-[13px] -ml-2'>{user?.name && limitWords(user.name, 3)}</div>
        </div>
        <div>
        <div><Link href="/pedidos" className='flex items-center gap-2 font-bold text-[12px] hover:text-white/70 -ml-1 mb-2'><AiOutlineHistory size={16} />MEUS PEDIDOS</Link></div>
        <React.Fragment>
            <Button onClick={handleOpen}><p className='flex items-center gap-2 text-red-600 hover:text-red-600/80 text-[12px] -ml-4'><LuLogOut size={16} />Sair</p></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labeledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box className="absolute text-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[400px] bg-[#2d2d2d] border-[2px] border-[#121212] pt-4 px-4 pb-3">
                <h2 id="child-modal-title" className='font-bold text-[1.3rem] mb-4'>Tem certeza que deseja sair?</h2>
                <Button onClick={handleCloseAndSignOut}><p className='text-red-600'>Sair</p></Button>
                </Box>
            </Modal>
        </React.Fragment>
        </div>
    </div>
  )
}

export default Profile