/** @format */

import React, { useState, useEffect, useRef, MouseEvent } from "react"
import Weather from "../Weather/index"

export interface WeatherProps {
  value: number
}

export interface LocationProps {
  data: WeatherProps
}

const WeatherList = () => {
  const [weatherList, setWeatherList] = useState<Array<WeatherProps>>([])
  const [initPos, setInitPos] = useState<number>(0)
  const [percentage, setPercentage] = useState<number>(0)
  const [prevPercentage, setPrevPercentage] = useState<number>(0)
  const track = useRef<HTMLInputElement>(null)

  useEffect(() => {
    setWeatherList([
      { value: 0 },
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 8 },
      { value: 9 },
    ])
  }, [])

  const handleMouseDown = (e: any) => {
    if (track.current) {
      track.current.dataset.mouseDownPos = `${e.clientX}`
    }
    console.log("down")
  }

  const handleMouseUp = (e: any) => {
    console.log("up")
    if (track.current) {
      track.current.dataset.mouseDownPos = "0"
      track.current.dataset.prevPercentage = `${percentage}`
    }
    // setPrevPercentage(percentage)
  }

  const handleMouseMove = (e: any) => {
    if (track.current) {
      if (track.current.dataset.mouseDownPos === "0") return

      if (
        track.current.dataset.mouseDownPos &&
        track.current.dataset.prevPercentage
      ) {
        const delta = parseFloat(track.current.dataset.mouseDownPos) - e.clientX
        const maxDistance = window.innerWidth / 2
        const percent = (delta / maxDistance) * -100
        const percentUnconstrained =
          percent + parseFloat(track.current.dataset.prevPercentage)
        const percentConstrained = Math.max(
          Math.min(percentUnconstrained, 45.6),
          -45.6
        )
        setPercentage(percentConstrained)

        if (track.current) {
          track.current.animate(
            { transform: `translate(${percentConstrained}%, 20%)` },
            { duration: 1200, fill: "forwards" }
          )
        }
      }
    }
  }

  window.onmousedown = e => handleMouseDown(e)
  window.ontouchstart = e => handleMouseDown(e.touches[0])
  window.onmouseup = e => handleMouseUp(e)
  window.ontouchend = e => handleMouseUp(e.touches[0])
  window.onmousemove = e => handleMouseMove(e)
  window.ontouchmove = e => handleMouseMove(e.touches[0])

  return (
    <div
      ref={track}
      style={{}}
      data-mousedownpos='0'
      data-prevpercentage='0'
      className='flex h-[21rem] sm:h-[30rem] gap-x-[4rem] left-1/2 translate-y-[20%] translate-x-[45.6%]'
    >
      {weatherList.map((location: WeatherProps, index: number) => (
        <Weather key={index} data={location} />
      ))}
    </div>
  )
}

export default WeatherList
