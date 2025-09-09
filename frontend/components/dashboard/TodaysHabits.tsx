import React from 'react'

const TodaysHabits = () => {

    const mockHabits = [
        { name: "Morning Meditation", status: "done" },
        { name: "Drink Water", status: "done" },
        { name: "Read 10 Pages", status: "pending" },
        { name: "Exercise", status: "pending" },
    ];

  return (
    <div className="col-span-2 border-[1px] border-neutral-800 bg-[#191919] rounded-xl shadow p-5 flex flex-col">
            <div className='mb-4'>
              <h2 className="text-xl font-semibold text-gray-300">Today's Habits</h2>
              <p className='text-sm text-neutral-500'>Track your daily progress</p>
            </div>          
            <ul className="flex flex-col gap-2">
              {mockHabits.map((habit, idx) => (
                <li key={idx} className="flex border-[1px] border-neutral-800 bg-neutral-900 text-sm hover:bg-[#4a4a4a] px-3 rounded-sm items-center justify-between">
                  <span className="font-medium text-gray-300">{habit.name}</span>
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
