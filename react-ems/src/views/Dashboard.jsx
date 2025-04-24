import React from 'react'

export default function Dashboard() {

  const admins = [
    { email: "Admin1@gmail.com", name: "Daniela Ferreras" },
    { email: "Admin2@gmail.com", name: "Alah Mikhaela Calma" },
    { email: "Admin3@gmail.com", name: "Vincent Orpilla" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
    {/* Sidebar */}
    <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Admin</h1>
      <nav className="space-y-4">



      </nav>
    </aside>

    {/* Main Content */}
    <main className="flex-1 p-10">
      <div className="bg-white rounded-xl shadow-md p-6 max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Admin Role Management</h2>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Add Admin
          </button>
        </div>

        <div className="space-y-4">
          {admins.map((admin, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border rounded-lg shadow-sm"
            >
              <div>
                <p className="font-semibold">{admin.email}</p>
                <p className="text-sm text-gray-500">{admin.name}</p>
              </div>
              <button className="text-red-500 font-bold text-xl">×</button>
            </div>
          ))}
        </div>
      </div>
    </main>
  </div>
    );
}
