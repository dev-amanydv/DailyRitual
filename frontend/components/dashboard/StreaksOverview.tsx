import React from 'react'

const StreaksOverview = () => {
    const mockStreaks = [
        { habit: "Meditation", streak: 7 },
        { habit: "Exercise", streak: 3 },
        { habit: "Read", streak: 5 },
      ];
  return (
    <div className="col-span-1 border-[1px] border-neutral-800 bg-[#191919] rounded-xl shadow p-6 flex flex-col">
            <div className='mb-4'>
              <h2 className="text-xl font-semibold text-gray-300">Streaks Overview</h2>
              <p className='text-sm text-neutral-500'>Track your ongoing streaks</p>
            </div>            
            <ul className="space-y-3">
              {mockStreaks.map((streak, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span className="text-gray-800">{streak.habit}</span>
                  <span className="flex items-center text-blue-600 font-bold">
                    🔥 <span className="ml-1">{streak.streak} days</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default StreaksOverview
