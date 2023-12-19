import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';
import openai from '../utils/openai';

const GptSearchBar = () => {
    const language = useSelector((store)=> store.config.lang);
    const searchText = useRef(null);

    const handleGptSearchClick = async()=>{
      console.log(searchText.current.value);

      const gptQuery = " act as a movie recommendation system and suggest some movies for the query"+searchText.current.value+". only give 5 movies , with comma seperated.like the example given. example : phir hera pheri , don, koi mil gaya , gadar , animal";
      const gptResults = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      console.log(gptResults.choices)
    }
  return (
    <div className='pt-[8%] flex justify-center '>
        <form className='bg-black p-2 m-2 w-[48%] grid grid-cols-12 rounded-sm' onSubmit={(e)=> e.preventDefault()}>
            <input type="text" placeholder={lang[language].placeholder} className='p-2 m-2 col-span-9 rounded-sm' ref={searchText}/>
            <button className='text-black p-2 m-2 col-span-3 rounded-lg cursor-pointer bg-red-600 font-semibold text-lg' onClick={handleGptSearchClick}>{lang[language].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar