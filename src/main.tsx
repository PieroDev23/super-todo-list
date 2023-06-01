import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Layout from "./components/layout/layout.component";
import Home from "./pages/home/home.page";
import Pending from "./pages/pending/pending.page";
import Finished from "./pages/finished/finished.page";
import TodosProvider from "./context/todo.context";
import ScoreProvider from "./context/score.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/pending",
        element: <Pending />,
      },
      {
        path: "/finished",
        element: <Finished />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TodosProvider>
      <ScoreProvider>
        <RouterProvider router={router}></RouterProvider>
      </ScoreProvider>
    </TodosProvider>
  </React.StrictMode>
);
