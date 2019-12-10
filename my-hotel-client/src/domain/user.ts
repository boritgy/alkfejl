import { UserRole } from './user-role';

export interface User {
    id: number;
    name: string;
    username: string;
    password: string;
    role: UserRole;
}