"use client"

import React, { useState } from 'react'

const TextInputCpf = ({string, placeholder, onChange, error}) => {
  return (
    <div>
        <input 
            placeholder={placeholder}
            className='w-full bg-[#1f1f1f] text-white border text-sm p-3 rounded-lg placeholder:gray-500 focus:outline-none outline-none'
            value={string || ""}
            onChange={onChange}
            type="text"
            autoComplete='off'
            maxLength="14"
        />
        <div className='text-red-500 text-[14px] font-semibold'>
            {error ? (error) : null}
        </div>
    </div>
  )
}

export default TextInputCpf