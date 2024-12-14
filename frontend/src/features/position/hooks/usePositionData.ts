import { useState, useEffect } from 'react';
import { Position, Candidate } from '../types';
import { getPositionInterviewFlow, getPositionCandidates } from '../../../services/positionService';
import { updateCandidateStage } from '../../../services/candidateService';

export const usePositionData = (positionId: number) => {
  const [position, setPosition] = useState<Position | null>(null);
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [positionData, candidatesData] = await Promise.all([
        getPositionInterviewFlow(positionId),
        getPositionCandidates(positionId)
      ]);
      
      setPosition(positionData);
      setCandidates(candidatesData);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al cargar los datos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [positionId]);

  const updateStage = async (candidateId: number, applicationId: number, currentInterviewStep: number) => {
    try {
      await updateCandidateStage(candidateId, applicationId, currentInterviewStep);
      await fetchData();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar el stage');
    }
  };

  return { position, candidates, loading, error, updateStage };
};

