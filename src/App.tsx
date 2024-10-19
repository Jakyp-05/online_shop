import { withErrorBoundary } from "react-error-boundary";
import MyRoutes from "./routes";

function App() {
  return <MyRoutes />;
}

export default withErrorBoundary(App, {
  fallback: <div>Something went wrong</div>,
});
