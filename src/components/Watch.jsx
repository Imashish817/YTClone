import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { OffHamburger, ToggleHamburger } from '../utils/AppSkice';
import { addplayingVideo } from '../utils/videosSlice';
import { useSearchParams } from 'react-router-dom';
import { YT_API_KEY } from '../Constants';
import like from '../assets/like.png'
import share from '../assets/share.png'
const Watch = () => {
  const [URLSearchParams] = useSearchParams()
  const videoId = URLSearchParams.get('v');
  const [descFlag, setdescflag] = useState("")
  const Dispatch = useDispatch();
  const video = useSelector(store => store.mainvideo.playingVideo[0]);
  useEffect(() => {
    Dispatch(OffHamburger())
    const data = fetch('https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=' + videoId + '&key=' + YT_API_KEY)
      .then((res) => res.json())
      .then((json) => {
        Dispatch(addplayingVideo(json.items))
        console.log(json)
      })
      // setdesc(video.snippet.description.substring(1,200))
  }, [])
 
  if (!video) return;
  const { title, publishedAt, tags, description, channelTitle } = video.snippet;
  const { } = video.contentDetails;
  const { viewCount, likeCount } = video.statistics;
 
  console.log(channelTitle)
  return (
    <div className='col-span-11 ml-28 my-2 '>
      <iframe width="800" height="440" className=' shadow-black shadow-xl rounded-2xl'
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
      <h3 className='mt-6 w-4/6 text-2xl font-bold' >{title}</h3>
      <div className='mt-6 flex  align-middle justify-between w-4/6 ' >
        <div id='firs-half' className='flex mx-2'>
          <img src='' alt='chan' className='rounded-full bg-black h-10 w-10 mt-1' />
          <div className='text-left mx-2 '>
            <h3 className='font-semibold text-lg'>{channelTitle}</h3>
            <h5 className='text-sm text-left text-nowrap'>1028 subscriber</h5>
          </div>
          <button className='bg-black text-white text-center font-bold text-lg rounded-full mx-10 px-5 '>Subscribe</button>
        </div>
        <div className='flex m-2 font-semibold'>
          <h2 className='cursor-pointer flex  px-2 py-1 text-center rounded-l-full  border-gray-300 border-r bg-slate-100'><img className='h-7 mx-2' src={like}/>{likeCount}</h2>
          <h2 className='cursor-pointer  px-2 py-1 text-center rounded-r-full bg-slate-100'>dislike</h2>
          <h2 className='cursor-pointer flex mx-2 px-2 py-1 text-center rounded-full  border-gray-300 border-r bg-slate-100'><img className='h-6 mx-2' src={share}/>share</h2>
          <h3 className='cursor-pointer  mx-2 px-4 py-1 text-center rounded-full  border-gray-300 border-r bg-slate-100'>...</h3>
        </div>
      </div>
      <div className='bg-slate-100 text-slate-700 my-5 w-4/6'>
        <div className='font-bold py-3 px-2'>
        <h3 >{viewCount} views &nbsp; Premiered {publishedAt} </h3>
        </div>
       
        {/* <h3>{tags.toString()} </h3> */}
        <p className='text-sm mx-2'>{description.substring(0,200)+"..."} <button className='font-bold'>show more</button></p>
       
      </div>
    </div>
  )
}

export default Watch