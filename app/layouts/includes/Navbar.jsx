"use client";

import { useEffect, useRef, useState } from "react";

import { FavoriteBorderOutlined, House, Language, NewReleases, People, Person, PersonOutlineOutlined, Search, ShoppingCartOutlined, Menu as MenuIcon, ShowChart } from "@mui/icons-material";
import { BsPlaystation, BsXbox, BsNintendoSwitch, BsChevronDown } from 'react-icons/bs';

import { Button, Menu, MenuItem } from "@mui/material";

import Cart from "@/components/Cart";
import Favorite from "@/components/Favorite";
import Profile from "@/components/Profile";

import Link from "next/link";
import { IMAGES_PATH } from "@/utils/constants";

import { useUser } from "@/context/user";
import { useCart } from "@/context/cart";
import { useWishList } from "@/context/wishlist";

import { debounce } from "debounce";
import { BiLoaderCircle } from "react-icons/bi";

export default function Navbar() {
    const [isDesktop, setIsDesktop] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [cartOpen, setCartOpen] = useState(false);
    const [favoriteOpen, setFavoriteOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);

    const user = useUser();
    const cart = useCart();
    const wishlist = useWishList();

    const containerRef = useRef(null);

    const [items, setItems] = useState([]);
    const [isSearching, setIsSearching] = useState(null);

    const handleSearchName = debounce(async (event) => {
        if (event.target.value == "") {
            setItems([]);
            return
        }

        setIsSearching(true);

        try {
            const res = await fetch(`/api/produtos/pesquisar/${event.target.value}`);
            const result = await res.json();

            if (result) {
                setItems(result);
                setIsSearching(false);
                return
            }

            setItems([]);
            setIsSearching(false);
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }, 500)

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

    const handleProfileModalClose = () => {
        setProfileOpen(false);
    };
    
    const open = Boolean(anchorEl);

    const categories = [
        { id: 9, icon: <House />, text: 'Menu inicial', link: '/' },
        { id: 1, icon: <NewReleases />, text: 'Novidades', link: '/produtos/novidades' },
        { id: 2, icon: <ShowChart />, text: 'Mais vendidos', link: '/produtos/maisvendidos' },
        { id: 3, icon: <Person />, text: 'Um jogador', link: '/produtos/umjogador' },
        { id: 4, icon: <People />, text: 'Multijogador', link: '/produtos/multijogador' },
        { id: 5, icon: <Language />, text: 'Online', link: '/produtos/online' },
        { id: 6, icon: <BsPlaystation className='h-6 w-6' />, text: 'Playstation', link: '/produtos/playstation' },
        { id: 7, icon: <BsXbox className='h-6 w-6' />, text: 'Xbox', link: '/produtos/xbox' },
        { id: 8, icon: <BsNintendoSwitch className='h-6 w-6' />, text: 'Nintendo', link: '/produtos/nintendo' },
    ];

    const isLoggedIn = () => {
        if (user && user?.id) {
            let displayName = user?.name && user.name.split(' ')[0];
            if (displayName.length > 8) {
                displayName = displayName.substring(0, 8) + "...";
            }

            return (
                <button onClick={handleProfileClick} className="flex items-center gap-2 hover:underline cursor-pointer">
                <div>{displayName}</div>
                <BsChevronDown className="font-bold hover:text-white/70" size={12} />
                </button>
            )
        }

        return (
            <Link href="/auth" className="flex items-center">
                <PersonOutlineOutlined className="hover:text-white/70" />
            </Link>
        )
    }

    return (
        <>
            <div className='bg-[#1f1f1f]  py-2 text-white'>
                <div className='flex flex-col-reverse sm:flex-row justify-between'>
                    <div className='flex items-center justify-center sm:justify-start gap-x-4'>
                        <div className='ml-2'>
                            <Link href="/"><img className='w-14 h-14 sm:w-20 sm:h-20 hover:brightness-90' src={`${IMAGES_PATH}/logo.png`} alt="Gameland" /></Link>
                        </div>
                        <div className='flex'>
                            <img className='w-9 h-6' src={`${IMAGES_PATH}/brasil.png`} alt="Bandeira do Brasil" />
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
                                <div className="sm:relative w-full">
                                    <input onChange={handleSearchName} type="text" id="searchplaceholder" placeholder="Pesquisar por título..." className="p-1 sm:p-2 rounded-md w-full sm:placeholder-transparent outline-1 focus:outline-[#8900ff] focus:outline-2" />
                                    <label htmlFor="searchplaceholder" className="sm:absolute sm:-top-[0.10rem] sm:left-0 text-gray-200 cursor-text labelminwidth">Pesquisar por título...</label>
                                
                                    
                                    
                                    {items.length > 0 ? 
                                    
                                    <div className="absolute bg-[#1f1f1f] h-auto mt-2 sm:mt-0 min-w-[285px] max-w-[285px] w-full z-20 left-0 top-12 p-1">
                                        {items.slice(0, 20).map((item) => (
                                            <div className="p-1" key={item.id}>
                                                <Link href={`/produto/${item.id}`} className="flex items-center justify-between w-full cursor-pointer hover:bg-[#2d2d2d] p-1 px-2">
                                                    <div className="flex items-center">
                                                        <img src={item?.img} alt={item?.title} className="rounded-md" width="40" />
                                                        <div className="truncate max-w-[140px] ml-2">{item?.title}</div>
                                                    </div>
                                                    <div className="truncate">R${(item?.price / 100).toFixed(2).replace(".", ",")}</div>
                                                </Link>
                                                
                                            </div>
                                        ))}
                                    </div>

                                    : null}
                                </div>
                                {isSearching ? <BiLoaderCircle className="mr-2 animate-spin" size={20} /> :<button className="hover:text-white/70"><Search /></button>}
                            </div>
                            
                            {isLoggedIn()}

                            <div className='relative' onClick={handleFavoriteClick}>
                                <FavoriteBorderOutlined className="hover:text-white/70" />
                                <span className='flex justify-center items-center absolute -right-[10px] -top-[10px] text-[16px] w-[20px] h-[20px] bg-[#8900ff] rounded-full'>{wishlist.wishListCount()}</span>
                            </div>
                            <div className='relative' onClick={handleCartClick}>
                                <ShoppingCartOutlined className="hover:text-white/70" />
                                <span className='flex justify-center items-center absolute -right-[10px] -top-[10px] text-[16px] w-[20px] h-[20px] bg-[#8900ff] rounded-full'>{cart.cartCount()}</span>
                            </div>
                        </div>
                    </div>
                </div>
                {cartOpen && <Cart />}
                {favoriteOpen && <Favorite />}
                {profileOpen && <Profile onClose={handleProfileModalClose} />}
            </div>
        </>
    )
}