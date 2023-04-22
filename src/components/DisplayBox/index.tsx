/** @format */

import React, { useState, useEffect } from "react"
import icons from "../../props/icons"

const DisplayBox = (data: any) => {
  return (
    <div
      className={`w-[15rem] sm:w-[24rem] h-full bg-slate-700 rounded-[3rem] sm:rounded-[4.5rem]`}
    >
      <DisplayWeather data={data}></DisplayWeather>
    </div>
  )
}

const DisplayWeather = (data: any) => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    if (data.city) {
      setRender(true)
    }
    console.log(data)
  }, [])

  if (render) {
    return (
      <div className={`text-center text-white text-base`}>{data.city.name}</div>
    )
  }
  return (
    <div className={`text-center text-white text-base`}>
      Sorry, unable to find location
    </div>
  )
}

export default DisplayBox
