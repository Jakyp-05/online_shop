import { ReactNode } from "react";
export interface IFormInput {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}
export interface Sidebar {
    id: number;
    menuText: string;
    menuLink: string;
}
export interface Routes {
    id: number;
    path: string;
    element: ReactNode;
}
