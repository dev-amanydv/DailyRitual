import React from 'react'
import Overview from './Overview'
import Social from './Social'
import Support from './Support'

const Sidebar = () => {
  return (
    <div className='flex text-sm px-2 py-5 gap-1 flex-col '>
      <Overview />
      <Social />
      <Support />
    </div>
  )
}

export default Sidebar
