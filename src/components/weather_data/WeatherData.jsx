import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './WeatherData.scss';
const WeatherData = ({ apiKey, onCityChange }) => {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');
  const [tempCity, setTempCity] = useState('');

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        setWeather(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (city) {
      fetchWeatherData();
      onCityChange(city);
    }
  }, [city, tempCity, apiKey, onCityChange]);

  const handleSearchInputChange = (e) => {
    setTempCity(e.target.value);
  };
  const handleButtonClick = () => {
    setCity(tempCity);
  };

  return (
    <div className='weather'>
      <div className='weather__data'>
        <p className='weather__city'>{city}</p>
        {weather ? (
          <p className='weather__temp'>{weather.current.temp_c}</p>
        ) : (
          <p className='weather__temp'></p>
        )}
      </div>
      <div className='weather__search'>
        <input
          type='text'
          placeholder='Search...'
          value={tempCity}
          onChange={handleSearchInputChange}
        />
        <a onClick={handleButtonClick}>
          <i className='fa-solid fa-magnifying-glass'></i>
        </a>
      </div>
    </div>
  );
};
export default WeatherData;
