import React from 'react'

const LeaderboardSnapshot = () => {
    const mockLeaderboard = [
        { name: "Dheeraj", points: 120 },
        { name: "Aman", points: 110 },
        { name: "Laksh", points: 98 },
        { name: "Nishant", points: 96 },
        { name: "Arbaaz", points: 92 },
        { name: "Md Anas", points: 91 },
        { name: "Imtiyaz", points: 83 },
        { name: "Kapil", points: 78 },
        { name: "Jayesh", points: 71 },
      ];
  return (
    <div className="col-span-1 rounded-xl border-[1px] border-neutral-700 bg-[#1b1b1b] shadow p-6 flex flex-col">
            <div className='mb-4'>
              <h2 className="text-xl font-semibold text-gray-300">Leaderboard</h2>
              <p className='text-sm text-neutral-500'>See where you stand today</p>
            </div>
            <ol className="space-y-2">
              {mockLeaderboard.map((user, idx) => (
                <li
                  key={idx}
                  className={`flex items-center justify-between px-2 py-1 rounded ${
                    idx === 0
                      ? "bg-yellow-100 font-bold"
                      : idx === 1
                      ? "bg-blue-100 font-semibold"
                      : "bg-gray-100"
                  }`}
                >
                  <span>
                    {idx === 0 && "🥇 "}
                    {idx === 1 && "🥈 "}
                    {idx === 2 && "🥉 "}
                    {user.name}
                  </span>
                  <span className="text-gray-700">{user.points} pts</span>
                </li>
              ))}
            </ol>
          </div>
  )
}

export default LeaderboardSnapshot
