import React from "react";
import { Product } from "@api/types/productTypes";
type IProps = {
    item: Product;
    isCatalog?: boolean;
};
declare const Card: React.FC<IProps>;
export default Card;
