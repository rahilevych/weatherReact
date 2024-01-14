import axios from 'axios';
import { useEffect, useState } from 'react';
import DayComponent from '../day_forecast/DayComponent';

const WeekWeather = ({ apiKey, city }) => {
  const [days, setDays] = useState([]);
  useEffect(() => {
    const fetchDayData = async () => {
      try {
        const response = await axios.get(
          `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3`
        );
        const days = response.data?.forecast?.forecastday || [];
        setDays(days);
        console.log(response.data);
        console.log(days);
        console.log(days[0].date);
      } catch (error) {
        console.error(error);
      }
    };
    if (city) {
      fetchDayData();
    }
  }, [apiKey, city]);
  return (
    <div className='week'>
      {days.map((day, index) => (
        <DayComponent key={index} data={day} />
      ))}
    </div>
  );
};
export default WeekWeather;
