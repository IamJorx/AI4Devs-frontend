import React from 'react';
import { KanbanBoard } from './KanbanBoard';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <KanbanBoard positionId={1} />
    </div>
  );
};

export default App;

