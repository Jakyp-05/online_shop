import { jsx as _jsx } from "react/jsx-runtime";
import { useRouteError } from "react-router-dom";
const ErrorBoundary = () => {
    const error = useRouteError();
    console.log(error);
    if (error instanceof Error) {
        return _jsx("div", { children: error.message });
    }
    else {
        return _jsx("div", { children: "Unknown error occurred" });
    }
};
export default ErrorBoundary;
