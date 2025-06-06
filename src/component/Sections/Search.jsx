import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";


export const Search = ({setSearchSection}) => {

    const navigate = useNavigate();

    const searchRef = useRef();

    const handleSearch = (event) => {
        event.preventDefault();
        setSearchSection(false)
        navigate(`/products?q=${searchRef.current.value}`)
    }
  return (
    <div className='mx-auto max-w-screen-xl p-2 my-5'>
      <form className='flex items-center' onSubmit={handleSearch}>
        <div className='relative w-full'>
            <span className='flex absolute inset-y-0 items-center pointer-events-none'>
                <CiSearch/>
            </span>
            <input type="text" ref={searchRef} id='simple-search ' className='bg-gray-50  border-gray-300 text-gray-900 text-sm rounded-md focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' placeholder='Search here...' autoComplete='off' required/>
        </div>

        <button type='submit' className='py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 '>
        <CiSearch/>
        </button>
      </form>
    </div>
  )
}