
import React, { useEffect, useState } from 'react'
import Card from './Card';

import { BiLoader } from "react-icons/bi"

const SimilarProducts = ({ currentProductGenres, currentProductId }) => {
    const [products, setProducts] = useState([]);

    const getRandomProducts = async () => {
        try {
            const res = await fetch("/api/produtos/random");
            const result = await res.json();

            if (result) {

                const similarProducts = result.filter(
                    (product) =>
                      currentProductGenres.some((genre) => product.genres.includes(genre)) &&
                      product.id !== currentProductId
                );

                setProducts(similarProducts);
                return
            }

            setProducts([]);
        } catch (error) {
            console.log(error);
            alert(error)
        }
    }

    useEffect(() => {
        getRandomProducts()
    }, [])

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
        <div className='pb-8 pt-2'>
            <div className=''>
                <div className='font-bold flex items-center justify-center text-3xl py-2 mt-4 mb-4'>
                    Produtos Similares
                </div>
                {products.length > 0 ?
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 justify-items-center">
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