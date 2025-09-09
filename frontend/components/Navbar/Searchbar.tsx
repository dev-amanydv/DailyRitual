"use client"
import React, { useEffect, useState, useRef } from 'react'

const mockData = ["Drink water", "Read a book", "Meditate", "Workout", "Call a friend", "Finish project"];

const Searchbar = () => {
    const placeholders = [
        "habits to mark as done...",
        "friends to see their activity..."
    ];

    const [index, setIndex] = useState(0);
    const [placeholder, setPlaceholder] = useState(placeholders[0]);
    const [isOpen, setIsOpen] = useState(false);
    const popupRef = useRef<HTMLDivElement>(null);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => (prev + 1) % placeholders.length )
        }, 3000);
        return () => clearInterval(interval)
    }, [placeholders.length]);

    useEffect(() => {
        setPlaceholder(placeholders[index])
    }, [index])

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.metaKey && event.key.toLowerCase() === "f") {
                event.preventDefault();
                setIsOpen(true);
            }
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const completePlaceholder = "Search for " + placeholder;

    const filteredResults = mockData.filter(item =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="relative">
        <input
          type='text'
          placeholder={completePlaceholder}
          className='w-full placeholder:text-sm px-2 py-1.5 pr-10 cursor-pointer rounded-lg transition-all duration-500 bg-[#202020] border-[1px] border-[#5c5c5c] focus:outline-none'
        />
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-sm pointer-events-none">⌘ + F</span>
      </div>
      {isOpen && (
        <div className="fixed h-screen inset-0 bg-black/70 backdrop-blur-2xl flex items-center justify-center z-50">
          <div ref={popupRef} className="bg-[#202020] fixed top-1/4 rounded-lg p-4 w-xl flex flex-col max-h-[80vh]">
            <div className="mb-2">
              <div className="relative">
                <input
                  type="text"
                  autoFocus
                  placeholder={completePlaceholder}
                  className="w-full placeholder:text-sm px-2 py-1.5 pr-12 rounded-lg bg-[#202020] border-[1px] border-[#5c5c5c] focus:outline-none"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none">
                  Esc
                </span>
              </div>
            </div>
            <div className="max-h-60 overflow-y-auto border-t border-gray-700 pt-2">
              {filteredResults.map((result, idx) => (
                <div key={idx} className="px-2 py-1 hover:bg-gray-700 rounded cursor-pointer text-sm text-white">
                  {result}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Searchbar;
