import { useState } from 'react';
import HoursWeather from '../hours_weather/HoursWeather';
import WeatherData from '../weather_data/WeatherData';
import WeekWeather from '../week_weather/WeekWeather';
import './Forecast.scss';
import TimeComponent from '../time_forecast/TimeComponent';
const Forecast = () => {
  const apiKey = 'd167c68a5b7f42baa4b85238231901 ';
  const [selectedCity, setSelectedCity] = useState('');

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className='forecast'>
      <WeatherData apiKey={apiKey} onCityChange={handleCityChange} />
      <HoursWeather apiKey={apiKey} city={selectedCity} />
      <WeekWeather apiKey={apiKey} city={selectedCity} />
    </div>
  );
};
export default Forecast;
