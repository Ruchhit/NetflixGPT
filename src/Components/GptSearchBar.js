import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {
    const language = useSelector((store)=> store.config.lang);
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className='bg-black p-2 m-2 w-[48%] grid grid-cols-12 rounded-sm'>
            <input type="text" placeholder={lang[language].placeholder} className='p-2 m-2 col-span-9 rounded-sm'/>
            <button className='text-black p-2 m-2 col-span-3 rounded-lg cursor-pointer bg-red-600 font-semibold text-lg'>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar