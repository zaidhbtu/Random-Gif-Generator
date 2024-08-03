import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import axios from 'axios';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Random = () => {

    const {gif, loading,fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-400 rounded-lg border border-black
       flex flex-col items-center gap-y-5 mt-[15px]'>

      <h1 className='mt-[10px] text-2xl font-bold uppercase underline'>A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} width="330"/>)
      }

      <button className='text-2xl bg-green-200 w-9/12 px-1 py-1 rounded-lg mb-[10px]'
        onClick={() => fetchData()}>
        Generate
      </button>
    </div>
  )
}

export default Random
