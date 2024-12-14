import { useState, useEffect } from 'react';
import { Position, Candidate } from './types';
import { mockPosition, mockCandidates } from './mockData';

export const usePositionData = (positionId: number) => {
  const [position, setPosition] = useState<Position | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulamos una carga asíncrona
    const timer = setTimeout(() => {
      setPosition(mockPosition);
      setCandidates(mockCandidates);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [positionId]);

  return { position, candidates, loading, error };
};

