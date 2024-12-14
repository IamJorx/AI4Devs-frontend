import React from 'react';
import { useParams } from 'react-router-dom';

const PositionDetail = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h2>Position Details</h2>
      <p>Position ID: {id}</p>
    </div>
  );
};

export default PositionDetail;