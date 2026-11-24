export interface Msg {
    type: 'info' | 'success' | 'warning' | 'error' | 'danger';
    title: string;
    message: string;
    icon?: string;
}