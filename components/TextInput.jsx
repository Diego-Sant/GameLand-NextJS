"use client"

import React from 'react'

const TextInput = ({string, placeholder, error, onUpdate}) => {
  return (
    <div>
        <input 
            placeholder={placeholder}
            className='w-full bg-[#1f1f1f] text-white border text-sm p-3 rounded-lg placeholder:gray-500 focus:outline-none outline-none'
            value={string || ""}
            onChange={(event) => onUpdate(event.target.value)}
            type='text'
            autoComplete='off'
        />
        <div className='text-red-500 text-[14px] font-semibold'>
            {error ? (error) : null}
        </div>
    </div>
  )
}

export default TextInput