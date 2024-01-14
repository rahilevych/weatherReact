import './DayComponent.scss';
const DayComponent = ({ data }) => {
  return (
    <div className='day'>
      <div className='day__name'>{data?.date}</div>
      <div className='day__icon'>
        <img src={data?.day?.condition?.icon} alt='' />
      </div>
      <div className='day__daytmp'>{Math.round(data?.day?.maxtemp_c)}</div>
      <div className='day_nighttmp'>{Math.round(data?.day?.mintemp_c)}</div>
    </div>
  );
};
export default DayComponent;
