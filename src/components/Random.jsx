import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import { useEffect } from 'react';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  
  // const[gif, setGif]=useState('');
  // const[loading, setLoading]=useState("false");

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imgSource= data.data.images.downsized_large.url;
  //   setGif(imgSource);
  //   setLoading(false);
  // }
                                      // custum hook is made for this code ----> useGif
  // useEffect( ()=>{
  //     fetchData();
  // },[])
  const {gif,loading,fetchData} = useGif();
  function clickHandler(){
      fetchData();
  }

  return (
    <div className='1/2  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl uppercase underline font-bold'>A Random Gifs</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>) 
        }
        <button onClick={clickHandler} 
        className='w-10/12 mb-[15px] bg-orange-500 text-lg rounded-lg py-2'>
          Generate Gif
        </button>

    </div>
  )
}

export default Random