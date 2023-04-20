import sun from "../assets/icons/Sun.svg"
import cloud from "../assets/icons/Cloud.svg"
import drizzle from "../assets/icons/Drizzle.svg"
import hail from "../assets/icons/Hail.svg"
import partlyCloudy from "../assets/icons/PartlyCloudy.svg"
import rain from "../assets/icons/Rain.svg"
import snow from "../assets/icons/Snow.svg"
import wind from "../assets/icons/Wind.svg"
import mist from "../assets/icons/Mist.svg"
import thunderstorm from "../assets/icons/Lightning.svg"
import heavyClouds from "../assets/icons/HeavyClouds.svg"
import lightRain from "../assets/icons/LightRain.svg"

export interface WeatherIcons {
  ids: [number]
  icon: string
}

const icons = [
  {
    ids: [800, 800],
    icon: sun,
  },
  {
    ids: [802, 802],
    icon: cloud,
  },
  {
    ids: [801, 801],
    icon: partlyCloudy,
  },
  {
    ids: [803, 804],
    icon: heavyClouds,
  },
  {
    ids: [300, 321],
    icon: drizzle,
  },
  {
    ids: [500, 504],
    icon: rain,
  },
  {
    ids: [500, 504],
    icon: lightRain,
  },
  {
    ids: [511, 511],
    icon: hail,
  },
  {
    ids: [200, 232],
    icon: thunderstorm,
  },
  {
    ids: [701, 781],
    icon: mist,
  },
  {
    ids: [600, 622],
    icon: snow,
  },
]

export default icons
