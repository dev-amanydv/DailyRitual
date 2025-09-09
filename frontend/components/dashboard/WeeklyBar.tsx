"use client"
import React, { useEffect, useRef, useState } from 'react'

const WeeklyBar = () => {

    const mockWeeklyData = [
        { day: "M", completion: 80 },
        { day: "T", completion: 60 },
        { day: "W", completion: 90 },
        { day: "T", completion: 50 },
        { day: "F", completion: 70 },
        { day: "S", completion: 40 },
        { day: "S", completion: 85 },
      ];

  return (
    <div className="col-span-2 w-full border-[1px] border-neutral-800 bg-[#191919] rounded-xl shadow p-6 flex flex-col">
            <div className='mb-4'>
              <h2 className="text-xl font-semibold text-gray-300">Weekly Activities</h2>
              <p className='text-sm text-neutral-500'>Check your rank</p>
            </div>            
            <div>
              <div></div>
              <div className="flex mx-auto items-end space-x-2 h-70">
                {mockWeeklyData.map((dayData, idx) => (
                  <AnimatedBar key={idx} completion={dayData.completion} day={dayData.day} />
                ))}
              </div>
              <div></div>
            </div>
            
          </div>
  )
}

export default WeeklyBar;

function AnimatedBar({ completion, day }: { completion: number; day: string }) {
    const [isVisible, setIsVisible] = useState(false);
    const [height, setHeight] = useState(0);
    const barRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
            }
          });
        },
        {
          threshold: 0.2,
        }
      );
      if (barRef.current) {
        observer.observe(barRef.current);
      }
      return () => {
        if (barRef.current) observer.unobserve(barRef.current);
      };
    }, []);
  
    useEffect(() => {
      if (isVisible) {
        setTimeout(() => setHeight(completion), 100);
      } else {
        setHeight(0);
      }
    }, [isVisible, completion]);
  
    return (
      <div className="flex mx-auto flex-col items-center">
        <div
          ref={barRef}
          className="w-15 h-60 rounded-md overflow-hidden flex flex-col justify-end"
        >
          <div
            className="bg-blue-500 w-full transition-all"
            style={{
              height: `${height}%`,
              transition: "height 2s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
        <span className="text-xs text-gray-400 mt-1">{day}</span>
      </div>
    );
  }
