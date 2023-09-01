"use client"

import MainLayout from '@/app/layouts/MainLayout';
import Card from '@/components/Card';
import isLoading from '@/hooks/loading';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [maxPrice, setMaxPrice] = useState(40000);

    const [selectedGenres, setSelectedGenres] = useState([]);

    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        isLoading(true);

        const res = await fetch(`/api/produtos`);
        const prods = await res.json();

        setProducts([]);
        setProducts(prods);

        isLoading(false)
    }

    useEffect(() => {
        getProducts()
    }, [])

    const handleChangeGenres = (e) => {
        const value = e.target.value;
        const isChecked = e.target.checked;

        if (isChecked) {
            setSelectedGenres([...selectedGenres, value]);
        } else {
            setSelectedGenres(selectedGenres.filter((item) => item !== value));
        }
    };

    const handleMaxPriceChange = (e) => {
        const value = parseInt(e.target.value);
        setMaxPrice(value);
    };

    const formatPrice = (priceInCents) => {
        const priceInReal = (priceInCents / 100).toFixed(2);
        return `R$ ${priceInReal.replace('.', ',')}`;
    };

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;
    
        while (currentIndex !== 0) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
    
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
    
        return array;
    };

const poster = [
    {
        id: 1,
        img: "https://images.igdb.com/igdb/image/upload/t_original/ar4cx.jpg",
        title: "Minecraft"
    }
]

const genres = [
    {
        id: 1, 
        genre: "Ação"
    },
    {
        id: 2, 
        genre: "Agricultura"
    },
    {
        id: 3, 
        genre: "Arcade"
    },
    {
        id: 4, 
        genre: "Aventura"
    },
    {
        id: 5, 
        genre: "Cartas/Tabuleiro"
    },
    {
        id: 6, 
        genre: "Cidade/Colonização"
    },
    {
        id: 7, 
        genre: "Corrida"
    },
    {
        id: 8, 
        genre: "Esportes"
    },
    {
        id: 9, 
        genre: "Estratégia"
    },
    {
        id: 10, 
        genre: "Ficção Científica"
    },
    {
        id: 11, 
        genre: "Hack & Slash/Beat 'em up"
    },
    {
        id: 12, 
        genre: "Indie"
    },
    {
        id: 13, 
        genre: "Mundo aberto"
    },
    {
        id: 14, 
        genre: "Negócios"
    },
    {
        id: 15, 
        genre: "Plataforma"
    },
    {
        id: 16, 
        genre: "Puzzle"
    },
    {
        id: 17, 
        genre: "RPG"
    },
    {
        id: 18, 
        genre: "RPG por Turnos"
    },
    {
        id: 19, 
        genre: "Sandbox"
    },
    {
        id: 20, 
        genre: "Shooter"
    },
    {
        id: 21, 
        genre: "Shoot 'em up"
    },
    {
        id: 22, 
        genre: "Simulador"
    },
    {
        id: 23, 
        genre: "Sobrevivência"
    },
    {
        id: 24, 
        genre: "Stealth"
    },
    {
        id: 25, 
        genre: "Terror"
    },
    {
        id: 26, 
        genre: "Visual Novel"
    },
]

  return (
    <MainLayout>
        <div className='text-white flex flex-col-reverse sm:flex-row gap-y-10 sm:gap-y-0 bg-[#121212] py-[30px] px-[50px]'>
        <div className='flex-[2] md:flex-[1] mr-12 -ml-6'>
        <h2 className='font-bold mb-2'>Categorias</h2>
            <div className='mb-4 flex flex-row sm:w-full justify-between sm:flex-col xl:flex-row'>
                <div>
                {genres?.slice(0, 13).map((item) => (
                    <div key={item.id}>
                        <input type="checkbox" className='outline-none mr-1' id={item.id} value={item.id} onChange={handleChangeGenres} />
                        <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.genre}</label>
                    </div>
                ))}
                </div>
                <div>
                {genres?.slice(13, 26).map((item) => (
                    <div key={item.id}>
                    <input type="checkbox" className='outline-none mr-1' id={item.id} value={item.id} onChange={handleChangeGenres} />
                    <label className="text-sm sm:text-[1rem]" htmlFor={item.id}>{item.genre}</label>
                    </div>))}
                </div>
            </div>
            <div className='mb-4'>
            <h2 className='font-bold mb-2'>Filtrar por preço</h2>
            <div className='flex flex-col lg:flex-row lg:items-center'>
                <span>R$0</span>
                <input type="range" min={0} max={40000} className='rangeInput outline-none' onMouseUp={handleMaxPriceChange} />
                <span>{formatPrice(maxPrice)}</span>
            </div>
            </div>
        </div>
            <div className='flex-[3]'>
                {poster.map((item) => (
                    <div key={item.id} className='md:flex justify-center items-center hidden'><img className='bg-cover mb-[50px] xl:max-w-[880px] xl:min-w-[880px] 2xl:max-w-[1100px] 2xl:min-w-[1100px] 3xl:max-w-[1300px] 3xl:min-w-[1300px]' src={item.img} alt={item.title} /></div>
                ))}
                <h1 className='flex items-center justify-center mb-5 text-3xl font-bold'>Multijogador</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                    {products && shuffleArray(products)
                    .filter((item) => item.gameMode.includes("Multijogador"))
                    .filter((item) => selectedGenres.length === 0 || selectedGenres.some((genreId) => item.genres.includes(genres.find((genre) => genre.id === parseInt(genreId)).genre)))
                    .filter((item) => item.price <= maxPrice)
                    .map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Products