import React, { useEffect, useState } from 'react';
import Sidebar from './parts/sidebar';
import axiosClient from './axios';
import { useNavigate } from 'react-router-dom';
import eventLogo from '../images/events.jpg';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';

export default function AdminEvent() {
  const [event_name, setEventName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isEditModalOpen, setIsModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [editEventName, setEditEventName] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editTime, setEditTime] = useState('');
  const [editImageFile, setEditImageFile] = useState(null);

  const navigate = useNavigate();

  const openEditModal = (event) => {
    setSelectedEvent(event);
    setEditEventName(event.event_name);
    setEditDate(event.date);
    setEditTime(event.time);
    setEditImageFile(null);
    setIsModalOpen(true);
  }

  const closeEditModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  }

  const fetchEvents = async () => {
    try {
      const response = await axiosClient.get('/admin/events');
      setEvents(response.data);
      setLoading(false);
    } catch (err) {
      setError('Error fetching events.');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
    const intervalId = setInterval(fetchEvents, 5000);
    return () => clearInterval(intervalId);
  }, []);

  const handleAddEvent = async (e) => {
    e.preventDefault();
    if (!event_name || !date || !time) {
      setError('All fields are required');
      return;
    }

    const admin_id = localStorage.getItem('admin_id');
    if (!admin_id) {
      setError('Admin is not logged in');
      return;
    }

    const formData = new FormData();
    formData.append('event_name', event_name);
    formData.append('date', date);
    formData.append('time', time);
    formData.append('admin_id', admin_id);
    if (imageFile) {
      formData.append('image', imageFile);
    }

    try {
      await axiosClient.post('/admin/event', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      setEventName('');
      setDate('');
      setTime('');
      setImageFile(null);
      setError(null);
      fetchEvents();
    } catch (err) {
      setError('Event creation failed');
    }
  };

  const handleUpdateEvent = async (e) => {
    e.preventDefault();
    if (!selectedEvent) return;

    const formData = new FormData();
    formData.append('event_name', editEventName);
    formData.append('date', editDate);
    formData.append('time', editTime);
    if (editImageFile) {
      formData.append('image', editImageFile);
    }

    formData.append('_method', 'PUT');

    try {
      const response = await axiosClient.post(`/admin/event/${selectedEvent.event_id}/edit`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });


      setEditEventName('');
      setEditDate('');
      setEditTime('');
      setEditImageFile('');
      closeEditModal();
      fetchEvents();

    } catch (err) {
      console.error('Error updating event:', err.response || err);

      if (err.response && err.response.data.errors) {
        alert('Validation errors: ' + JSON.stringify(err.response.data.errors));
      } else {
        alert('Failed to update event.');
      }
    }
  };
  if (loading) {
    return (
      <div className="loading-screen flex items-center justify-center h-screen">
        <div className="spinner"></div>
        <div className="loading-text ml-2">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-6 ml-64 mt-20">
        <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow">
          <h1 className="text-3xl font-bold text-blue-900 mb-6">Event Management</h1>

          {error && <div className="text-red-500 mb-4">{error}</div>}

          {/* Add Event Form */}
          <form onSubmit={handleAddEvent} className="space-y-6 mb-10">
            <div>
              <label className="block font-medium mb-1">Event Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter event title"
                value={event_name}
                onChange={(e) => setEventName(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div>
                <label className="block font-medium mb-1">Time</label>
                <input
                  type="time"
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>

              <div>
                <label>Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={e => setImageFile(e.target.files[0])}
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full md:w-auto"
            >
              Save Event
            </button>
          </form>

          {/* Event List */}
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
      </main>

      {/* Edit Modal */}
      {isEditModalOpen && selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
            <form onSubmit={handleUpdateEvent}>
              <div className="mb-4">
                <label className="block text-gray-700">Event Name</label>
                <input
                  type="text"
                  value={editEventName}
                  onChange={(e) => setEditEventName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Event Date</label>
                <input
                  type="date"
                  value={editDate}
                  onChange={(e) => setEditDate(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Event Time</label>
                <input
                  type="time"
                  value={editTime}
                  onChange={(e) => setEditTime(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Image (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setEditImageFile(e.target.files[0])}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
                >
                  Update Event
                </button>
                <button
                  type="button"
                  onClick={closeEditModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
