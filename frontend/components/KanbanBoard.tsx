import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Column } from './Column';
import { usePositionData } from './usePositionData';
import { Candidate } from './types';
import { Sun, Moon, ArrowLeft } from 'lucide-react';
import { DragPreview } from './DragPreview';

interface KanbanBoardProps {
  positionId: number;
}

const DndBackend = ('ontouchstart' in window || navigator.maxTouchPoints) ? TouchBackend : HTML5Backend;

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ positionId }) => {
  const { position, candidates, loading, error } = usePositionData(positionId);
  const [localCandidates, setLocalCandidates] = useState<Candidate[]>([]);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') === 'dark';
    }
    return false;
  });

  useEffect(() => {
    if (candidates && candidates.length > 0) {
      setLocalCandidates(candidates);
    }
  }, [candidates]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-400">
        Error: {error}
      </div>
    );
  }

  if (!position) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-400">
        No position data available
      </div>
    );
  }

  const handleCandidateDrop = (candidateId: number, newStep: string) => {
    setLocalCandidates((prevCandidates) =>
      prevCandidates.map((candidate) => {
        if (candidate.id === candidateId) {
          const newScore = Math.min(5, Math.max(0, candidate.averageScore + (Math.random() - 0.5)));
          return { 
            ...candidate, 
            currentInterviewStep: newStep,
            averageScore: Number(newScore.toFixed(1))
          };
        }
        return candidate;
      })
    );
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <DndProvider backend={DndBackend}>
      <div className={`min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <button
                onClick={() => window.history.back()}
                className="mr-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
                aria-label="Go back"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {position.positionName}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {position.interviewFlow.description}
                </p>
              </div>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div className="flex flex-col md:flex-row gap-6 overflow-x-auto pb-6">
            {position.interviewFlow.interviewSteps
              .sort((a, b) => a.orderIndex - b.orderIndex)
              .map((step) => (
                <Column
                  key={step.id}
                  step={step}
                  candidates={localCandidates}
                  onCandidateDrop={handleCandidateDrop}
                />
              ))}
          </div>
        </div>
      </div>
      <DragPreview />
    </DndProvider>
  );
};

