import Link from 'next/link'
import React from 'react'
import { IoMdHelpCircle } from 'react-icons/io'
import { MdCall } from 'react-icons/md'

const Support = () => {
  return (
    <div className=''>
      <h1 className='dark:text-[#797979] px-2 text-[12px]'>Support</h1>
      <div className='flex py-1 dark:text-[#c5c5c5] px-1  flex-col'>

        <Link href={'/help'}>
          <div className='py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full hover:dark:bg-[#242424] px-3'>
            <div className=' text-[#c5c5c5] group-hover:text-white'><IoMdHelpCircle size={18} /></div>
            <div className=''>Help</div>
          </div>
        </Link>

        <Link href={'/contactus'}>
          <div className='py-1 group flex items-center gap-4 rounded-md cursor-pointer w-full hover:dark:bg-[#242424] px-3'>
            <div className=' text-[#c5c5c5] group-hover:text-white'><MdCall size={18} /></div>
            <div className=''>Contact Us</div>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default Support
