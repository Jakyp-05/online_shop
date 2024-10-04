import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./sass/styles.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import { SkeletonTheme } from "react-loading-skeleton";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </SkeletonTheme>
  </StrictMode>
);
