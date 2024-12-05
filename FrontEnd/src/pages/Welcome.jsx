import React from 'react'
import { images } from '../../public/image.js'
import {Link} from 'react-router-dom'
const Welcome = () => {
  return (
    <section className='mt-[100px] mr-[50px] ml-[auto] md:ml-[100px]' >
    <main className='min-w-[300px] font-inter flex gap-[50px]'>
        <div>
<img src={images.churchIcon} alt='churchIcon' className='min-w-[200px] h-[350px]
lg:h-[400px]'/>
        </div>

        <div className='flex flex-col leading-[50px] mt-[10px] lg:mt-[100px]'>
    <h1 className='text-[30px] lg:text-[50px]'>Faith Finances</h1>
    <p className='text-[20px] lg:text-[20px]'>Manage church finances with ease and precision</p>
    <div className='text-white text-[12px] flex flex-col gap-[20px] mt-[40px]'>
    <Link to='/home'><button className='bg-black rounded-lg h-[40px] w-[200px] hover:bg-blue-700'>Get started</button> </Link>
       <button className='bg-black rounded-lg h-[40px] w-[200px] hover:bg-blue-700'>Access Account</button> 
    </div>
        </div>
    </main>
    </section>
  )
}

export default Welcome