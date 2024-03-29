export enum Subject {
    USER_AUTH = 'user_authentication',
    ROBOT_AUTH = 'robot_authentication',
    RESET_PASSWORD = 'reset_password',
    INVITE_USER = 'invite_user',
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
    role: string;
    subject: string;
    organizationId: number;
}
export interface CreateCustomer {
    name: string;
    streetAndNumber: string;
    city: string;
    zipCode: string;
    country: string;
}

export interface Customer extends CreateCustomer {
    customerId: number;
}

export interface Farm extends CreateCustomer {
    farmId: number;
}

export interface Contractor extends CreateCustomer {
    contractorId: number;
}

// model
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
    invalidated: boolean;
}
export interface GenerateToken {
    token: string;
}
export interface User {
    userId: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    role: string;
}
export interface UserInvitation {
    email: string;
    role: string;
    organizationId: number;
}
export interface Invitation {
    invitationId: number;
    userId: number;
    email: string;
    role: Role;
    expiresAt: Date;
    invalidated: boolean;
    accepted: boolean;
}
export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
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
