import React from 'react'

const TodaysHabits = () => {

    const mockHabits = [
        { name: "Morning Meditation", status: "done" },
        { name: "Drink Water", status: "done" },
        { name: "Read 10 Pages", status: "pending" },
        { name: "Exercise", status: "pending" },
    ];

  return (
    <div className="col-span-1 rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Today's Habits</h2>
            <ul className="space-y-3">
              {mockHabits.map((habit, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span className="font-medium text-gray-800">{habit.name}</span>
                  {habit.status === "done" ? (
                    <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">Done</span>
                  ) : (
                    <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">Pending</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
  )
}

export default TodaysHabits
