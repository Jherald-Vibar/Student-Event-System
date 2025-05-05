import React from 'react'
import Logo from '../../images/SPCC-EMS.png';
import { UserIcon } from '@heroicons/react/24/solid';
import { ChartBarIcon } from '@heroicons/react/24/outline';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { UserPlusIcon } from '@heroicons/react/24/outline';
import '../../style.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


function Sidebar() {

  const handleLogout = () => {
    Swal.fire({
      title: "Do you want to Logout?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        const token = localStorage.getItem('authToken');
        if (token) {
          axios.post('http://localhost:8000/api/logout', {}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(response => {

            localStorage.removeItem('authToken');
            window.location.href = '/guest/login';
            Swal.fire("Logged out!", "You have successfully logged out.", "success");
          })
          .catch(error => {
            Swal.fire("Error!", "There was an issue logging you out.", "error");
          });
        }
      } else if (result.isDenied) {
        Swal.fire("User Still Logged in!");
      }
    });
  };
  return (
    <div className="fixed top-0 left-0 h-full w-[20rem] bg-clip-border p-4 text-gray-700 shadow-xl shadow-blue-gray-900/5"
    style={{ background: 'linear-gradient(to bottom, #67A4FF 1%, #3E6299 100%)' }}>
    <div className="flex items-center gap-4 p-4 mb-2">
      <img src={Logo} alt="brand" className="w-16 h-16" />
      <h5 className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-white">
        EduEvent
      </h5>
    </div>
    <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-blue-gray-700">
      <div className="relative block w-full">
        <div role="button"
          className="flex bg-white items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <button type="button"
            className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div className="grid mr-4 place-items-center">
              <ChartBarIcon className='h-6 w-6 text-blue-gray-700'/>
            </div>
            <p className="block mr-auto font-sans text-base antialiased font-bold leading-relaxed text-blue-gray-900">
              Dashboard
            </p>
          </button>
        </div>
      </div>
      <Link/>
      <div className="relative block w-full">
        <div role="button"
          className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <button type="button" onClick={() => window.location.href = "/admin/admin-role"}
            className="adminRole flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div className="grid mr-4 place-items-center">
              <UserPlusIcon className="adminIcon h-6 w-6 text-blue-gray-700" />
            </div>
            <p className="block mr-auto font-sans text-base antialiased leading-relaxed text-blue-gray-900">
              Admin Role
            </p>
          </button>
        </div>
      </div>
      <hr className="my-2 border-blue-gray-50" />
      <div className="relative block w-full">
        <div role="button"
          className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <button type="button" onClick={() => window.location.href = "/admin/admin-event"}
            className="adminRole flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-blue-gray-100 text-blue-gray-700 hover:text-blue-gray-900">
            <div className="grid mr-4 place-items-center">
              <CalendarIcon className="adminIcon h-6 w-6 text-blue-gray-700" />
            </div>
            <p className="block mr-auto font-sans text-base antialiased leading-relaxed text-blue-gray-900">
              Admin Event Management
            </p>
          </button>
        </div>
      </div>
      <div role="button"
        className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
        <div className="grid mr-4 place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
            className="w-5 h-5">
            <path fill-rule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        Profile
      </div>
      <div role="button"
        className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
        <div className="grid mr-4 place-items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
            className="w-5 h-5">
            <path fill-rule="evenodd"
              d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
              clip-rule="evenodd"></path>
          </svg>
        </div>
        Settings
      </div>
      <div className='mt-auto'>
        <button role="button" onClick={handleLogout}
          className="logoutButton flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900">
          <div className="grid mr-4 place-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
              className="w-5 h-5">
              <path fill-rule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                clip-rule="evenodd"></path>
            </svg>
          </div>
          Log Out
        </button>
      </div>
    </nav>
  </div>
  )
}
export default Sidebar;
