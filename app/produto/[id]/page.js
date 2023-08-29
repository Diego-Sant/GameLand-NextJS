"use client"

import MainLayout from '@/app/layouts/MainLayout';
import SimilarProducts from '@/components/SimilarProducts';

import { useCart } from '@/context/cart';
import { useWishList } from '@/context/wishlist';

import { AddShoppingCart, Favorite, FavoriteBorder } from '@mui/icons-material';

import React, { useEffect, useState } from 'react'
import { toast } from 'react-hot-toast';

const Product = () => {
  const [selectedImg, setSelectedImg] = useState("img");
  const [expandedImage, setExpandedImage] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();
  const wishlist = useWishList();

    const handleImageClick = (src) => {
    setExpandedImage(src);
    };

    const handleCloseImage = () => {
    setExpandedImage(null);
    };

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return null;
    }

  const product = [
    {
        id: 1, 
        title: "Remnant II",
        desc: "In the near future on the outskirts of the asteroid belt, a bloody mutiny breaks loose on the Artemis. You take the role of XO Camina Drummer, where your choices determine the fate of the ship. What will you do with the truth, Bosmang?",
        img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6lnp.png",
        img2: "https://images.igdb.com/igdb/image/upload/t_original/scf13g.jpg",
        img3: "https://images.igdb.com/igdb/image/upload/t_original/scf13g.jpg",
        img4: "https://images.igdb.com/igdb/image/upload/t_original/scf13g.jpg",
        img5: "https://images.igdb.com/igdb/image/upload/t_original/scf13g.jpg",
        oldPrice: 200.00,
        price: 100.00,
        publisher: ["Nintendo"],
        genres: ["Ação ", "Aventura ", "Mundo aberto"],
        gameMode: ["Multijogador ", "Um jogador"]
    }
  ]

  return (
    <>
        <MainLayout>
            {product.map((item) => (
                <div key={item.id} className='py-[20px] px-[50px] flex gap-[50px] bg-[#121212] text-white flex-col xl:flex-row pb-20 pt-16'>
                    <div className='flex-[1] flex flex-col sm:flex-row gap-[20px] -ml-1 sm:-ml-0'>
                    <div className='flex-[1] flex justify-center items-center flex-wrap gap-x-10 sm:gap-x-0 sm:flex-col'>
                        <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={item?.img} alt={item?.title} onClick={(e) => setSelectedImg("img")} />
                        <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={item?.img2} alt={item?.title} onClick={(e) => setSelectedImg("img2")} />
                        {item?.img3 ? <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={item?.img3} alt={item?.itle} onClick={(e) => setSelectedImg("img3")} /> : ""}
                        {item?.img4 ? <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={item?.img4} alt={item?.title} onClick={(e) => setSelectedImg("img4")} /> : ""}
                        {item?.img5 ? <img className='w-[100%] max-w-[120px] min-w-[120px] h-[120px] object-cover cursor-pointer mb-[10px] hover:brightness-90' src={item?.img5} alt={item?.title} onClick={(e) => setSelectedImg("img5")} /> : ""}
                    </div>
                    <div className='flex-[5] flex items-center justify-center'>
                        <div className='relative'>
                        {item?.[selectedImg] && (
                                <img onClick={() => handleImageClick(item?.[selectedImg])} className='w-[100%] max-w-[280px] min-w-[280px] sm:max-w-[800px] sm:min-w-[481px] bg-cover mb-2 hover:brightness-75 cursor-pointer' src={item?.[selectedImg]} alt={item?.title} />
                        )}
                        </div>
                    </div>

                        {expandedImage && (
                        <>
                            <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50' onClick={handleCloseImage}>
                            <img src={expandedImage} alt="" className='max-w-[400px] max-h-[400px] md:max-w-[780px] md:max-h-[780px] xl:max-w-[1200px] lg:max-h-[1200px] z-[51] cursor-pointer' />
                            </div>
                            <button onClick={handleCloseImage} className='fixed top-4 right-4 bg-white hover:bg-white/90 w-10 h-10 text-black rounded-full font-bold p-2 z-[52]'>
                                X
                            </button>
                        </>
                        )}

                    </div>

                <div className='flex-[1] flex flex-col gap-[30px]'>
                    <h1 className='text-4xl font-bold -mt-2'>{item?.title}</h1>
                    <div className='flex gap-x-4 items-center'>
                    {item?.oldPrice ? <span className='text-gray-400 text-[1.2rem] line-through'>R${item?.oldPrice?.toFixed(2).replace('.', ',')}</span> : "" }
                    <span className='text-[#7b61ff] font-bold text-[1.8rem]'>R${item?.price?.toFixed(2).replace('.', ',')}</span>
                    </div>
                    <p className='text-[16px] font-[300] text-justify bg-[#1f1f1f] p-3'>{item?.desc}</p>
                    
                    <button onClick={() => {if (cart.isItemAdded) {
                        cart.removeFromCart(product)
                        toast.success("Jogo removido do carrinho com sucesso!", {autoClose: 3000})
                    } else {
                        cart.addToCart(product)
                        toast.success("Jogo adicionado ao carrinho!", {autoClose: 3000})
                    }}} className={`w-[250px] p-[10px] flex items-center justify-center cursor-pointer gap-[10px] border-0 font-[500] ${cart.isItemAdded ? "bg-red-600 hover:bg-red-600/80" : "bg-[#7b61ff] hover:bg-[#7b61ff]/80"}`}>
                        <AddShoppingCart /> {cart.isItemAdded ? "Remover do carrinho" : "Adicionar ao Carrinho"}
                    </button>

                    <div onClick={() => {if (wishlist.isItemAdded) {
                        wishlist.removeFromWishList(product)
                        toast.success("Jogo removido da lista de desejos com sucesso!", {autoClose: 3000})
                    } else {
                        wishlist.addToWishList(product)
                        toast.success("Jogo adicionado à lista de desejos!", {autoClose: 3000})
                    }}} className='flex items-center gap-2 font-[400] text-[16px] text-[#7b61ff]'>
                        {wishlist.isItemAdded ? <Favorite className='cursor-pointer hover:text-[#7b61ff]/60' /> : <FavoriteBorder className='cursor-pointer hover:text-[#7b61ff]/60' />}Lista de desejos
                    </div>

                    <div className='bg-[#1f1f1f] flex flex-col gap-[10px] text-gray-200 font-size[14px] p-3'>
                        <div className='flex gap-1'>
                        <span>Distribuidora(s):</span>
                            <div className='flex gap-1'>
                                {item?.publisher.map((publisher, index) => (
                                <span
                                    key={index}
                                    className='text-[#7b61ff] hover:text-white cursor-pointer'
                                >
                                    {publisher}
                                </span>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-1'>
                        <span>Modo(s) de jogo:</span>
                            <div className='flex gap-1'>
                                {item?.gameMode.map((gameMode, index) => (
                                <span
                                    key={index}
                                    className='text-[#7b61ff] hover:text-white cursor-pointer'
                                >
                                    {gameMode}
                                </span>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col sm:flex-row gap-1'>
                        <span>Gênero(s):</span>
                            <div className='flex gap-1'>
                                {item?.genres.map((genre, index) => (
                                <span
                                    key={index}
                                    className='text-[#7b61ff] hover:text-white cursor-pointer'
                                >
                                    {genre}
                                </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            ))}

            <SimilarProducts />
        </MainLayout>
    </>
  )
}

export default Product