import React from 'react'

const WelcomeCard = () => {

    const userName = "Alex";
    const motivationalText = "Keep up the great work! Every day counts.";

  return (
    <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back, {userName} 👋</h1>
          <p className="text-lg text-gray-600 mt-1">{motivationalText}</p>
    </div>
  )
}

export default WelcomeCard
