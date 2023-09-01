import React from 'react'
import { BiTrash } from 'react-icons/bi'

const CartCheckoutItem = ({ products }) => {
  return (
    <div className='bg-[#1f1f1f] text-white'>
        <div className='relative flex flex-col rounded-lg justify-start my-2 border w-full p-6'>
            <div className='flex-col'>
                <div className='flex flex-col md:flex-row'>
                    <img src={products.img} alt={products.title} className='rounded-md w-[150px] max-w-[150px] min-w-[150px] mb-4 md:mb-0' />
                    <div className='flex-col pl-2 w-full'>
                        <div className='flex justify-between w-full mb-5 flex-col sm:flex-row'>
                            <div className='flex justify-between font-semibold text-2xl mb-2 sm:mb-0'>
                                {products.title}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex items-center gap-10 mb-4 relative'>
                    {products?.oldPrice ? <div className='text-xl text-gray-300 line-through absolute right-36 flex items-center justify-center'>
                        R${(products?.oldPrice / 100).toFixed(2).replace(".", ",")}
                    </div> : ""}
                    <div className='font-bold text-3xl text-[#8900ff] absolute right-0 flex items-center justify-center gap-[10px] border-0 rounded-md'>
                        R${(products?.price / 100).toFixed(2).replace(".", ",")}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartCheckoutItem