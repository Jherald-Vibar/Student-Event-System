import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";
import Register from "./views/Register";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import Dashboard from "./views/Dashboard";

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
    path: '/user',
    element: <AuthenticatedLayout/>,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard/>
      },
    ]
  }
])

export default router;
