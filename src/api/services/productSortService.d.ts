import { Product } from "../types/productTypes";
export declare const getProductSort: ({ sortBy, order, }: {
    sortBy: string;
    order: "asc" | "desc";
}) => Promise<Product[]>;
