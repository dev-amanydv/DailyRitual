import React from 'react'

const LeaderboardSnapshot = () => {
    const mockLeaderboard = [
        { name: "Alice", points: 120 },
        { name: "You", points: 110 },
        { name: "Bob", points: 98 },
      ];
  return (
    <div className="col-span-1 rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Leaderboard Snapshot</h2>
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
