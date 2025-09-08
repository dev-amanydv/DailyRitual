import React from 'react'
import { HiChevronUpDown } from 'react-icons/hi2'

const ProfileBox = () => {
  return (
    <div className='items-center cursor-pointer gap-2 flex px-2 py-1'>
      <div className='size-7 rounded-full bg-gray-500'></div>
      <div className='flex items-center'>
        <div className='flex flex-col'>
          <h1 className=''>Aman Yadav</h1>
          <p className='text-[10px] relative text-[#a7a7a7] -top-1'>ay.work07@gmail.com</p>
        </div>
        <div>
        <HiChevronUpDown size={20} />
        </div>
      </div>
      
    </div>
  )
}

export default ProfileBox
