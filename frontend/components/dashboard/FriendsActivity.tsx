import React from "react";

const FriendsActivity = () => {
  const mockFriendsActivity = [
    { name: "Alice", action: "completed 'Exercise'", time: "5m ago" },
    { name: "Bob", action: "started 'Read 10 Pages'", time: "10m ago" },
    { name: "Charlie", action: "kept a 10-day streak!", time: "1h ago" },
  ];
  return (
    <div className="col-span-1 rounded-xl shadow border-[1px] border-neutral-700 bg-[#1b1b1b] p-6 flex flex-col">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-gray-300">
          Friends' Activity
        </h2>
        <p className="text-sm text-neutral-500">See what your friends are up to</p>
      </div>{" "}
      <ul className="space-y-3">
        {mockFriendsActivity.map((activity, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span>
              <span className="font-semibold text-blue-700">
                {activity.name}
              </span>{" "}
              <span className="text-gray-700">{activity.action}</span>
            </span>
            <span className="text-xs text-gray-500">{activity.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendsActivity;
