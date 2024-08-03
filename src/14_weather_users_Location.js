import React, { useEffect, useState } from 'react'

const WeatherLocation = () => {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=> {
            const latitutde = position.coords.latitude;
                const longitude = position.coords.longitude;
                
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitutde}&lon=${longitude}&exclude={part}&appid=453213af4d4f75e4bd15c1d233118571`)
                    .then((response) => response.json())
                // .then((data) => console.log(data))
                .then((data) => setWeather(data))
            })
        }
    })
  return (
    <div>
          {
              weather ? (
                  <div>
                      <h1>Current Weather</h1>
                      <p>Temperature: { weather.main.temp}</p>
                      <p>Conidtion: { weather.weather[0].description}</p>
                     
                  </div>
              ) : (
                      <p>No Data or Loading...</p>
              )
          }
    </div>
  )
}

export default WeatherLocation