import React from 'react'
import {FaSearch} from 'react-icons/fa'
const Search = () => {
  return (
<div className=' flex pt-[20px]  h-[60px] gap-[-50px] ml-[10px] lg:ml-[150px] md:ml-[130px]'>
<input className='bg-gray-300  rounded-lg text-gray-600 placeholder-transparent  pl-[10px] min-w-[300px] md:placeholder-gray-500  ml-[100px] w-[450px] lg:placeholder-gray-500 w-[550px]' placeholder='Search items, collections and accounts in Faith Finances' />
<span className='text-gray-500 relative left-[-4%] top-[25%] lg:hidden'><FaSearch/></span>
</div>
  )
}

export default Search