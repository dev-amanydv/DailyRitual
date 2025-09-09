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
    <div className="col-span-1 rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Weekly Progress</h2>
            <div className="flex items-end space-x-2 h-40">
              {mockWeeklyData.map((dayData, idx) => (
                <AnimatedBar key={idx} completion={dayData.completion} day={dayData.day} />
              ))}
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
      <div className="flex flex-col items-center">
        <div
          ref={barRef}
          className="w-6 h-32 rounded-md overflow-hidden flex flex-col justify-end"
        >
          <div
            className="bg-blue-500 w-full transition-all"
            style={{
              height: `${height}%`,
              transition: "height 2s cubic-bezier(0.4,0,0.2,1)",
            }}
          />
        </div>
        <span className="text-xs text-gray-700 mt-1">{day}</span>
      </div>
    );
  }
