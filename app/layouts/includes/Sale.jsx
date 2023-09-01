"use client"

import Card from '@/components/Card';
import isLoading from '@/hooks/loading';
import { NewReleases } from '@mui/icons-material';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Sale = ({ type }) => {
    const [maxItemsToShow, setMaxItemsToShow] = useState(10);
    const [windowWidth, setWindowWidth] = useState(false);

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

  return (
    <div className='bg-[#121212]'>
        <div className='px-[100px] py-[100px]'>
            <div className='flex font-bold text-xl sm:text-2xl lg:text-4xl items-center justify-center'>
                <h1 className='mb-10 text-white'>{type}</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center">
                {products && shuffleArray(products).filter((item) => item.id >= 11 && item.id <= 20)
                .slice(0, maxItemsToShow).map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
        </div>
    </div>
  )
}

export default Sale