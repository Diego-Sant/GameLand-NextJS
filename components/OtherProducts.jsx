
import React, { useEffect, useState } from 'react'
import Card from './Card';

import { BiLoader } from "react-icons/bi"

const OtherProducts = () => {
    const [products, setProducts] = useState([]);

    const getRandomProducts = async () => {
        try {
            const res = await fetch("/api/produtos/randomcartwishlist");
            const result = await res.json();

            if (result) {
                console.log('Dados originais:', result);
                setProducts(shuffleArray(result));
                return;
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
    
          // Adicione logs para depurar
          console.log(`currentIndex: ${currentIndex}, randomIndex: ${randomIndex}`);
          
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ];
        }
    
        // Adicione um log para verificar o array após o embaralhamento
        console.log('Array embaralhado:', array);
    
        return array;
    };

  return (
    <div className='bg-[#121212] text-white'>
        <div className='pb-8 pt-2'>
            <div className=''>
                <div className='font-bold flex items-center justify-center text-3xl py-2 mt-4 mb-4'>
                    Mais Jogos
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

export default OtherProducts