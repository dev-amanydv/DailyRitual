import FriendsActivity from "@/components/dashboard/FriendsActivity";
import LeaderboardSnapshot from "@/components/dashboard/LeaderboardSnapshot";
import ProgressBarToday from "@/components/dashboard/ProgressBarToday";
import StreaksOverview from "@/components/dashboard/StreaksOverview";
import TodaysHabits from "@/components/dashboard/TodaysHabits";
import WeeklyBar from "@/components/dashboard/WeeklyBar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import React from "react";



export default function Dashboard() {
  return (
    <div className="min-h-screen p-2">
      <div className="max-w-6xl mx-auto">
        <div className="w-full gap-5 flex">
          <div className="w-3/4">
            <WelcomeCard />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <ProgressBarToday />
              <TodaysHabits />
              <WeeklyBar />
              <StreaksOverview />
            </div>
          </div>
          <div className="w-1/4 flex gap-5 flex-col">
            <LeaderboardSnapshot />
            <FriendsActivity />
          </div>
        </div>
      </div>
    </div>
  );
}