
import {MdHome} from 'react-icons/md'

import { MdCalendarMonth } from 'react-icons/md'
import { MdPeople} from 'react-icons/md'
import { MdAppRegistration } from 'react-icons/md'
import {MdPersonOutline} from 'react-icons/md'
import { MdSettings } from 'react-icons/md'
import { MdLogout } from 'react-icons/md'
import { MdAdd } from 'react-icons/md'
import React from 'react'

const Sidebar = () => {
  return (
    <div className=' fixed bg-gray-300 h-[1000vh] flex flex-col gap-[30px] pl-[20px] pt-[20px] cursor-pointer lg:w-[150px] md:w-[140px] xxs:w-[80px] sm:w-[80px] sm:gap-[100px] xxs:gap-[120px] md:gap-[50px] xl:w-[200px] xl:text-[20px]'>
   <div className='flex gap-[20px] '><MdHome className='text-gray-600  text-2xl hover:text-[#0d47a1]'/><span className='text-gray-600 hidden md:block lg:block  hover:text-[#0d47a1]'>Dashboard</span></div>
  <div className='flex gap-[20px]'> <MdCalendarMonth className='text-gray-600  text-2xl hover:text-[#0d47a1]'/><span className='text-gray-600 hover:text-[#0d47a1] hidden md:block lg:block'>Income</span></div>
<div className='flex gap-[20px]'><MdAppRegistration className='text-gray-600  text-2xl hover:text-[#0d47a1]'/><span className='text-gray-600  hover:text-[#0d47a1] hidden md:block lg:block'>Attendance</span></div>
<div className='flex gap-[20px]'><MdPeople className='text-gray-600  text-2xl hover:text-[#0d47a1]'/><span className='text-gray-600 hover:text-[#0d47a1] hidden md:block lg:block'>People</span></div>
<div className='flex gap-[20px]'><MdPersonOutline className='text-gray-600  text-2xl hover:text-[#0d47a1]'/><span className='text-gray-600 hover:text-[#0d47a1] hidden md:block lg:block'>HR</span></div>
<div  className='flex gap-[20px] bg-[#212529] h-[50px] pt-[10px] pl-[10px] ml-[-20px]'><MdSettings className='text-white text-2xl hover:text-[#0d47a1]'/><span className='text-gray-600 hover:text-[#0d47a1] hidden md:block lg:block'>Settings</span></div>

<div className='flex flex-col gap-[20px] pt-[40px] '>
<div className='bg-[#212529] h-[30px] rounded-lg text-left text-white'><MdAdd className='text-white text-2xl hover:text-[#0d47a1] lg:hidden md:hidden'/><span className='hidden  md:block lg:block hover:text-[#0d47a1]'>Add New</span></div>
<div className='flex gap-[20px]'><MdLogout className='text-gray-600 hover:text-[#0d47a1] text-2xl'/><span className='text-gray-600  hover:text-[#0d47a1] hidden md:block lg:block'>Log out</span></div>
</div>


    </div>
  )
}

export default Sidebar