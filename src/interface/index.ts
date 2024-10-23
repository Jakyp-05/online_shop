import { ReactNode } from "react";

export interface IFormInput {
  username: string;
  password: string;
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
