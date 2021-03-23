import React from 'react';
const List = (props) => {
  const { cars } = props;
  if (!cars || cars.length === 0) return <p>No cars, sorry</p>;
  return (
    <ul>
      <h2 className='list-head'>Available Cars</h2>
      {cars.map((car) => {
        return (
          <li key={car.car_id} className='list'>
            <span className='car-brand'>{car.brand} </span>
            <span className='car-make'>{car.make}</span>
            <span className='car-price'>{car.price}</span>
            <span className='car-image'>{car.image}</span>
          </li>
        );
      })}
    </ul>
  );
};
export default List;