import { Position, Candidate } from '../../../types';

export const mockPosition: Position = {
  positionName: "Senior backend engineer",
  interviewFlow: {
    id: 1,
    description: "Standard development interview process",
    interviewSteps: [
      {
        id: 1,
        interviewFlowId: 1,
        interviewTypeId: 1,
        name: "Initial Screening",
        orderIndex: 1
      },
      {
        id: 2,
        interviewFlowId: 1,
        interviewTypeId: 2,
        name: "Technical Interview",
        orderIndex: 2
      },
      {
        id: 3,
        interviewFlowId: 1,
        interviewTypeId: 3,
        name: "Manager Interview",
        orderIndex: 3
      }
    ]
  }
};

export const mockCandidates: Candidate[] = [
  {
    id: 1,
    fullName: "Jane Smith",
    currentInterviewStep: "Technical Interview",
    averageScore: 4
  },
  {
    id: 2,
    fullName: "Carlos García",
    currentInterviewStep: "Initial Screening",
    averageScore: 0
  },
  {
    id: 3,
    fullName: "John Doe",
    currentInterviewStep: "Manager Interview",
    averageScore: 5
  }
];

