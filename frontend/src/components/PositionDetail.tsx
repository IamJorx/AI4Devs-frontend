import React from 'react';
import { useParams } from 'react-router-dom';
import { KanbanBoard } from '../features/positions/components/KanbanBoard';

const PositionDetail = () => {
  const { id } = useParams();
  
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <KanbanBoard positionId={Number(id)} />
    </div>
  );
};

export default PositionDetail;