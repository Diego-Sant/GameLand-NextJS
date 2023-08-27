"use client"

import MainLayout from '@/app/layouts/MainLayout';
import Card from '@/components/Card';
import React, { useState } from 'react'

const Products = () => {
  const [maxPrice, setMaxPrice] = useState(400);
  const [selectedSubCats, setSelectedSubCats] = useState([])

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => item !== value)
  )}

  const handleMaxPriceChange = (e) => {
    setMaxPrice(e.target.value);
  };

const products = [
    {
        id: 1, 
        title: "The Expanse: A Telltale Series",
        desc: "In the near future on the outskirts of the asteroid belt, a bloody mutiny breaks loose on the Artemis. You take the role of XO Camina Drummer, where your choices determine the fate of the ship. What will you do with the truth, Bosmang?",
        isNew: true,
        img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co6j63.png",
        img2: "https://images.igdb.com/igdb/image/upload/t_original/scf13g.jpg",
        price: 100.00
    },
    {
        id: 2, 
        title: "The Legend of Zelda: Tears of the Kingdom",
        desc: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.",
        isNew: false,
        img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
        img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
        oldPrice: 200.00,
        price: 170.00
    },
]

const gameModes = [
    {
        id: 1, 
        gameMode: "Um jogador"
    },
    {
        id: 2, 
        gameMode: "Multijogador"
    },
    {
        id: 3, 
        gameMode: "Online"
    },
    {
        id: 4, 
        gameMode: "MMO"
    },
]

const poster = [
    {
        id: 1,
        img: "https://us.v-cdn.net/6036147/uploads/L3THAFQEF5VA/a-preview-of-remnant-2-281-29.jpg",
        title: "Remnant II"
    }
]

const genres = [
    {
        id: 1, 
        genre: "Ação"
    },
    {
        id: 2, 
        genre: "Aventura"
    },
    {
        id: 3, 
        genre: "RPG/RPG por Turnos"
    },
    {
        id: 4, 
        genre: "Agricultura e Crafting"
    },
    {
        id: 5, 
        genre: "Arcade/Plataforma"
    },
    {
        id: 6, 
        genre: "Cartas/Tabuleiro"
    },
    {
        id: 7, 
        genre: "Corrida"
    },
    {
        id: 8, 
        genre: "Estratégia"
    },
]

  return (
    <MainLayout>
        <div className='text-white flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-y-0 bg-[#121212] py-[30px] px-[50px]'>
        <div className='flex-[1] mr-12 -ml-6'>
        <h2 className='font-bold mb-2'>Categorias</h2>
            <div className='mb-4 flex flex-row w-[350px] sm:w-full justify-between sm:flex-col xl:flex-row'>
                <div>
                {genres?.slice(0, 4).map((item) => (
                    <div key={item.id}>
                        <input type="checkbox" className='outline-none mr-1' id={item.id} value={item.id} onChange={handleChange} />
                        <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.genre}</label>
                    </div>
                ))}
                </div>
                <div>
                {genres?.slice(4, 8).map((item) => (
                    <div key={item.id} className=''>
                    <input type="checkbox" className='outline-none mr-1' id={item.id} value={item.id} onChange={handleChange} />
                    <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.genre}</label>
                    </div>))}
                </div>
            </div>
            <div className='mb-4'>
            {gameModes && gameModes.length > 0 && (
                <h2 className='font-bold mb-2'>Modos de jogador</h2>
            )}
            {gameModes?.map((item) => (
                <div key={item.id}>
                    <input type="checkbox" className='outline-none mr-1' id={item.id} value={item.id} onChange={handleChange} />
                    <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.gameMode}</label>
                </div>
            ))}
            </div>
            <div className='mb-4'>
            <h2 className='font-bold mb-2'>Filtrar por preço</h2>
            <div className='flex flex-col sm:flex-row sm:items-center'>
                <span>R$0</span>
                <input type="range" min={0} max={400} className='rangeInput outline-none' onMouseUp={handleMaxPriceChange} />
                <span>R${maxPrice}</span>
            </div>
            </div>
        </div>
            <div className='flex-[3]'>
                {poster.map((item) => (
                    <div className='md:flex justify-center items-center hidden'><img className='bg-cover mb-[50px] xl:max-w-[880px] xl:min-w-[880px] 2xl:max-w-[1100px] 2xl:min-w-[1100px] 3xl:max-w-[1300px] 3xl:min-w-[1300px]' src={item.img} alt={item.title} /></div>
                ))}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                    {products.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Products