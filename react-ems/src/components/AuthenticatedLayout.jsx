// src/layouts/AuthenticatedLayout.jsx
import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import axiosClient, { getCsrfToken } from '../views/axios';

export default function AuthenticatedLayout() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCsrfToken()
      .then(() => {
        axiosClient.get('/auth/check')
          .then(() => setIsAuthenticated(true))
          .catch(() => setIsAuthenticated(false))
          .finally(() => setLoading(false));
      })
      .catch(() => {
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/guest/login" replace />;
  }

  return <Outlet />;
}
