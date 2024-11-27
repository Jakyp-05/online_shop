import { jsx as _jsx } from "react/jsx-runtime";
import { withErrorBoundary } from "react-error-boundary";
import MyRoutes from "./routes";
function App() {
    return _jsx(MyRoutes, {});
}
export default withErrorBoundary(App, {
    fallback: _jsx("div", { children: "Something went wrong" }),
});
