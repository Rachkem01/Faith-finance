import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Chart1 from '../components/Chart1.jsx'
import { images } from '../../public/image.js'
import {MdArrowForward} from 'react-icons/md'
const Home = () => {
  return (
  <section className=''>
<div className='' ><Sidebar/></div>
<div><Search/></div>

<div className='flex flex-col gap-[-10px] lg:flex-col xl:flex-row'>
<aside>
<section className='xxs:ml-[100px] font-inter mt-[70px] md:ml-[140px] flex gap-[15px] sm:ml-[100px] lg:ml-[150px] xl:ml-[230px]'> 
<main className='flex flex-row flex-wrap gap-[1px] sm: flex-col xl:flex-col '>
<div className='text-center text-bold text-[20px] pl-[15px]'>Manage Income</div>
<div className='flex flex-row flex-wrap gap-[10px] ml-[30px] md:ml-[10px] sm:flex-col lg:flex-col lg:ml-[40px] xl:flex-row xl:pt-[30px]'>
<button className='bg-[#212529] h-[35px] text-white text-[12px] rounded-lg pl-[10px] pr-[10px] w-[160px] xl:text-xl xl:w-[250px]'>View transaction history</button>
<button className='bg-[#212529] h-[35px] text-white rounded-lg pl-[10px] pr-[10px] w-[160px] text-[12px] xl:text-xl xl:w-[250px]'>Create New Transaction</button>
</div>
</main>
</section>
<section className='font-inter ml-[100px] bg-white text-white  w-[700px] rounded-lg pl-[30px] mt-[50px] h-[220px] pt-[30px] lg:ml-[180px] bg-gray-300 md:ml-[130px] bg-gray-300 xl:ml-[220px]'>
  <main className='flex flex-col flex-wrap gap-[30px] md:flex-col lg:flex-col xl:flex-row'>
<div className='bg-[#212529] flex flex-col rounded-lg  h-[170px] p-[20px] sm:w-[180px] md:w-[165px] sm:gap-[25px] xxs:w-[180px] xxs:gap-[25px] lg:w-[180px] xl:w-[250px]'>
<h6 className='sm:text-[12px] xxs:text-[12px] xl:text-xl' >Total balance overview</h6>
<h3 className='sm:text-[18px] xxs:text-[18px] lg:text-[16px] xl:text-xl'>Total:$222,358</h3>
<p className='text-[14px] '>Last 4 digits: 0322</p>
</div>


<div className='bg-[#212529] flex flex-col rounded-lg  h-[170px] p-[20px] sm:w-[180px] md:w-[165px] xxs:w-[180px] xxs:gap-[25px] lg:w-[250px]'>
<h6 className='sm:text-[12px] xxs:text-[12px] xl:text-xl' >Total balance overview</h6>
<h3 className='sm:text-[18px] xxs:text-[18px] lg:text-[16px] xl:text-xl'>Total:$392,100</h3>
<p className='text-[14px]'>Last 4 digits: 0322</p>
</div>

</main>  
<div>
    <p className='text-black text-[20px] mt-[40px] hidden md:hidden lg:none lg:ml-[20px] xl:block'>View Weekly</p>
<Chart1/>
</div>
</section>
</aside>

<aside className='ml-[130px] font-inter md:ml-[150px] xxs:mt-[500px] sm:mt-[450px] md:mt-[250px]  lg:ml-[200px] lg:mt-[230px] xl:mt-[70px] xl:ml-[70px]'>
<div className='text-[20px] mt-[-200px] md:mt-[0px] lg:mt-[0px]'>Manage Contacts</div>
<div className='flex gap-[10px] mt-[20px]'>
<label>All</label>
<input placeholder='Recents' className='bg-gray-300 rounded-lg p-[5px] sm:w-[150px] sm:placeholder-gray-500 xxs:placeholder-transparent xxs:w-[150px] lg:w-[160px] xl:w-[250px]'/>
</div>
<section className='bg-gray-300  rounded-lg mt-[20px] flex flex-col gap-[10px] sm:w-[180px] xxs:w-[180px] xxs:pl-[10px] lg:w-[200px] xl:w-[300px]'>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact' className='xxs:hidden sm:block'/>
<p className='pt-[20px] text-gray-500'>Member: Lion Mike</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact' className='xxs:hidden sm:block'/>
<p  className='pt-[20px] text-gray-500'>Member: Sam Smith</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact' className='xxs:hidden sm:block'/>
<p  className='pt-[20px] text-gray-500'>Member: Josh Kandal</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact' className='xxs:hidden sm:block'/>
<p  className='pt-[20px] text-gray-500'>Member: Emma Ive</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact' className='xxs:hidden sm:block'/>
<p  className='pt-[20px] text-gray-500'>Member: Zac Effon</p>
</div>

<button className='bg-[#212529] text-white  h-[30px] rounded-lg mb-[5px] mt-[20px] sm:w-[150px] xxs:w-[150px]'>Load more</button>

</section>
<div className='bg-gray-300  mt-[40px] rounded-lg h-[120px] pl-[30px] sm:w-[190px] xxs:w-[200px] xl:w-[300px]'>
    <p className='font-bold pt-[20px] xxs:text-[15px]'>Tips to cut spending by 10%</p>
   <div className=' flex'> <p className='pt-[20px] xxs:text-[12px]'>Explore cost savings <MdArrowForward className='relative left-[110%] top-[-45%] animate-bounce'/></p> </div>
</div>
</aside>




</div>

  </section>

  )
}

export default Home