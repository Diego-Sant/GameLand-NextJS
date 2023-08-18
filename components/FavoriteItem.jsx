import React from 'react'
import { BiTrash } from 'react-icons/bi'

const FavoriteItem = ({ products }) => {
  return (
    <div className='bg-[#121212] text-white'>
        <div className='relative flex flex-col sm:flex-row justify-start my-2 ml-2 border w-full p-6'>
            <div className='flex-col'>
                <div className='flex flex-col md:flex-row'>
                    <img src={products.img} alt={products.title} className='rounded-md w-[150px] max-w-[150px] min-w-[150px] mb-4 md:mb-0' />
                    <div className='flex-col pl-2 w-full'>
                        <div className='flex justify-between w-full mb-5 flex-col sm:flex-row'>
                            <div className='flex justify-between font-semibold text-2xl mb-2 sm:mb-0'>
                                {products.title}
                            </div>
                            <div className='font-bold text-3xl text-[#8900ff]'>
                                R${(products.price).toFixed(2).replace(".", ",")}
                            </div>
                        </div>
                        <div>
                            {products.desc}
                        </div>
                    </div>
                </div>
                <div className='mt-4 mb-12 relative'>
                    <button className='p-[10px] bg-red-600 absolute right-0 flex items-center justify-center cursor-pointer disabled:cursor-default hover:bg-red-600/80 gap-[10px] border-0 font-[500] mb-3 rounded-md'>
                        Remover <BiTrash />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoriteItem