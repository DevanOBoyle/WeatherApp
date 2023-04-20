/** @format */

import { Dispatch } from "react"
import getWeather, { APIProps } from "../../utils/api"

export interface locationProps {
  setWeather: Dispatch<APIProps>
}

const onEnter = (e: any, setWeather: Dispatch<APIProps>) => {
  if (e.key === "Enter") {
    getWeather(e.target.value, setWeather)
  }
}

const SearchBar: React.FC<locationProps> = ({ setWeather }) => {
  return (
    <div>
      <input
        type='text'
        placeholder='Search Location'
        onKeyDown={e => onEnter(e, setWeather)}
        className='w-[17rem] h-[35px] sm:w-[30rem] mt-16 bg-slate-600 flex justify-center items-center rounded-full outline-none pl-[20px]'
      ></input>
    </div>
  )
}

export default SearchBar
