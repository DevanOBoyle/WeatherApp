import { Dispatch } from "react"

const getWeather = async (
  city: string,
  setWeather: Dispatch<any>,
  weather: any
) => {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${
      import.meta.env.VITE_API_KEY
    }`
  )
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      console.clear()
      console.error("Could not find location")
    })
    .then(data => {
      setWeather(data)
      console.log(weather)
    })
    .catch(error => {
      console.error(error)
      console.error("API call failed")
    })
}

export default getWeather
