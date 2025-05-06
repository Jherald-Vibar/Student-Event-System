import React, { useState, useEffect } from 'react'

export default function AllEvents() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/events`)
        const data = await response.json()
        setEvents(data)
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    }

    fetchEvents()
  }, [])

  return (
    <div className="container mx-auto p-6">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((eve) => (
          <div
            key={eve.event_id}
            className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition relative"
          >
            <div className="w-full h-48 rounded-xl mb-4 overflow-hidden bg-gray-100 flex items-center justify-center">
              {eve.image ? (
                <img
                  src={`${import.meta.env.VITE_API_URL}/event_images/${eve.image}`}
                  alt={eve.event_name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={eventLogo}
                  alt="event logo"
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="flex items-center mb-2">
              <CalendarDaysIcon className="h-5 w-5 text-[#3E6299] mr-2" />
              <span className="text-gray-600 text-sm font-medium">
                {eve.date} — {eve.time}
              </span>
            </div>

            <h4 className="text-xl font-semibold text-gray-800 mb-2">
              {eve.event_name}
            </h4>

            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => openEditModal(eve)}
                className="bg-blue-500 text-white px-3 py-1.5 rounded hover:bg-blue-600 text-sm"
              >
                Edit
              </button>
              <button className="bg-red-500 text-white px-3 py-1.5 rounded hover:bg-red-600 text-sm">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
