"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaGear } from 'react-icons/fa6';
import { MdEventRepeat, MdSpaceDashboard } from 'react-icons/md';
import { RiAccountCircleFill } from 'react-icons/ri';

const Overview = () => {
  
  const path = usePathname();

  return (
    <div className=''>
      <h1 className='dark:text-[#797979] px-2 text-[12px]'>Overview</h1>
      <div className='flex font-medium py-1 dark:text-[#c5c5c5] px-1  flex-col'>

        <Link href={'/dashboard'} >
          <div className={`py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full ${path === '/dashboard' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"}  px-3`}>
            <div className={`${path === '/dashboard' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"} group-hover:text-white`}>
              <MdSpaceDashboard size={18} />
            </div>
            <div className=''>Dashboard</div>
          </div>
        </Link>

        <Link href={'/habits'}>
          <div className={`py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full ${path === '/habits' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"}  px-3`}>
            <div className={`${path === '/habits' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"} group-hover:text-white`}>
              <MdEventRepeat size={18} />
            </div>
            <div className=''>Habits</div>
          </div>
        </Link>

        <Link href={'/profile'}>
          <div className={`py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full ${path === '/profile' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"}  px-3`}>
            <div className={`${path === '/profile' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"} group-hover:text-white`}>
              <RiAccountCircleFill size={20} />
            </div>
            <div className=''>Profile</div>
          </div>
        </Link>

        <Link  href={'/settings'}>
          <div className={`py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full ${path === '/settings' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"}  px-3`}>
            <div className={`${path === '/settings' ? "bg-[#484848] text-white" : "hover:dark:bg-[#242424]"} group-hover:text-white`}>
              <FaGear size={18} />
            </div>
            <div className=''>Settings</div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Overview;
