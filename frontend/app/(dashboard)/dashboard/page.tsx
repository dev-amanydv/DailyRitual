import FriendsActivity from "@/components/dashboard/FriendsActivity";
import LeaderboardSnapshot from "@/components/dashboard/LeaderboardSnapshot";
import ProgressBarToday from "@/components/dashboard/ProgressBarToday";
import StreaksOverview from "@/components/dashboard/StreaksOverview";
import TodaysHabits from "@/components/dashboard/TodaysHabits";
import WeeklyBar from "@/components/dashboard/WeeklyBar";
import React from "react";



export default function Dashboard() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <WeeklyBar />
          <StreaksOverview />
          <ProgressBarToday />
          <FriendsActivity />
          <LeaderboardSnapshot />
          <TodaysHabits />
        </div>
      </div>
    </div>
  );
}