import App from "@/app/layouts/App";
import { Login } from "@/pages/Login/ui/Login";
import { MainPage } from "@/pages/MainPage/ui/MainPage";
import { QuestionPage } from "@/pages/QuestionPage/ui/QuestionPage";
import { Register } from "@/pages/Register/ui/Register";
import { routePaths } from "@/shared/config/routePaths";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: routePaths.main,
        element: <MainPage />,
      },
      { path: routePaths.questionPage, element: <QuestionPage></QuestionPage> },
      { path: routePaths.register, element: <Register /> },
      { path: routePaths.login, element: <Login /> },
    ],
  },
]);

export function AppRouter() {
  return <RouterProvider router={router} />;
}
