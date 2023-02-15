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
  gpsLocation: string;
  name: string;

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

export interface System {
  systemId: number;
  name: string;
  contractorId: number;
  version: number;
  invalidated: boolean;
}