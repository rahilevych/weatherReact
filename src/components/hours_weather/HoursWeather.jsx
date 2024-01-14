import { useEffect, useState } from 'react';
import TimeComponent from '../time_forecast/TimeComponent';
import './hoursWeather.scss';
import axios from 'axios';
const HoursWeather = ({ apiKey, city }) => {
  const [hourData, setHourData] = useState([]);

  useEffect(() => {
    const fetchHoursData = async () => {
      try {
        const response = await axios.get(
          `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}`
        );
        const hourData = response.data?.forecast?.forecastday[0]?.hour || [];

        const formattedHourData = hourData.map((hour) => {
          const dateTime = new Date(hour.time);
          const timeOnly = new Intl.DateTimeFormat('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
          }).format(dateTime);
          return { ...hour, time: timeOnly };
        });

        // Фильтруем данные, оставляя только каждый четвёртый час
        const filteredHourData = formattedHourData.filter(
          (hour, index) => index % 3 === 0
        );

        setHourData(filteredHourData);
        console.log(response.data);
      } catch (error) {
        console.error('Fetch error', error);
      }
    };
    if (city) {
      fetchHoursData();
    }
  }, [apiKey, city]);

  return (
    <div className='hours__container'>
      {hourData.map((hour, index) => (
        <TimeComponent key={index} data={hour} />
      ))}
    </div>
  );
};
export default HoursWeather;
