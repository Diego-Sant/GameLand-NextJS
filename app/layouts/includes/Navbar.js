"use client";

import { useEffect, useRef, useState } from "react";

import { FavoriteBorderOutlined, House, Language, NewReleases, People, Person, PersonOutlineOutlined, Search, ShoppingCartOutlined, Menu as MenuIcon, ShowChart } from "@mui/icons-material";
import { BsPlaystation, BsXbox, BsNintendoSwitch, BsChevronDown } from 'react-icons/bs';

import { Button, Menu, MenuItem } from "@mui/material";

import Cart from "@/components/Cart";
import Favorite from "@/components/Favorite";
import Profile from "@/components/Profile";

import Link from "next/link";

export default function Navbar() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);
    const [favoriteOpen, setFavoriteOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const containerRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth <= 1400);
        };
        
        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleDocumentClick = (event) => {
          if (containerRef.current && !containerRef.current.contains(event.target)) {
            setCartOpen(false);
            setFavoriteOpen(false);
            setProfileOpen(false);
          }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
    }, []);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    const handleCartClick = () => {
        setCartOpen(true);
        setFavoriteOpen(false);
        setProfileOpen(false)
        setCartOpen(!cartOpen);
    };
    
    const handleFavoriteClick = () => {
        setFavoriteOpen(true);
        setCartOpen(false);
        setProfileOpen(false)
        setFavoriteOpen(!favoriteOpen);
    };

    const handleProfileClick = () => {
        setProfileOpen(true);
        setCartOpen(false);
        setFavoriteOpen(false)
        setProfileOpen(!profileOpen);
    };
    
    const open = Boolean(anchorEl);

    const categories = [
        { id: 9, icon: <House />, text: 'Menu inicial', link: '/' },
        { id: 1, icon: <NewReleases />, text: 'Novidades', link: '/produtos/1' },
        { id: 2, icon: <ShowChart />, text: 'Mais vendidos', link: '/produtos/2' },
        { id: 3, icon: <Person />, text: 'Um jogador', link: '/produtos/3' },
        { id: 4, icon: <People />, text: 'Multijogador', link: '/produtos/4' },
        { id: 5, icon: <Language />, text: 'Online', link: '/produtos/5' },
        { id: 6, icon: <BsPlaystation className='h-6 w-6' />, text: 'Playstation', link: '/produtos/6' },
        { id: 7, icon: <BsXbox className='h-6 w-6' />, text: 'Xbox', link: '/produtos/7' },
        { id: 8, icon: <BsNintendoSwitch className='h-6 w-6' />, text: 'Nintendo', link: '/produtos/8' },
    ];

    return (
        <>
            <div id="Navbar" className='bg-[#1f1f1f]  py-2 text-white'>
                <div className='flex flex-col-reverse sm:flex-row justify-between'>
                    <div className='flex items-center justify-center sm:justify-start gap-x-4'>
                        <div className='ml-2'>
                            <Link href="/"><img className='w-14 h-14 sm:w-20 sm:h-20' src="images/logo.png" alt="Gameland" /></Link>
                        </div>
                        <div className='flex'>
                            <img className='w-9 h-6' src="images/brasil.png" alt="Bandeira do Brasil" />
                        </div>
                        <div className='-ml-2 text-[12px]'>
                            <span>BRL</span>
                        </div>

                        {isDesktop ? (
                            <>
                                <div className='hover:bg-[#2d2d2d] rounded-md -ml-3'>
                                    <Button id="basic-button" aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true" aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                        <MenuIcon className='text-white' />
                                    </Button>
                                </div>
                                <Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button'}}>
                                    <div className='bg-[#2d2d2d] text-white p-6'>
                                        {categories.map((category) => (
                                        <Link key={category.id} href={category.link}>
                                            <MenuItem className='flex gap-x-3 w-full' onClick={handleClose}>
                                                {category.icon}
                                                {category.text}
                                            </MenuItem>
                                        </Link>
                                        ))}
                                    </div>
                                </Menu>
                            </>
                        ) : (
                            <>
                                {categories.map((category) => (
                                <div key={category.id} className="hover:text-white/60 ">
                                    <Link href={category.link}>{category.text}</Link>
                                </div>
                                ))}
                            </>
                        )}
                    </div>

                    <div className='flex justify-end items-center mr-4 mb-4 mt-2 sm:mt-0 sm:mb-0'>
                        <div className='flex gap-x-4 cursor-pointer flex-grow items-center'>
                            <div className="flex items-center gap-2 ml-2 sm:ml-0 w-full">
                                <input type="text" placeholder="Pesquisar por título..." className="bg-[#2d2d2d] p-1 sm:p-2 rounded-md w-full" />
                                <button className="hover:text-white/70"><Search /></button>
                            </div>
                            <div onClick={handleProfileClick} className="flex items-center">
                                <PersonOutlineOutlined />
                                <BsChevronDown className="font-bold" size={12} />
                            </div>
                            <div onClick={handleFavoriteClick}>
                                <FavoriteBorderOutlined />
                            </div>
                            <div className='relative' onClick={handleCartClick}>
                                <ShoppingCartOutlined />
                                <span className='flex justify-center items-center absolute -right-[10px] -top-[10px] text-[16px] w-[20px] h-[20px] bg-[#8900ff] rounded-full'>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                {cartOpen && <Cart />}
                {favoriteOpen && <Favorite />}
                {profileOpen && <Profile />}
            </div>
        </>
    )
}