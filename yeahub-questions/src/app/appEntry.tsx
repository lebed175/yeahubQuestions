import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AppRouter } from "./providers/router/router.tsx";
import { store } from "./appStore.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </StrictMode>
);
