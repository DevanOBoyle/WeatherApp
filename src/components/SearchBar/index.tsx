/** @format */

import { Dispatch } from "react"
import getWeather from "../../utils/api"

export interface searchProps {
  setWeather: Dispatch<any>
  weather: any
}

const onEnter = (e: any, setWeather: Dispatch<any>, weather: any) => {
  if (e.key === "Enter") {
    getWeather(e.target.value, setWeather, weather).then(() =>
      console.log(weather)
    )
  }
}

const SearchBar = ({ setWeather, weather }: searchProps) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search Location'
        onKeyDown={e => onEnter(e, setWeather, weather)}
        className='w-[17rem] h-[35px] sm:w-[30rem] mt-16 bg-slate-600 flex justify-center items-center rounded-full outline-none pl-[20px]'
      ></input>
    </div>
  )
}

export default SearchBar
