import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Search = () => {
  return (
<div className=' flex pt-[20px]  h-[60px] gap-[-50px] ml-[10px] lg:ml-[150px] md:ml-[130px] xxs:pl-[50px] xl:ml-[230px]'>
<input className='bg-gray-300 text-[10px] rounded-lg text-gray-600 placeholder-transparent  pl-[10px] md:placeholder-transparent md:ml-[-20px] md:w-[170px] lg:placeholder-tranparent lg:w-[220px] xxs:ml-[25px] xxs:w-[250px] sm:w-[220px] xl:placeholder-gray-500 xl:w-[500px] xl:text-[18px]' placeholder='Search items, collections and accounts in Faith Finances' />
<span className='text-gray-500 relative left-[-4%] top-[25%] xxs:left-[-10%] sm:left-[-7%] xl:hidden'><FaSearch/></span>
</div>
  )
}

export default Search