import { Input } from '@/components/ui/input'
import React from 'react'
import {FaSearch} from 'react-icons/fa'

const Search = () => {
  return (
    <div className='flex items-center bg-indigo-700 h-10 w-full border border-white-1  rounded-md pr-3'>
          <Input placeholder='Search by course code' type='text' className='text-white outline-none placeholder:text-white bg-indigo-700 w-full h-full' />
          <FaSearch className='text-white'/>
    </div>
  )
}

export default Search
