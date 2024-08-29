import React, { useEffect } from 'react'
import ChoiceBtn from './ChoiceBtn'
import { YT_API_KEY } from '../Constants'
import { useDispatch, useSelector } from 'react-redux'
import { addVideos } from '../utils/videosSlice'
import VideoCard from './VideoCard'
import ChoiceBTNList from './ChoiceBTNList'
import { Link } from 'react-router-dom'

const MainContainer = () => {
  const Dispacher=useDispatch();
  const videos=useSelector(store=>store.mainvideo.videos)
  useEffect(() => {

    fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=AIzaSyBn0pp2EsCDxBeiK0u15ZBnIzKfP6QMjr8`)
      .then(response => response.json())
      .then(data => {
        console.log(data.items);
        Dispacher(addVideos(data.items))
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [])
  if(!videos)
  {return}
  return (
    <>
    <div className='overflow-y-scroll '>
    <ChoiceBTNList/>
    <div className='flex flex-wrap justify-evenly cursor-pointer'>
    {videos.map((video)=> <Link  key={video.id} to={'/watch?v='+video.id}><VideoCard video={video}/></Link>)}
    </div>
   
    </div>
    </>
  )
}

export default MainContainer