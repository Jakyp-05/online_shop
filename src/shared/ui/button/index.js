import { jsx as _jsx } from "react/jsx-runtime";
import "./button.scss";
const Button = ({ onclick, bg, role }) => {
    return (_jsx("button", { className: `btn ${bg}`, onClick: onclick, children: role }));
};
export default Button;
