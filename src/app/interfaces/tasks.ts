export interface TaskItem {
    ID: number;
    title: string;
    description: string;
    deadline: string;
    user_id: number;
    completed: boolean;
    created_at?: string;
    updated_at?: string;
}