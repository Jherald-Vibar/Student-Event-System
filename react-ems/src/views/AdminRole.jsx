import React, { useEffect, useState } from 'react'
import Sidebar from './parts/sidebar'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import axiosClient from './axios';


export default function AdminRole() {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');


  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddAdmin = async (e) => {
    e.preventDefault();

    if(!email || !name || !password) {
      setError('All fields required to have an Input!');
      return;
    }

    try {
      const response = await axiosClient.post('/admin', {
        email,
        name,
        password,
      });

      setIsModalOpen(false);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Failed to create Admin');
    }

  };

  const openAdminModal = () => {
    setIsModalOpen(true);
  }

  const closeAdminModal = () => {
    setIsModalOpen(false);
  }

  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
    useEffect(() => {
      const fetchAdmins = async () => {
        try {
          const response = await axiosClient.get('http://localhost:8000/api/admins');
          setAdmins(response.data);
          setLoading(false);
          // eslint-disable-next-line no-unused-vars
        } catch (error) {
          setError('Error fetching data');
          setLoading(false);
        }
      };

        fetchAdmins();
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

      if (error) {
        return <div>{error}</div>;
      }



  return (
    <>
   <div className="flex min-h-screen bg-gray-100">
  <Sidebar className="w-64 fixed h-full bg-white shadow-lg" />
  <div className="flex-1 ml-72 p-5 border-2 border-solid border-gray-200 rounded-lg shadow-lg hover:shadow-xl">
    <main className="flex-1 p-10">
      <div className="title flex justify-start items-center">
        <p className="font-bold font-serif text-2xl">Admin Role Management</p>
      </div>
      <div className="flex justify-end items-center">
        <button className="flex justify-between items-center p-3 bg-[#3E6299] rounded-lg" onClick={() => openAdminModal()}>
          <UserPlusIcon className="w-6 h-6 mr-2 text-white"/>
          <span className="font-bold font-serif text-sm text-white">
            Admin
          </span>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center mt-5 gap-2">
        {admins.map((admin) => (
          <div className="w-full mx-auto card p-5 border-2 border-solid border-black rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" key={admin.id}>
            <h1 className="font-serif font-semibold text-2xl ">{admin.name}</h1>
            <span>{admin.email}</span>
          </div>
        ))}
      </div>
    </main>
  </div>

  {isModalOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="modal-content bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-bold mb-4">Add New Admin</h2>
        <form onSubmit={handleAddAdmin}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2"
            >
              Add Admin
            </button>
            <button
              type="button"
              onClick={closeAdminModal}
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
    </>
  )
}
