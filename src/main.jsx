// main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import StoreProvider from "./context/storeProvider.jsx";
import { Toaster } from "react-hot-toast";
import "./index.css";

// Public website
import FrontendLayout from "./components/FrontendLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

// Admin
import Login from "./admin/pages/Login.jsx";
import MainLayout from "./components/MainLayout.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import AddJournal from "./admin/pages/AddJournal.jsx";
// import ManageHome from "./admin/pages/ManageHome.jsx";
// import ManageAbout from "./admin/pages/ManageAbout.jsx";

// Protection
import ProtectDashboard from "./admin/components/ProtectDashboard.jsx";
import ProtectRole from "./admin/components/ProtectRole.jsx";

// Errors
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  //
  // PUBLIC WEBSITE
  //
  {
    path: "/",
    element: <FrontendLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },

  //
  // LOGIN PAGE
  //
  {
    path: "/admin/login",
    element: <Login />,
  },

  //
  // ADMIN (protected)
  //
  {
    path: "/admin",
    element: <ProtectDashboard />, // must have valid token
    errorElement: <ErrorPage />,
    children: [
      {
        element: <MainLayout />,
        children: [
          {
            element: <ProtectRole role="admin" />, // must be admin
            children: [
              { index: true, element: <AdminDashboard /> },
              { path: "journal/add", element: <AddJournal /> },
              // { path: "home", element: <ManageHome /> },
              // { path: "about", element: <ManageAbout /> },
            ],
          },
        ],
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <Toaster position="top-right" />
        <RouterProvider router={router} />
      </StoreProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
