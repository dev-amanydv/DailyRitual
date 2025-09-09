import React from 'react'

const WelcomeCard = () => {

    const userName = "Aman";
    const motivationalText = "Keep up the great work! Every day counts.";

  return (
    <div className="mb-8 flex items-center gap-5 max-w-xl px-4 py-4 rounded-3xl bg-neutral-800">
      <div className='size-17 bg-neutral-900 rounded-full'>

      </div>
      <div>
        <h1 className="text-2xl font-bold">Welcome back, {userName} 👋</h1>
        <p className="text-lg text-neutral-400 mt-1">{motivationalText}</p>
      </div>    
    </div>
  )
}

export default WelcomeCard
