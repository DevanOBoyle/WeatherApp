/** @format */

import React, { useState, useEffect } from "react"
import Weather from "../Weather/index"

export interface WeatherProps {
  value: number
}

export interface LocationProps {
  data: WeatherProps
}

const WeatherList = () => {
  const [weatherList, setWeatherList] = useState<Array<WeatherProps>>([])

  useEffect(() => {
    setWeatherList([{ value: 0 }, { value: 1 }])
  }, [])
  return (
    <div className='flex h-[21rem] sm:h-[30rem] gap-x-[4rem] justify-center translate-y-12 sm:translate-y-20 translate-x-[9.5rem] sm:translate-x-[14em]'>
      {weatherList.map((location: WeatherProps, index: number) => (
        <Weather key={index} data={location} />
      ))}
    </div>
  )
}

export default WeatherList
