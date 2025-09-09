import React from 'react'

const ProgressBarToday = () => {
  const weeklyCompletion = 78;
  return (
    <div className="col-span-1 rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Progress Summary</h2>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-gray-600">This Week</span>
              <span className="text-gray-800 font-bold">{weeklyCompletion}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-500 h-4 rounded-full transition-all"
                style={{ width: `${weeklyCompletion}%` }}
              />
            </div>
            <p className="text-xs text-gray-500 mt-2">You're on track! Complete more habits to boost your progress.</p>
          </div>
  )
}

export default ProgressBarToday
