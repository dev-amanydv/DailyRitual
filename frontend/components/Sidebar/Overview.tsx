import Link from 'next/link';
import React from 'react'
import { FaGear } from 'react-icons/fa6';
import { MdEventRepeat, MdSpaceDashboard } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';

const Overview = () => {
  return (
    <div className=''>
      <h1 className='dark:text-[#797979] px-2 text-sm'>Overview</h1>
      <div className='flex py-1 dark:text-[#c5c5c5] px-1  flex-col'>

        <Link href={'/dashboard'} >
          <div className='py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full hover:dark:bg-[#242424] px-3'>
            <div className=' text-[#c5c5c5] group-hover:text-white'><MdSpaceDashboard size={18} /></div>
            <div className=''>Dashboard</div>
          </div>
        </Link>

        <Link href={'/habits'}>
          <div className='py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full hover:dark:bg-[#242424] px-3'>
            <div className=' text-[#c5c5c5] group-hover:text-white'><MdEventRepeat size={18} /></div>
            <div className=''>Habits</div>
          </div>
        </Link>

        <Link href={'/profile'}>
          <div className='py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full hover:dark:bg-[#242424] px-3'>
            <div className=' text-[#c5c5c5] group-hover:text-white'><RiAccountCircleFill size={20} /></div>
            <div className=''>Profile</div>
          </div>
        </Link>
        
        <Link  href={'/settings'}>
          <div className='py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full hover:dark:bg-[#242424] px-3'>
            <div className=' text-[#c5c5c5] group-hover:text-white'><FaGear size={18} /></div>
            <div className=''>Settings</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Overview;
