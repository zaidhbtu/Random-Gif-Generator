import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
    const [tag, setTag] = useState("");
    const {gif, loading, fetchData} = useGif(tag);


  return (
    <div className='w-1/2 bg-blue-400 rounded-lg border border-black
       flex flex-col items-center gap-y-5 mt-[10px]'>

      <h1 className='mt-[10px] text-2xl font-bold uppercase underline'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="330"/>)
      }

      <input className='text-2xl text-center bg-green-200 w-9/12 px-1 py-1 rounded-lg'
       onChange={(e) => setTag(e.target.value)}
       value={tag}
       /> 

      <button className='text-2xl bg-green-200 w-9/12 px-1 py-1 rounded-lg mb-[10px]'
        onClick={() => fetchData(tag)}>
        Generate
      </button>
    </div>
  )
}

export default Tag

