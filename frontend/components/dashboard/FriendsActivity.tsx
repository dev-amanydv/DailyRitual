import React from 'react'

const FriendsActivity = () => {
    const mockFriendsActivity = [
        { name: "Alice", action: "completed 'Exercise'", time: "5m ago" },
        { name: "Bob", action: "started 'Read 10 Pages'", time: "10m ago" },
        { name: "Charlie", action: "kept a 10-day streak!", time: "1h ago" },
      ];
  return (
    <div className="col-span-1 rounded-xl shadow p-6 flex flex-col">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Friends' Activity</h2>
            <ul className="space-y-3">
              {mockFriendsActivity.map((activity, idx) => (
                <li key={idx} className="flex items-center justify-between">
                  <span>
                    <span className="font-semibold text-blue-700">{activity.name}</span>{" "}
                    <span className="text-gray-700">{activity.action}</span>
                  </span>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </li>
              ))}
            </ul>
          </div>
  )
}

export default FriendsActivity
