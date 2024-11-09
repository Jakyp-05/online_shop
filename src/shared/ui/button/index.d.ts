import React from "react";
import "./button.scss";
type IProps = {
    onclick?: () => void;
    bg?: string;
    role: string;
};
declare const Button: React.FC<IProps>;
export default Button;
