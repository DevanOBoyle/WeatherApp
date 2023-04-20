/** @format */

import React, { useState } from "react"
import { APIProps } from "../../utils/api"
import icons from "../../props/icons"

export interface WeatherDisplayProps {
  data: APIProps | undefined
}

const DisplayBox = ({ data }: WeatherDisplayProps) => {
  return (
    <div
      className={`w-[15rem] sm:w-[24rem] h-full bg-slate-700 rounded-[3rem] sm:rounded-[4.5rem]`}
    >
      <DisplayWeather data={data}></DisplayWeather>
    </div>
  )
}

const DisplayWeather = (data: WeatherDisplayProps) => {
  if (data) {
    return <div></div>
  }
  return <div></div>
}

export default DisplayBox
