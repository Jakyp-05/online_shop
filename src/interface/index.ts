import { ReactNode } from "react";

export interface IFormRegister {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface IFormLogin {
  username: string;
  password: string
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
