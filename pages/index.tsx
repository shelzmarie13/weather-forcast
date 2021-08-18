import React from 'react'
import SearchCity from '@components/SearchCity'
import WeatherForecast from '@components/WeatherForecast'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <>
    <Head>
        <title>Weather Forecast</title>
      </Head>
    <SearchCity />
    <WeatherForecast/>
    </>
  )
}
export default Home
