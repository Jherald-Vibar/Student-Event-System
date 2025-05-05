import { Navigate, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
export default function AdminLayout() {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'admin') {
      setAllowed(true);
    } else {
      setAllowed(false);
    }
  }, []);

  if (allowed === null) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!allowed) {
    return <Navigate to="/admin/dashboard" replace />;
  }
  return (
    <div className="flex">


      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
