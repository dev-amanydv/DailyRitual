"use client"
import React, { useEffect, useState } from 'react'

const Searchbar = () => {
    const placeholders = [
        "habits to mark as done...",
        "friends to see their activity..."
    ];

    const [index, setIndex] = useState(0);
    const [placeholder, setPlaceholder] = useState(placeholders[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % placeholders.length )
        }, 3000);
        return () => clearInterval(interval)
    }, [placeholders.length]);

    useEffect(() => {
        setPlaceholder(placeholders[index])
    }, [index])
    const completePlaceholder = "Search for " + placeholder;

  return (
    <div className="relative">
      <input
        type='text'
        placeholder={completePlaceholder}
        className='w-full placeholder:text-sm px-2 py-1.5 pr-10 cursor-pointer rounded-lg transition-all duration-500 bg-[#202020] border-[1px] border-[#5c5c5c] focus:outline-none'
      />
      <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">⌘ + F</span>
    </div>
  )
}

export default Searchbar;
