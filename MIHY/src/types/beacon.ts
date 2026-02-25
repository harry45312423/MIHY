export type BeaconRequestStatus = 'pending' | 'processed' | 'consent_issue' | 'completed';

export interface BeaconRequest {
  id: string;
  studentName: string;
  studentPhone: string;
  requestDate: string;
  status: BeaconRequestStatus;
  adminName: string | null;
  adminNote: string | null;
  processedAt: string | null;
  completedAt: string | null;
  createdAt: string;
}
