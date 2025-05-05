import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default function StudentLayout() {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (role === 'student') {
      setAllowed(true);
    } else {
      setAllowed(false);
    }
  }, []);

  if (allowed === null) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!allowed) {
    return <Navigate to="/student/dashboard" replace />;
  }

  return (
    <div className="flex">

      <main className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
