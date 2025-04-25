import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";
import Register from "./views/Register";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import Dashboard from "./views/Dashboard";
import AdminRole from "./views/AdminRole";

const router =  createBrowserRouter ([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/guest',
    element: <GuestLayout/>,
    children: [
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'register',
        element: <Register/>
      },
    ]
  },

  {
    path: '/admin',
    element: <AuthenticatedLayout/>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard/>
      },

      {
        path: 'admin-role',
        element: <AdminRole/>
      },
    ]
  }
])

export default router;
