import { Role } from './role';

export interface User {
    userId: number;
    email: string;
    firstName: string;
    lastName: string;
    role: Role;

    createdAt: Date;
    updatedAt: Date;
}
