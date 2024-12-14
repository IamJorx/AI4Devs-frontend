import React from 'react';
import { useDragLayer } from 'react-dnd';
import { Candidate } from '../types';

export const DragPreview: React.FC = () => {
  const { isDragging, item, currentOffset } = useDragLayer((monitor) => ({
    item: monitor.getItem() as { candidate: Candidate },
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  if (!isDragging || !currentOffset) {
    return null;
  }

  const { candidate } = item;

  return (
    <div
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 100,
        left: currentOffset.x,
        top: currentOffset.y,
      }}
      className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700 w-[300px]"
    >
      <h3 className="text-base font-medium text-gray-900 dark:text-gray-50 mb-2">
        {candidate.fullName}
      </h3>
      <div className="flex items-center justify-end">
        <span className="px-2 py-0.5 rounded-full text-xs bg-blue-500 text-white font-medium">
          {candidate.averageScore.toFixed(1)}
        </span>
      </div>
    </div>
  );
};

