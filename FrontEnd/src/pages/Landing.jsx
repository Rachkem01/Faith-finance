import React, {useState} from 'react'
import {MdChurch} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import { images } from '../../public/image'
import { Link } from 'react-router-dom'
const Landing = () => {
const [Open, setOpen] = useState(false)

const toggleMenu = ()=>setOpen(!Open)
  return (
    <div className='min-w-[300px] cursor-pointer font-inter'>
     <nav className='text-[#fff] bg-[#212529] flex gap-[200px] font-inter pt-[20px] pb-[20px] pl-[-50px] lg:gap-[400px] md:gap-[450px] xxs:gap-[100px] sm:gap-[300px]'>
    <div className='flex gap-[10px]'>
    <MdChurch className='text-2xl lg:ml-[50px]'/>  
    <p className='text-[18px]'>Faith Finances</p>  
    </div>

<div className='flex flex-col gap-[10px] '>
    <div onClick={toggleMenu} className='lg:hidden'>{Open? <FaTimes className='text-white text-3xl hover:text-blue-600'/> : <FaBars className='text-white text-3xl hover:text-blue-600'/>  } </div>
    <div className={`${
            Open? "block" : "hidden"
          }   lg:flex  lg:gap-[50px] lg:block`}
        >
          <div className='flex flex-col gap-[50px] lg:flex-row lg:gap-[150px]'>
          <ul className="flex flex-col items-center gap-[20px] lg:flex-row lg:gap-[20px] text-[20px]">
            <li className="hover:text-blue-500 xxs:text-[15px] sm:text-xl">Finances</li>
            <li className="hover:text-blue-500 xxs:text-[15px] sm:text-xl">Pricing</li>
            <li className="hover:text-blue-500 xxs:text-[15px] sm:text-xl">Contact</li>
          </ul>
       <Link to='/getstarted'><button className="bg-gray-500 w-[120px] h-[40px] rounded-lg text-center text-[16px] hover:bg-blue-600 lg:text-[20px] xxs:text-[15px] sm:text-xl">
            Get Started
          </button>
          </Link>
          </div>
        </div>
        </div>
        </nav>  
  <main className='relative leading-[30px] min-w-[300px] lg:leading-[60px]'>
  <div className='absolute  top-[60%] text-white ml-[10px] font-inter font-bold md:ml-[150px] lg:ml-[250px] lg:top-[70%]'>
      <h1 className='text-[18px] lg:text-2xl'>Empower Your Church or NGO with FaithFinances</h1>
      <p className='text-[13px] lg:text-[18px]'>We empower your finacial management, event palnning and more with software applications</p>
      <button className='bg-[#212529] rounded-lg w-[150px] relative left-[30%] hover:bg-blue-600'>Start Free Trial</button>
    </div>
    <img src={images.churchMeet} className='min-w-[300px] contrast-[50%] z-negative relative xxs:h-[500px]'/>
    
    </main> 

    <main className='mt-[30px] '>
      <h1 className='text-center mb-[30px] text-[20px]'>Key Features</h1>
      <section className='flex flex-wrap gap-[20px] ml-[50px] lg:ml-[150px] xxs:ml-[10px]'>
        <div className='flex flex-col gap-[10px] bg-gray-200 h-[100px] w-[300px] p-[20px] rounded-lg '>
        <h3 className='text-[15px]'>Income Management</h3>
        <p className='text-[12px]'>Track and manage all your income sources with ease</p>
        </div>
        <div className='flex flex-col gap-[10px] bg-gray-200 h-[100px] w-[300px] p-[20px] rounded-lg'>
          <h3 className='text-[15px]' >Expense Tracking</h3>
        <p className='text-[12px]'>Stay on top of your spending with detailed reports</p>
        </div>
        <div className='flex flex-col gap-[10px] bg-gray-200 h-[100px] w-[300px] p-[20px] rounded-lg'>
          <h3 className='text-[15px]'>Attendance Mangement</h3>
          <p className='text-[12px]'>Monitor members attendance for events abd meetings</p>
        </div>
        <div className='flex flex-col gap-[10px] bg-gray-200 h-[100px] w-[300px] p-[20px] rounded-lg'
        >
          <h3 className='text-[15px]'>Member Management</h3>
          <p className='text-[12px]'>Manage your community with robust member profile</p>
        </div>
        <div className='flex flex-col gap-[10px] bg-gray-200 h-[100px] w-[300px] p-[20px] rounded-lg'>
        <h3 className='text-[15px]'>Event Organization</h3>
        <p className='text-[12px]'>Plan and organize events with our user friendly tools</p>
        </div>
        <div className='flex flex-col gap-[10px] bg-gray-200 h-[100px] w-[300px] p-[20px] rounded-lg'>
        <h3 className='text-[15px]'>Project Management</h3>
        <p className='text-[12px]'>Keep project tracks with our integrated solutions</p>
        </div>
      </section>
    </main>

    <main className='mt-[30px] bg-gray-200 pb-[30px]'>
      <h1 className='text-center pt-[20px] pb-[20px] text-[20px]'>Pricing Plans</h1>
      <section className='flex flex-wrap ml-[50px] gap-[20px] lg:gap-[50px] lg:pl-[100px] xxs:ml-[10px]'>
      <div className='flex flex-col gap-[10px] bg-white h-[130px] w-[300px] p-[20px] rounded-lg text-center'>
        <h3 className='text-[15px]'>Basic Plan</h3>
        <p className='text-[12px]'>$29/month</p>
        <button className='bg-[#212529] w-[100px] h-[50px] rounded-lg text-white text-center relative left-[30%]'>Select Plan</button>
        </div>

        <div className='flex flex-col gap-[10px] bg-white h-[130px] w-[300px] p-[20px] rounded-lg text-center'>
        <h3 className='text-[15px]'>Standard Plan</h3>
        <p className='text-[12px]'>$49/month</p>
        <button className='bg-[#212529] w-[100px] h-[50px] rounded-lg text-white relative left-[30%]'>Select Plan</button>
        </div>

        <div className='flex flex-col gap-[10px] bg-white h-[130px] w-[300px] p-[20px] rounded-lg text-center'>
        <h3 className='text-[15px]'>Premium Plan</h3>
        <p className='text-[12px]'>$99/month</p>
        <button className='bg-[#212529] w-[100px] h-[50px] rounded-lg text-white relative left-[30%]'>Select Plan</button>
        </div>
      </section>
    </main>

    <footer className='bg-[#212529] text-white flex gap-[100px] pl-[30px] mt-[40px] pt-[20px] md:gap-[200px] lg:justify-between lg:pr-[30px] xxs:flex-col xxs:gap-[40px] md:flex-row md:gap-[300px]  sm:flex-row  sm:gap-[200px] lg:flex-row'>
      <div className='flex flex-col gap-[20px]'>
<h3 className='text-[15px]'>Faith Finances</h3>
<p className='text-[12px] w-[150px]'>Empowering churches and NGO financial management solutions</p>
      </div>
      <div className='flex flex-col gap-[20px]'>
  <h3 className='text-[15px]'>Contact</h3>
  <div className='text-[12px] flex flex-col gap-[10px]'>
  <a href='@mailto:test1.email.com'> Email: support@finances.com</a>
  <p>Phone: +1 234 567 890</p>
  </div>
      </div>
      </footer>
    </div>
  )
}

export default Landing