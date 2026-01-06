import React from 'react'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {

  return (
    <div className=' w-full min-h-screen'>
  <SearchBar/>
  <Tabs/>
  <ResultGrid/>
    </div>
  )
}

export default App
