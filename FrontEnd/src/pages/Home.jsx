import React from 'react'
import Sidebar from '../components/Sidebar'
import Search from '../components/Search'
import Chart1 from '../components/Chart1.jsx'
import { images } from '../assets/image.js'
import {MdArrowForward} from 'react-icons/md'
const Home = () => {
  return (
  <section className=''>
<div className='' ><Sidebar/></div>
<div><Search/></div>

<div className='flex flex-col gap-[-10px] lg:flex-row'>
<aside>
<section className='ml-[100px] font-inter mt-[70px] md:ml-[230px] flex gap-[15px]'> 
<main className='flex flex-row flex-wrap gap-[1px] lg:flex-no-wrap'>
<div className='text-center text-bold text-[20px] pl-[15px]'>Manage Income &</div>
<div className='flex flex-row flex-wrap gap-[10px] ml-[30px]'>
<button className='bg-[#212529] h-[35px] text-white text-[12px] rounded-lg pl-[10px] pr-[10px] w-[160px]'>View transaction history</button>
<button className='bg-[#212529] h-[35px] text-white rounded-lg  pl-[10px] pr-[10px] w-[160px] text-[12px]'>Create New Transaction</button>
</div>
</main>
</section>
<section className='font-inter ml-[100px] bg-white text-white  w-[700px] rounded-lg pl-[30px] mt-[50px] h-[220px] pt-[30px] lg:ml-[230px] bg-gray-300 md:ml-[230px] bg-gray-300'>
  <main className='flex flex-col flex-wrap gap-[30px] md:flex-row lg:flex-row'>
<div className='bg-[#212529] rounded-lg w-[240px] h-[170px] p-[20px]'>
<h6 className='text-[14px]' >Total balance overview</h6>
<h3 className='text-[30px]'>Total:$222,358</h3>
<p className='text-[14px] pt-[30px]'>Last 4 digits: 0322</p>
</div>


<div className='bg-[#212529] rounded-lg w-[240px] h-[170px] p-[20px]'>
<h6 className='text-[14px]' >Total balance overview</h6>
<h3 className='text-[30px]'>Total:$392,100</h3>
<p className='text-[14px] pt-[30px]'>Last 4 digits: 0322</p>
</div>

</main>  
<div>
    <p className='text-black text-[20px] mt-[40px] hidden md:block lg:block'>View Weekly</p>
<Chart1/>
</div>
</section>
</aside>

<aside className='ml-[130px] font-inter md:ml-[300px] mt-[500px]  lg:ml-[0px] lg:mt-[70px]'>
<div className='text-[20px] mt-[-200px] md:mt-[0px] lg:mt-[0px]'>Manage Contacts</div>
<div className='flex gap-[10px] mt-[20px]'>
<label>All</label>
<input placeholder='Recents' className='bg-gray-300 rounded-lg p-[5px] w-[250px]'/>
</div>
<section className='bg-gray-300 w-[300px] rounded-lg mt-[20px] flex flex-col gap-[10px]'>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact'/>
<p className='pt-[20px] text-gray-500'>Member: Lion Mike</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact'/>
<p  className='pt-[20px] text-gray-500'>Member: Sam Smith</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact'/>
<p  className='pt-[20px] text-gray-500'>Member: Josh Kandal</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact'/>
<p  className='pt-[20px] text-gray-500'>Member: Emma Ive</p>
</div>
<div className='flex gap-[10px]'>
<img src={images.profile} alt='contact'/>
<p  className='pt-[20px] text-gray-500'>Member: Zac Effon</p>
</div>

<button className='bg-[#212529] text-white w-[300px] h-[30px] rounded-lg mb-[5px] mt-[20px]'>Load more</button>

</section>
<div className='bg-gray-300 w-[300px] mt-[40px] rounded-lg h-[120px] pl-[30px]'>
    <p className='font-bold pt-[20px]'>Tips to cut spending by 10%</p>
   <div className=' flex'> <p className='pt-[20px]'>Explore cost savings <MdArrowForward className='relative left-[110%] top-[-45%] animate-bounce'/></p> </div>
</div>
</aside>




</div>

  </section>

  )
}

export default Home