import React from 'react'

const StreaksOverview = () => {
    const mockStreaks = [
        { habit: "Meditation", streak: 7 },
        { habit: "Exercise", streak: 3 },
        { habit: "Read", streak: 5 },
      ];
  return (
    <div className="col-span-1 rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Streaks Overview</h2>
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
