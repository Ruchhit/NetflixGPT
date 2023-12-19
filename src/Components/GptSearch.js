import React from 'react'
import { NETFLIX_BG } from '../utils/constants'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
        <img alt='netflix background' src={NETFLIX_BG}/>
        </div>
         
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearch