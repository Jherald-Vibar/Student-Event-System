import React from 'react'
import Sidebar from './parts/sidebar'

export default function AdminEvent() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 ml-64 mt-20">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold underline text-blue-900 mb-6">Event Management</h1>

          <form className="space-y-6">
            <div>
              <label className="block font-medium mb-1">Title</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter event title"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Description</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  placeholder="Enter description"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-1">Participation Limit</label>
              <select className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300">
                <option>Select limit</option>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto"
            >
              Save Event
            </button>
          </form>

          <h2 className="text-2xl font-semibold mt-10 mb-4">Upcoming Events</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300 text-sm text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border px-4 py-2">Title</th>
                  <th className="border px-4 py-2">Date</th>
                  <th className="border px-4 py-2">Time</th>
                  <th className="border px-4 py-2">Participants</th>
                  <th className="border px-4 py-2 text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { title: 'Workshop', date: '04/20/2024', time: '10:00 AM' },
                  { title: 'Seminar', date: '04/20/2024', time: '10:00 AM' },
                  { title: 'Culture Event', date: '04/20/2024', time: '10:00 AM' },
                ].map((event, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="border px-4 py-2">{event.title}</td>
                    <td className="border px-4 py-2">{event.date}</td>
                    <td className="border px-4 py-2">{event.time}</td>
                    <td className="border px-4 py-2 text-center">-</td>
                    <td className="border px-4 py-2 flex justify-center space-x-2">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm">
                        Edit
                      </button>
                      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
