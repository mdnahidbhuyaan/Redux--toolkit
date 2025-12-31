import React from 'react'
import { fetchGIF, fetchPhotos, fetchVideos } from './api/mediaApi'

const App = () => {

  return (
    <div className='h-screen w-full text-white bg-gray-950'>
    <button className='bg-green-700 rounded-sm m-4 px-5 py-2 '
    onClick={async()=>{
      const data = await fetchPhotos("Cats")
      console.log(data.results)
    }}
    >
      Get Photos
    </button>
        <button className='bg-green-700 rounded-sm m-4 px-5 py-2 '
    onClick={async()=>{
      const data = await fetchVideos("Cats")
      console.log(data.videos)
    }}
    >
      Get Videos
    </button>
            <button className='bg-green-700 rounded-sm m-4 px-5 py-2 '
    onClick={async()=>{
      const data = await fetchGIF("Cats")
      console.log(data.results)
    }}
    >
      Get GIF
    </button>
    </div>
  )
}

export default App
