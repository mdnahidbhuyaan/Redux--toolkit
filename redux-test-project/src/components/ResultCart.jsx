import React from 'react'

const ResultCart = ({item}) => {
  return (
    <div className='w-[18vw] h-80 bg-gray-800 rounded-lg text-white shadow-lg'>
        {item.type == "photo"?<img src={item.src} alt="" />:""}
        {item.type == "video"?"":""}
        {item.type == "gif"?"":""}
      <h1 className=''>{item.title}</h1>
    </div>
  )
}

export default ResultCart
