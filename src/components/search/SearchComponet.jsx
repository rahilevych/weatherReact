import './SearchComponent.scss';
import { useState } from 'react';

const SearchComponent = ({ onSearch }) => {
  const [tempCity, setTempCity] = useState('');

  const handleSearchInputChange = (e) => {
    setTempCity(e.target.value);
  };
  const handleButtonClick = () => {
    onSearch(tempCity);
  };
  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      onSearch(tempCity);
    }
  };
  return (
    <div className='search'>
      <i className='fa-solid fa-location-dot'></i>
      <input
        type='text'
        placeholder='Enter your location'
        value={tempCity}
        onChange={handleSearchInputChange}
        onKeyDown={handleEnter}
      />
      <button onClick={handleButtonClick}>
        <i className='fa-solid fa-magnifying-glass'></i>
      </button>
    </div>
  );
};
export default SearchComponent;
