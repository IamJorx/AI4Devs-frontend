import React from 'react';
import { useParams } from 'react-router-dom';

const PositionDetail = () => {
  const { id } = useParams();
  
  return (
    <div className='bg-red-700 p-4 border-2 border-red-900'>
      <h2 className='text-3xl font-bold underline'>Position Details</h2>
      <p>Position ID: {id}</p>
    </div>
  );
};

export default PositionDetail;