"use client"

import Card from '@/components/Card';
import { NewReleases } from '@mui/icons-material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Recomendations = ({ type }) => {
    const [maxItemsToShow, setMaxItemsToShow] = useState(10);
    const [windowWidth, setWindowWidth] = useState(false);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };

        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    useEffect(() => {
        if (windowWidth <= 600) {
          setMaxItemsToShow(5);
        } else {
          setMaxItemsToShow(10);
        }
    }, [windowWidth]);

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

  return (
    <div className='bg-[#121212]'>
        <div className='px-[100px] py-[100px]'>
            <div className='flex font-bold text-xl sm:text-2xl lg:text-4xl items-center justify-center'>
                <h1 className='mb-10 text-white'>{type}</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                {products && shuffleArray(products).slice(0, maxItemsToShow).map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Recomendations