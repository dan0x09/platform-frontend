import { StringLiteral } from 'typescript';

export interface Credentials {
  email: string;
  password: string;
}

export enum Role {
  OWNER = 'owner',
  CONTRACTOR = 'contractor',
  FARMER = 'farmer',
  ADMIN = 'admin',
  GUEST = 'guest',
}

export interface UserTokenPayload {
  uid: number;
  role: Role;
  organizationId: number;
  sub: string;
  iat: number;
  exp: number;
}

export interface SilageHeap {
  systemId: number;
  silageHeapId: number;
  name: string;
  bucketUrl: string;
  width: number;
  depth: number;
  snapshotId: number | null;
  coordinates: number[][] | null;
  consumedAt: number | null;
  harvestFinishedAt: number | null;

  createdAt: Date;
  updatedAt: Date;
}

export interface SilageHeapWithUrls {
  silageHeap: SilageHeap;
  urls: {
    volumeMap: string;
    volumeModel: string;
    interactiveVolumeModel: string;
  };
}

export interface ContractorSilageHeapWithUrls {
  contractorSilageHeaps: {
    contractorId: number;
    description: string;
    silageHeap: SilageHeap;
  };
  urls: {
    volumeMap: string;
    volumeModel: string;
    interactiveVolumeModel: string;
  };
}

export interface ContractorSilageHeapWithSnapshots {
  contractorSilageHeaps: {
    contractorId: number;
    description: string;
    silageHeap: SilageHeapWithSnapshots;
  };
}

export interface SilageHeapWithSnapshots extends SilageHeap {
  silageSnapshots: SilageSnapshot[];
}

export interface SilageSnapshot {
  snapshotId: number;
  snapshotTimestamp: number;
  gridMap: unknown;
  height: number;
  volume: number;
  description: string;
  isHarvestFinished: boolean;
  isConsumed: boolean;

  updatedAt: Date;
}

export interface Contractor {
  contractorId: number;
  name: string;
  streetAndNumber: string;
  zipCode: string;
  city: string;
  country: string;
}

export interface System {
  systemId: number;
  name: string;
  contractorId: number;
  version: number;
  description: string;
  invalidated: boolean;
}

export interface Farm {
  farmId: number;
  name: string;
  streetAndNumber: string;
  city: string;
  zipCode: string;
  country: string;
}
