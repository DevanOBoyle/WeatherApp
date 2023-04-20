import axios from "axios"
import { Dispatch } from "react"

export interface APIProps {
  list: Array<ListProps>
  city: CityProps
}

export interface ListProps {
  dt: string
  main: MainProps
  weather: WeatherProps
  clouds: CloudProps
  wind: WindProps
  dt_txt: string
}

export interface MainProps {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  sea_level: number
  grnd_level: number
  humidity: number
  temp_kf: number
}

export interface WeatherProps {
  id: number
  main: string
  description: string
}

export interface CloudProps {
  all: number
}

export interface WindProps {
  speed: number
  deg: number
  gust: number
}

export interface CityProps {
  id: number
  name: string
  timezone: number
  sunrise: number
  sunset: number
}

const getWeather = async (city: string, setWeather: Dispatch<APIProps>) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  )
    .then(response => response.json())
    .then(data => {
      let listData: ListProps[] = []
      for (let i = 0; i < data.list.length; i++) {
        const mainData: MainProps = {
          temp: data.list[i].main.temp,
          feels_like: data.list[i].main.feels_like,
          temp_min: data.list[i].main.temp_min,
          temp_max: data.list[i].main.temp_max,
          pressure: data.list[i].main.pressure,
          sea_level: data.list[i].main.sea_level,
          grnd_level: data.list[i].main.grnd_level,
          humidity: data.list[i].main.humidity,
          temp_kf: data.list[i].main.temp_kf,
        }

        const weatherData: WeatherProps = {
          id: data.list[i].weather.id,
          main: data.list[i].weather.main,
          description: data.list[i].weather.description,
        }

        const cloudData: CloudProps = {
          all: data.list[i].clouds.all,
        }

        const windData: WindProps = {
          speed: data.list[i].wind.speed,
          deg: data.list[i].wind.deg,
          gust: data.list[i].wind.gust,
        }

        const listElemData: ListProps = {
          main: mainData,
          weather: weatherData,
          clouds: cloudData,
          wind: windData,
          dt: data.list[i].dt,
          dt_txt: data.list[i].dt_txt,
        }

        listData.push(listElemData)
      }

      const cityData: CityProps = {
        id: data.city.id,
        name: data.city.name,
        timezone: data.city.timezone,
        sunrise: data.city.sunrise,
        sunset: data.city.sunset,
      }

      const APIData: APIProps = {
        list: listData,
        city: cityData,
      }

      setWeather(APIData)
      console.log(APIData)
    })
    .catch(error => console.error(error))
}

export default getWeather
