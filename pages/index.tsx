import React from 'react'
import SearchCity from '@components/SearchCity'
import WeatherForecast from '@components/WeatherForecast'

const Home: React.FC = () => {
  return (
    <>
    <SearchCity />
    <WeatherForecast/>
    </>
  )
}
export default Home
