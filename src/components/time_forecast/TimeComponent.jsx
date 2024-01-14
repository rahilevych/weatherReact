import './TimeComponent.scss';
const TimeComponent = ({ data }) => {
  return (
    <div className='timecomponent__container'>
      <p className='timecomponent__time'>{data?.time}</p>
      <img src={data?.condition?.icon} alt='' className='timecomponent__icon' />

      <p className='timecomponent__temp'>{Math.round(data?.temp_c)}</p>
    </div>
  );
};
export default TimeComponent;
