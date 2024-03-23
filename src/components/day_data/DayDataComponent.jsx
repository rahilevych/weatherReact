import { useState, useEffect } from 'react';
import axios from 'axios';
import './DayDataComponent.scss';
const DayDataComponent = ({ city, apiKey }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
        );
        if (response.status === 200) {
          setWeatherData(response.data);
          console.log(response.data);
          setError(null);
        } else if (response.status === 404) {
          setError('Please try again, city not find ');
        }
      } catch (error) {
        console.error(error);
        setError('Please try again, city not find ');
      }
    };
    if (city && apiKey) {
      fetchWeatherData();
    }
  }, [city]);
  return (
    <div className='weather'>
      {weatherData && !error ? (
        <div className='weather__data'>
          <div className='weather__icon'>
            <img src={weatherData?.current?.condition?.icon} alt='' />
          </div>
          <p className='weather__temp'>
            {Math.round(weatherData?.current?.temp_c)}
            <sup>&#8451;</sup>
          </p>
          <p className='weather__text'>
            {weatherData?.current?.condition?.text}
          </p>
          <div className='weather__add'>
            <div className='weather__humidity'>
              <div className='weather__img'>
                <i className='fa-solid fa-water'></i>
              </div>
              <div className='weather__info'>
                <p className='weather__measure'>
                  {weatherData?.current?.humidity + '%'}
                </p>
                <p className='weather__txt'>Humidity</p>
              </div>
            </div>
            <div className='weather__wind'>
              <div className='weather__img'>
                <i className='fa-solid fa-wind'></i>
              </div>
              <div className='weather__info'>
                <p className='weather__measure'>
                  {weatherData?.current?.wind_kph + 'Km/h'}
                </p>
                <p className='weather__txt'>Wind Speed</p>
              </div>
            </div>
          </div>{' '}
        </div>
      ) : (
        <p className='weather__temp'>{error}</p>
      )}
    </div>
  );
};
export default DayDataComponent;
