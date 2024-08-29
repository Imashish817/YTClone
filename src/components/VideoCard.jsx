import React, { useEffect, useState } from 'react'


const VideoCard = ({video}) => {
    const [videTitle,setVideTitle]=useState("");
    
   
    const {snippet,statistics}=video;
    const {thumbnails,localized}=snippet
    useEffect(()=>{
        if(localized.title.length>55)
        {
            setVideTitle(localized.title.substring(1,55)+"....");
        }
        else{
            setVideTitle(localized.title)
        }
    },[])
    
    const handleWatchReq=()=>{

    }

  return (
    <div className='w-80 mt-4 rounded-lg border' onClick={()=>handleWatchReq(video.id)}>
        <img className='rounded-xl' src={thumbnails.medium.url}/>
        <p className='font-semibold text-lg m-1'>{videTitle}</p>
        <p className='text-gray-500 m-1'>{snippet.channelTitle}</p>
        <p className='text-gray-500 m-1'>{statistics.viewCount}</p>
        <p className='text-gray-500 m-1'>{snippet.publishedAt.toString()}</p>
    </div>
  )
}

export default VideoCard