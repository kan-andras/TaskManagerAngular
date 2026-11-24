export interface User {
    ID: number;
    username: string;
    email: string;
    password: string;
    confirmedPassword?: string;
    role: 'admin' | 'user';
    created_at?: string;
    updated_at?: string;
}