
import React from 'react'
import Card from './Card';

import { BiLoader } from "react-icons/bi"

const SimilarProducts = () => {

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
        {
            id: 3, 
            title: "The Legend of Zelda: Tears of the Kingdom",
            desc: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.",
            isNew: false,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
            oldPrice: 200.00,
            price: 170.00
        },
        {
            id: 4, 
            title: "The Legend of Zelda: Tears of the Kingdom",
            desc: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.",
            isNew: false,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
            oldPrice: 200.00,
            price: 170.00
        },
        {
            id: 5, 
            title: "The Legend of Zelda: Tears of the Kingdom",
            desc: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.",
            isNew: false,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
            oldPrice: 200.00,
            price: 170.00
        },
        {
            id: 6, 
            title: "The Legend of Zelda: Tears of the Kingdom",
            desc: "The Legend of Zelda: Tears of the Kingdom is the sequel to The Legend of Zelda: Breath of the Wild. The setting for Link’s adventure has been expanded to include the skies above the vast lands of Hyrule.",
            isNew: false,
            img: "https://images.igdb.com/igdb/image/upload/t_cover_big/co5vmg.png",
            img2: "https://images.igdb.com/igdb/image/upload/t_original/scaoj8.jpg",
            oldPrice: 200.00,
            price: 170.00
        },
    ]

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

  return (
    <div className='bg-[#121212] text-white'>
        <div className='py-1'>
            <div className=''>
                <div className='font-bold flex items-center justify-center text-3xl py-2 mt-4 mb-4'>
                    Produtos Similares
                </div>
                {products.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                    {products && shuffleArray(products).map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div> 
                : 
                <div className='flex items-center justify-center'>
                    <div className='flex items-center justify-center gap-4 font-semibold'>
                        <BiLoader size={30} className='text-white animate-spin' />
                        Carregando produtos...
                    </div>
                </div>
                }
            </div>
        </div>
    </div>
  )
}

export default SimilarProducts