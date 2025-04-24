
import React, { useState } from 'react';
import Logo from '../images/SPCC-EMS.png';
import Bg from '../images/background.jpg';
import { useNavigate } from 'react-router-dom';
import axiosClient from './axios';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await axiosClient.post('/login', {
        email,
        password,
      });

      const token = response.data.token;
      localStorage.setItem('authToken', token);

      navigate('/user/dashboard');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };
  return (
   <>
   <div className="min-h-screen flex justify-center items-center" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <img className="mx-auto w-48" src={Logo} alt="logo" />
                      </div>
                      <form onSubmit={handleLogin}>
                        <p className="mb-4">Please login to your account</p>
                        <div className="relative mb-4" data-twe-input-wrapper-init>
                          <input
                            type="email"
                            name="email"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                          />
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >
                            Email
                          </label>
                        </div>
                        <div className="relative mb-4" data-twe-input-wrapper-init>
                          <input
                            type="password"
                            name="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-white dark:placeholder:text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput11"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                          />
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-400 dark:peer-focus:text-primary"
                          >
                            Password
                          </label>
                        </div>
                        {error && <p className="error">{error}</p>}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="bg-[#3E6299] mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="submit"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            Log in
                          </button>
                          <a href="#!">Forgot password?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      background: 'linear-gradient(to right, #3b82f6, #2563eb, #1e40af, #1e3a8a)',
                    }}
                  >
                    <div className="px-6 py-8 text-white max-w-md backdrop-blur-sm bg-black/40 rounded-lg md:mx-6 md:p-12">
                      <h4 className="mb-4 text-2xl font-bold text-[#3E6299]">
                        Student Event System
                      </h4>
                      <p className="text-sm leading-relaxed">
                        Manage and discover campus events seamlessly. Browse upcoming activities,
                        secure your tickets, and stay connected with your student community—all
                        in one place.
                      </p>
                      <ul className="mt-6 space-y-2 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 text-[#3E6299]">•</span> View & RSVP to events
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-[#3E6299]">•</span> Track your ticket purchases
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 text-[#3E6299]">•</span> Personalized event recommendations
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
   </>
  )
}
