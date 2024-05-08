import React, { useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link for routing
// Use Browser router instead of react-router-dom
// Assuming Logo is imported from somewhere
import Logo from './icon.png';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // Perform login logic here using email and password
    console.log('Login clicked');
  }

  return (
    <main>
      <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form onSubmit={handleLogin}>
        <div className="rounded-sm bg-no-repeat absolute border shadow-xl top-3 left-25 right-25  border-stroke">
          <div className="flex flex-wrap items-center">
            <div className="hidden w-full xl:block xl:w-1/2">
              <div className="py-17.5 px-26 text-center">
                <h2 className="mb-9 text-2xl text-center font-bold text-green dark:text-white sm:text-title-xl2">
                  Orchard Farm
                </h2>
                <img className="" src={Logo} alt="Logo" />
                <p className="2xl:px-20">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
                </p>
              </div>
            </div>

            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
              <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                <h2 className="mb-5 text-2xl text-center text-green sm:text-title-x12">
                  Login
                </h2>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-green focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-green"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-green bg-green p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>
                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{' '}
                    {/* <Link to="/location" className="text-green">
                      Sign Up
                    </Link> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default App;
