import React from 'react'
import Sidebar from './parts/sidebar'

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
    <Sidebar className="w-64 fixed h-full bg-white shadow-lg" />
    <div className="flex-1 ml-72 p-5 border-2 border-solid border-gray-200 rounded-lg shadow-lg hover:shadow-xl">
    <main className="flex-1 p-10">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Welcome to the Student Dashboard</h1>
        <button className="bg-[#3E6299] text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          New Activity
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Total Users</h2>
          <p className="text-3xl font-bold text-blue-600">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Active Events</h2>
          <p className="text-3xl font-bold text-green-600">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800">Total Attendance</h2>
          <p className="text-3xl font-bold text-purple-600">1,500</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Activities</h2>
        <ul>
          <li className="flex justify-between mb-2">
            <span className="text-gray-700">User John created an event.</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex justify-between mb-2">
            <span className="text-gray-700">Event ABC updated attendance count.</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
          <li className="flex justify-between mb-2">
            <span className="text-gray-700">Admin updated event details.</span>
            <span className="text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Attendance Chart</h2>
          <div className="h-64 bg-gray-200 rounded-lg">
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Event Participation</h2>
          <div className="h-64 bg-gray-200 rounded-lg">
          </div>
        </div>
      </div>
    </main>
    </div>
  </div>
  )
}
