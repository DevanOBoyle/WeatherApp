/** @format */

import React, { useState, useEffect } from "react"
import { atom, useAtom } from "jotai"
import SearchBar, { searchProps } from "./components/SearchBar/index"
import WeatherList from "./components/WeatherList/index"
import getWeather from "./utils/api"

//export const WeatherContext = React.createContext(null)

export const weatherListAtom = atom<Array<any>>([])
const weatherAtom = atom<any>({})

const App: React.FC = () => {
  // const [location, setLocation] = useState<string>()
  const [weather, setWeather] = useAtom(weatherAtom)
  const [weatherList, setWeatherList] = useAtom(weatherListAtom)
  return (
    <>
      <div className='bg-gray-800 -z-50 w-screen h-screen flex flex-col items-center object-cover object-center overflow-hidden select-none'>
        {/*<WeatherContext.Provider value={{}}>*/}
        <SearchBar setWeather={setWeather} weather={weather} />
        <WeatherList data={weather} />
        {/*</WeatherContext.Provider>*/}
      </div>
    </>
  )
}

export default App
