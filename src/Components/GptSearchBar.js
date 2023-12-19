import React from 'react'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center '>
        <form className='bg-black p-2 m-2 w-[48%] grid grid-cols-12'>
            <input type="text" placeholder='what do you want to see today?' className='p-2 m-2 col-span-9'/>
            <button className='text-black p-2 m-2 col-span-3 rounded-lg cursor-pointer bg-red-600 font-semibold text-lg'>Search</button>
        </form>
    </div>
  )
}

export default GptSearchBar