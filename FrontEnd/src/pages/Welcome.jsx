import React from 'react'
import { images } from '../../public/image.js'
import {Link} from 'react-router-dom'
const Welcome = () => {
  return (
    <section className='mt-[100px] mr-[50px] ml-[auto] md:ml-[100px]' >
    <main className='min-w-[300px] font-inter flex gap-[50px] xxs:flex-col sm:flex-row sm:mt-[200px]'>
        <div>
<img src={images.churchIcon} alt='churchIcon' className='min-w-[200px] h-[350px]
lg:h-[400px]'/>
        </div>

        <div className='flex flex-col leading-[50px] mt-[10px] lg:mt-[100px] xxs:ml-[80px]'>
    <h1 className='text-[30px] lg:text-[50px]'>Faith Finances</h1>
    <p className='text-[20px] lg:text-[20px]'>Manage church finances with ease and precision</p>
    <div className='text-white text-[12px] flex flex-col gap-[20px] mt-[40px]'>
    <Link to='/signup'><button className='bg-black rounded-lg w-[150px] hover:bg-blue-700'>Sign in</button> </Link>
    <Link to='/login'>   <button className='bg-black rounded-lg  w-[150px] hover:bg-blue-700'>Log in</button> </Link>
    
    <Link to='/income'>   <button className='bg-black rounded-lg  w-[150px] hover:bg-blue-700'>Income</button> </Link>
    </div>
        </div>
    </main>
    </section>
  )
}

export default Welcome