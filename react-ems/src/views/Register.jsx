import React, { useState } from 'react';
import Logo from '../images/SPCC-EMS.png';
import Bg from '../images/background.jpg';
import { useNavigate } from 'react-router-dom';
import axiosClient from '../views/axios.js';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }

    try {
      const response = await axiosClient.post('/register', {
        email,
        password,
        name,
      });

      navigate('/guest/login');
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <>
      <div
        className="min-h-screen flex justify-center items-center"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
          <div className="container h-full p-10">
            <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
              <div className="w-full">
                <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                  <div className="g-0 lg:flex lg:flex-wrap">


                    <div
                      className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-s-lg lg:rounded-br-none"
                      style={{
                        background: 'linear-gradient(to right, #3b82f6, #2563eb, #1e40af, #1e3a8a)'
                      }}
                    >
                      <div className="px-6 py-8 text-white max-w-md backdrop-blur-sm bg-black/40 rounded-lg md:mx-6 md:p-12">
                        <h4 className="mb-4 text-2xl font-bold text-[#3E6299]">
                          Student Event System
                        </h4>
                        <p className="text-sm leading-relaxed">
                          Create your account and unlock the gateway to exciting campus events.
                          Join the student community and never miss an event again!
                        </p>
                        <ul className="mt-6 space-y-2 text-sm">
                          <li className="flex items-start">
                            <span className="mr-2 text-[#3E6299]">•</span>
                            Easy registration and login
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-[#3E6299]">•</span>
                            Personalized event feeds
                          </li>
                          <li className="flex items-start">
                            <span className="mr-2 text-[#3E6299]">•</span>
                            Earn rewards for participation
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="px-4 md:px-0 lg:w-6/12">
                      <div className="md:mx-6 md:p-12">
                        <div className="text-center">
                          <img
                            className="mx-auto w-48"
                            src={Logo}
                            alt="logo"
                          />
                        </div>
                        <form onSubmit={handleRegister}>
                          <p className="mb-4">Create your account</p>

                          <div className="relative mb-4" data-twe-input-wrapper-init>
                            <input
                              type="text"
                              name="name"
                              className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                              id="registerUsername"
                              placeholder="Username"
                              onChange={(e) => setName(e.target.value)}
                            />
                            <label
                              htmlFor="registerUsername"
                              className="pointer-events-none absolute left-3 top-0 pt-[0.37rem] text-neutral-500 transition-all peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                            >
                              Username
                            </label>
                          </div>

                          <div className="relative mb-4" data-twe-input-wrapper-init>
                            <input
                              type="email"
                              name="email"
                              className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                              id="registerEmail"
                              placeholder="Email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                            <label
                              htmlFor="registerEmail"
                              className="pointer-events-none absolute left-3 top-0 pt-[0.37rem] text-neutral-500 transition-all peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                            >
                              Email
                            </label>
                          </div>

                          <div className="relative mb-4" data-twe-input-wrapper-init>
                            <input
                              type="password"
                              name="password"
                              className="peer block w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary dark:text-white dark:placeholder:text-neutral-300"
                              id="registerPassword"
                              placeholder="Password"
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              htmlFor="registerPassword"
                              className="pointer-events-none absolute left-3 top-0 pt-[0.37rem] text-neutral-500 transition-all peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary dark:text-neutral-400"
                            >
                              Password
                            </label>
                          </div>

                          {error && (
                              <p className="text-red-600 bg-red-100 border border-red-400 rounded p-2 text-sm mt-2">
                                {error}
                              </p>
                            )}
                          <div className="mb-12 pt-1 text-center">
                            <button
                              className="bg-[#3E6299] mb-3 w-full rounded px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 hover:shadow-md"
                              type="submit"
                            >
                              Register
                            </button>
                            <a href="/guest/login">Already have an account? Login</a>
                          </div>
                        </form>
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
  );
}
