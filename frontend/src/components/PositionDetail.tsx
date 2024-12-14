import React from 'react';
import { useParams } from 'react-router-dom';
import { KanbanBoard } from '../features/position/components/KanbanBoard';

const PositionDetail = () => {
  const { id } = useParams();
  const positionId = id ? parseInt(id, 10) : 0;
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <KanbanBoard positionId={positionId} />
    </div>
  );
};

export default PositionDetail;