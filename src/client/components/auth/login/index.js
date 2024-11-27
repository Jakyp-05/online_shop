import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useLogin from "../../../hooks/useLogin";
const Login = () => {
    const { register, handleSubmit, onSubmit, errors } = useLogin();
    return (_jsx("section", { className: "login", children: _jsx("div", { className: "container login__container", children: _jsxs("form", { className: "login__form", onSubmit: handleSubmit(onSubmit), children: [_jsx("h2", { children: "Login" }), _jsxs("div", { className: "login__control", children: [_jsx("label", { htmlFor: "username", children: "Username" }), _jsx("input", { className: errors.username ? "login__error-input" : "", ...register("username"), placeholder: "Username" }), errors.username && (_jsx("p", { className: "login__error-text", children: errors.username.message }))] }), _jsxs("div", { className: "login__control", children: [_jsx("label", { htmlFor: "email", children: "Password" }), _jsx("input", { className: errors.password ? "login__error-input" : "", ...register("password"), placeholder: "Password" }), errors.password && (_jsx("p", { className: "login__error-text", children: errors.password.message }))] }), _jsx("button", { className: "login__button", type: "submit", children: "Get started" })] }) }) }));
};
export default Login;
