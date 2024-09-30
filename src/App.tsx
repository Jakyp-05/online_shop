import MyRoutes from "./router/routes";
import { withErrorBoundary } from "react-error-boundary";

function App() {
  return <MyRoutes />;
}

export default withErrorBoundary(App, {
  fallback: <div>Something went wrong</div>,
});
