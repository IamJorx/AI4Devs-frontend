import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import { Candidate } from '../types';

interface CandidateCardProps {
  candidate: Candidate;
}

export const CandidateCard: React.FC<CandidateCardProps> = ({ candidate }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    type: 'CANDIDATE',
    item: () => ({ id: candidate?.id, currentStep: candidate?.currentInterviewStep, candidate }),
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, [preview]);

  const getScoreBadgeColor = (score: number) => {
    if (score === 0) return 'bg-blue-500';
    if (score < 3) return 'bg-red-500';
    if (score < 4) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  if (!candidate) {
    return null;
  }

  return (
    <motion.div
      ref={drag}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isDragging ? 0.5 : 1, y: 0, scale: isDragging ? 0.95 : 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.2 }}
      className={`
        p-4 mb-4 rounded-xl
        bg-white dark:bg-card dark:backdrop-blur-sm
        border border-gray-200 dark:border-gray-700/50
        transition-all duration-200
        hover:border-gray-300 dark:hover:border-gray-600
        shadow-sm hover:shadow-md
        cursor-move
        ${isDragging ? 'opacity-0' : ''}
      `}
    >
      <h3 className="text-base font-medium text-gray-900 dark:text-gray-100 mb-2">
        {candidate.fullName}
      </h3>
      
      <div className="flex items-center justify-end">
        <span
          className={`
            px-2 py-0.5 rounded-full text-xs
            ${getScoreBadgeColor(candidate.averageScore)}
            text-white font-medium
          `}
        >
          {candidate.averageScore.toFixed(1)}
        </span>
      </div>
    </motion.div>
  );
};

