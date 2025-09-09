"use client"
import React, { useState } from 'react'

const ProgressBarToday = () => {
  const weeklyCompletion = 78;
  const date = "9 Sept, 2025"
  const [progress, setProgress] = useState(weeklyCompletion);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleMouseEnter = () => {
    setIsAnimating(true);
    setProgress(0);
    let start = 0;
    const step = () => {
      if (!isAnimating) return;
      start += 2;
      if (start <= weeklyCompletion) {
        setProgress(start);
        requestAnimationFrame(step);
      } else {
        setProgress(weeklyCompletion);
        setIsAnimating(false);
      }
    };
    requestAnimationFrame(step);
  };

  const handleMouseLeave = () => {
    setIsAnimating(false);
    setProgress(weeklyCompletion);
  };

  return (
    <div className="col-span-1 border-[1px] border-neutral-800 bg-[#191919] rounded-xl shadow p-6 flex flex-col" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className='mb-4'>
              <h2 className="text-xl font-semibold text-gray-300">Today's Progress</h2>
              <p className='text-sm text-neutral-500'>See how you're doing today</p>
            </div>             
            <div className="mb-2 flex items-center justify-between">
              <span className="text-gray-400">{date}</span>
              <span className="text-gray-400 font-bold">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full duration-700 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">You're on track! Complete more habits to boost your progress.</p>
          </div>
  )
}

export default ProgressBarToday
