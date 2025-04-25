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
          .then((response) => {
            setIsAuthenticated(true);
          })
          .catch(() => {
            setIsAuthenticated(false);
          })
          .finally(() => setLoading(false));
      })
      .catch(() => {
        setIsAuthenticated(false);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div>
          <div className="spinner"></div>
          <div className="loading-text">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/guest/login" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}
