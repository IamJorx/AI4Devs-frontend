import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDrop } from 'react-dnd';
import { CandidateCard } from './CandidateCard';
import { Candidate, InterviewStep } from './types';

interface ColumnProps {
  step: InterviewStep;
  candidates: Candidate[];
  onCandidateDrop: (candidateId: number, newStep: string) => void;
}

export const Column: React.FC<ColumnProps> = ({ step, candidates, onCandidateDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: 'CANDIDATE',
    drop: (item: { id: number }) => onCandidateDrop(item.id, step.name),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const getColumnColor = (stepName: string) => {
    switch (stepName) {
      case 'Initial Screening':
        return 'bg-blue-500/20 border-blue-500/40';
      case 'Technical Interview':
        return 'bg-purple-500/20 border-purple-500/40';
      case 'Manager Interview':
        return 'bg-green-500/20 border-green-500/40';
      default:
        return 'bg-gray-500/20 border-gray-500/40';
    }
  };

  return (
    <div
      ref={drop}
      className={`
        flex-1 min-w-[300px] max-w-[350px] h-[calc(100vh-2rem)]
        rounded-xl p-4
        ${getColumnColor(step.name)}
        transition-colors duration-200
        ${isOver && canDrop ? 'bg-blue-100 dark:bg-blue-900/30' : ''}
        border-2
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-lg font-semibold text-gray-900 dark:text-gray-100"
        >
          {step.name}
        </motion.h2>
      </div>
      
      <div className="overflow-y-auto h-[calc(100%-3rem)] pr-2 space-y-3 px-2">
        <AnimatePresence>
          {candidates
            .filter((candidate) => candidate.currentInterviewStep === step.name)
            .map((candidate) => (
              <CandidateCard key={candidate.id} candidate={candidate} />
            ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

