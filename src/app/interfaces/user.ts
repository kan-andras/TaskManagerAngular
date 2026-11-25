export interface User {
    ID: number;
    name: string;
    email: string;
    password: string;
    confirm?: string;
    role: 'admin' | 'user';
    created_at?: string;
    updated_at?: string;
}