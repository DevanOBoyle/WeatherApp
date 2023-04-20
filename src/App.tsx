/** @format */

import React, { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar/index"
import WeatherList, { WeatherListProps } from "./components/WeatherList/index"
import getWeather, { APIProps } from "./utils/api"

//export const WeatherContext = React.createContext(null)

const App: React.FC = () => {
  // const [location, setLocation] = useState<string>()
  const [weather, setWeather] = useState<APIProps>()
  return (
    <>
      <div className='bg-gray-800 -z-50 w-screen h-screen flex flex-col items-center object-cover object-center overflow-hidden select-none'>
        {/*<WeatherContext.Provider value={{}}>*/}
        <SearchBar setWeather={setWeather} />
        <WeatherList data={weather} />
        {/*</WeatherContext.Provider>*/}
      </div>
    </>
  )
}

export default App
