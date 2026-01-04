import { useDispatch, useSelector } from "react-redux"
import {fetchPhotos,fetchVideos,fetchGIF} from "../api/mediaApi"
import {setQuery,setLoading,setError, setResults} from "../redux/features/searchSlich"
import { useEffect } from "react"
const ResultGrid = () => {

const {query,activeTab,results,Loading,error} = useSelector((store)=>store.search)



useEffect(()=>{
    const getData = async ()=>{
    let data
    if(activeTab == "photo"){
         let response =await fetchPhotos(query)
            data = response.results
    }
       if(activeTab == "videos"){
         let response = await fetchVideos(query)
            data = response.videos
    }
       if(activeTab == "gif"){
        let response = await fetchGIF(query)
            data = response.results
       }
    console.log(data)
}
getData()
},[query,activeTab])

  return (
    <div>
      
    </div>
  )
}

export default ResultGrid
