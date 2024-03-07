import { useState } from 'react';
import SearchComponent from '../search/SearchComponet';
import DayDataComponent from '../day_data/DayDataComponent';
import './Forecast.scss';
const Forecast = () => {
  const apiKey = 'c37558554d0b48969d1231457242802';
  const [selectedCity, setSelectedCity] = useState('');

  const handleSearch = (city) => {
    setSelectedCity(city);
  };

  return (
    <div className='forecast'>
      <SearchComponent onSearch={handleSearch} />
      <DayDataComponent city={selectedCity} apiKey={apiKey} />
    </div>
  );
};
export default Forecast;
