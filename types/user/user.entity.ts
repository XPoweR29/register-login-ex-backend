export interface User {
    id?: string;
    username: string;
    email: string;
    pwd: string;
    refreshToken?: string;
}