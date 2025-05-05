import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./views/Login";
import GuestLayout from "./components/GuestLayout";
import Register from "./views/Register";
import AuthenticatedLayout from "./components/AuthenticatedLayout";
import Dashboard from "./views/Dashboard";
import AdminRole from "./views/AdminRole";
import StudentDashboard from "./views/StudentDashboard";
import AdminEvent from "./views/AdminEvent";
import StudentLayout from "./components/StudentLayout";
import AdminLayout from "./components/AdminLayout";

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
    element: <AuthenticatedLayout/>,
    children: [

      {
        path: '/admin',
        element: <AdminLayout/>,
        children: [
          { path: 'dashboard', element: <Dashboard/> },
          { path: 'admin-role', element: <AdminRole/> },
          { path: 'admin-event', element: <AdminEvent/> },
        ]
      },

      {
        path: '/student',
        element: <StudentLayout/>,
        children: [
          { path: 'dashboard', element: <StudentDashboard/> },
        ]
      }
    ]
  },

])

export default router;
