// src/App.jsx
import './index.css';
import { UserIcon, CalendarDaysIcon, TicketIcon } from '@heroicons/react/24/solid';

 function App() {
  return (
    <>
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-[#3E6299]">Student Events</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-[#3E6299]">Home</a>
            <a href="#" className="text-gray-600 hover:text-[#3E6299]">Events</a>
            <a href="#" className="text-gray-600 hover:text-[#3E6299]">My Tickets</a>
            <a href="#" className="text-gray-600 hover:text-[#3E6299]">Profile</a>
          </nav>
          <UserIcon className="h-8 w-8 text-gray-600 hover:text-[#3E6299] cursor-pointer" />
        </div>
      </header>

      <section className="bg-[#3E6299] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Welcome to EduEvent</h2>
          <p className="text-lg mb-8">Discover, join, and manage student events all in one place.</p>
          <button className="bg-white text-[#3E6299] font-semibold px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Browse Events
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((evt) => (
            <div key={evt} className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition">
              <div className="flex items-center mb-4">
                <CalendarDaysIcon className="h-6 w-6 text-[#3E6299] mr-2" />
                <span className="text-gray-600 font-medium">May {evt * 5}, 2025</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">Event Title {evt}</h4>
              <p className="text-gray-500 mb-4">Brief description of the event goes here. Location, time, and other details.</p>
              <button className="flex items-center text-[#3E6299] font-semibold hover:underline">
                <TicketIcon className="h-5 w-5 mr-1" />
                Get Tickets
              </button>
            </div>
          ))}
        </div>
      </section>

      <footer class="bg-[#3E6299] pt-12 pb-6 px-10 tracking-wide">
      <div class="max-w-screen-xl mx-auto">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="lg:flex lg:items-center">
            <a href="javascript:void(0)">
              <img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" class="w-48" />
            </a>
          </div>

          <div class="lg:flex lg:items-center">
            <ul class="flex space-x-6">
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-gray-300 hover:fill-white w-7 h-7" viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z"
                      clip-rule="evenodd" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="javascript:void(0)">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" class="fill-gray-300 hover:fill-white w-7 h-7"
                    viewBox="0 0 24 24">
                    <path
                      d="M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-am mb-6 text-white">Useful links</h4>
            <ul class="space-y-4 pl-2">
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">Featured</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">New Arrivals</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">New Arrivals</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="text-am mb-6 text-white">Information</h4>
            <ul class="space-y-4 pl-2">
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">About Us</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">Privacy Policy</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">Sale</a>
              </li>
              <li>
                <a href="javascript:void(0)" class="text-white hover:text-white text-sm">Documentation</a>
              </li>
            </ul>
          </div>
        </div>
         <div className='flex justify-center items-center'>
        <p class="text-white text-sm mt-10">&copy; {new Date().getFullYear()}. All rights reserved.
        </p>
         </div>
      </div>
     </footer>
     </div>
    </>
  );
}

export default App;
