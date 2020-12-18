import { FarmerComponent } from 'src/app/farmer/farmer.component';

export enum Subject {
    USER_AUTH = 'user_authentication',
    ROBOT_AUTH = 'robot_authentication',
    RESET_PASSWORD = 'reset_password',
    INVITE_USER = 'invite_user'
}
export enum Role {
    OWNER = "owner",
    CONTRACTOR = 'contractor',
    FARMER = 'farmer',
    ADMIN = 'admin'
}
export interface UserTokenPayload {
    uid: number;
    role: string;
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
    customerId: string;
}

export interface Farmer extends CreateCustomer {
    farmerId: string;
}

export interface Contractor extends CreateCustomer {
    contractorId: string;
}