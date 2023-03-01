/** @format */

import { useState } from "react"
import SearchBar from "./components/SearchBar/index"
import WeatherList from "./components/WeatherList/index"

function App() {
  return (
    <>
      <div className='bg-gray-800 -z-50 w-screen h-screen flex flex-col items-center object-cover object-center overflow-hidden'>
        <SearchBar />
        <WeatherList />
      </div>
    </>
  )
}

export default App
