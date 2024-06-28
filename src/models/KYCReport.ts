export enum EKYCReportType {
  T1 = "t1",
  T2 = "t2",
  T3 = "t3",
}

export enum EKYCReportStatus {
  APPROVED = "approved",
  REJECTED = "rejected",
  CANCELLED = "cancelled",
  READY_FOR_REVIEW = "ready for review",
  IN_PROGRESS = "in progress"
}

export enum EKYCReportRisk {
  LOW = "low",
  MEDIUM = "medium",
  HIGH = "high",
}

export interface IKYCReport {
  id: number;
  name: string;
  email: string;
  type: EKYCReportType;
  status: EKYCReportStatus;
  riskScore: EKYCReportRisk | null;
  dateCreated: string;
}