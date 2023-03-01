/** @format */

import React, { useState } from "react"
import { WeatherProps, LocationProps } from "../WeatherList/index"

const Weather = ({ data }: LocationProps) => {
  const width = 15 + data.value * 340
  return (
    <div
      className={`w-[15rem] sm:w-[24rem] h-full bg-slate-700 rounded-[3rem] sm:rounded-[4.5rem]`}
    ></div>
  )
}

export default Weather
