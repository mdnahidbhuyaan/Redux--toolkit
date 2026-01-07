import React from 'react'

const ResultCart = ({item}) => {
  return (
    <div className='w-[18vw] relative h-80 bg-gray-white rounded-xl overflow-hidden text-black shadow-lg'>
               <a className='h-full' target="_blank" href={item.url}>

         {item.type == "photo"?<img className='h-full w-full object-cover' src={item.src} alt="" />:""}
        {item.type == "video"?<video className='h-full w-full object-cover' autoPlay loop muted src={item.src}></video>:""}
        {item.type == "gif"?<img className='h-full w-full object-cover' src={item.src} alt="gif" />:""}
                </a>
      <div id='bottom' className='flex justify-between gap-3 items-center px-4 py-6 w-full absolute bottom-0 mt-5 text-xl p-2 text-white font-semibold '>
        <h2 className='text-lg font-semibold h-14 overflow-hidden capitalize'>{item.title}</h2>
        <button className='bg-indigo-700 rounded font-medium px-3 py-1 corsor-pointer active:scale-95'>Save</button>
      </div>
    </div>
  )
}

export default ResultCart
