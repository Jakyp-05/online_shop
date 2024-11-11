import useRouters from "../hooks/useRouters";
import { Routes } from "../../interface";

const { AdminHomePage, AdminProductsPage, AdminSettinsPage } = useRouters();

export const routesData: Routes[] = [
  { id: 1, path: "/admin/home", element: AdminHomePage },
  { id: 2, path: "/admin/products", element: AdminProductsPage },
  { id: 3, path: "/admin/settins", element: AdminSettinsPage },
  {
    id: 4,
    path: "/admin/products/category/:categoryName",
    element: AdminProductsPage,
  },
];
