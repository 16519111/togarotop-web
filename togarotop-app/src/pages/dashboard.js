import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaPen, FaLock } from "react-icons/fa";
import { COLORS } from "../consts/colors";
import coffee from "../assets/coffee.jpg";
import togatoLogo from "../assets/togato-logo.png";
import allCoffee from "../assets/all-coffee.jpeg";
import aribacaBubuk from "../assets/arabica-bubuk.webp";
import backgroundCoffee from "../assets/background-coffee.png";

export default function Dashboard() {

    return (
      <>
        <div 
          class=""
          style={{
            
            // backgroundImage: `url(${backgroundCoffee})`,
            backgroundSize: "cover"
          }}
        >
          <nav 
            class="border-gray-200" 
            // style={{ backgroundColor: COLORS.main }}
          >
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" class="flex items-center">
                <img src={togatoLogo} class="h-8 mr-3" alt="Flowbite Logo" />
                <span 
                  class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                  style={{ color: COLORS.main }}
                >
                  Togato Coffee
                </span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
              <div 
                class="hidden w-full md:block md:w-auto" 
                id="navbar-default"
                style={{ color: COLORS.main }}
              >
                <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-12 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <a 
                      href="/" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/about" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/products" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/contacts" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      Contacts
                    </a>
                  </li>
                  {/* <li>
                    <a 
                      href="/login" 
                      class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" 
                      aria-current="page"
                    >
                      Contacts
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </nav>
          <div 
            class="mx-28 flex items-center justify-between"
            style={{
              height: "calc(100vh - 364px)"
            }}
          >
            <div class="mt-48 flex">
              <div 
                class="max-w-xl p-12 rounded-l-xl text-center  justify-end"
                style={{
                  
                }}
              >
                <p 
                  class="font-bold text-3xl"
                  style={{
                    color: COLORS.darkMain
                  }}
                >
                  Kopi <span class="font-black" style={{ color: COLORS.main }}>Terbaik</span> di Indonesia
                </p>
                <hr 
                  class="my-4 mx-36 rounded border-0"
                  style={{
                    border: 0,
                    borderTop: `3px solid ${COLORS.main}`
                  }}
                />
                <p class="px- text-lg" style={{ color: COLORS.dark }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <img src={allCoffee} 
                style={{
                  width: "600px"
                }} 
              />
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#063c14" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        <div 
          class="h-screen flex justify-center items-center"
          style={{
            backgroundColor: COLORS.darkMain
          }}
        >
            <div 
              class="max-w-xl p-12 rounded-xl text-center  justify-end"
              style={{
                // backgroundColor: COLORS.darkMain,
                color: COLORS.lightBrown
              }}
            >
              <p class="font-black text-3xl">COBA PRODUK KAMI !</p>
              {/* <hr 
                class="my-2"
                style={{
                  border: 0,
                  borderTop: `1px solid ${COLORS.lightBrown}`
                }}
              />
              <p class="px- text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p> */}
            </div>
        </div>
        <div
          style={{
            backgroundColor: COLORS.darkMain
          }}
        >
          <hr 
            class="mx-16"
            style={{
              border: 0,
              borderTop: `1px solid ${COLORS.lightBrown}`,
              backgroundColor: COLORS.darkMain
            }}
          />
        </div>
        <div 
          class="flex items-center justify-between h-screen"
          style={{
            backgroundColor: COLORS.darkMain
          }}
        >
          <div 
            class="max-w-xl p-12 rounded-l-xl text-center  justify-end ml-40"
            style={{
              
            }}
          >
            <p 
              class="font-bold text-2xl"
              style={{
                color: COLORS.lightBrown
              }}
            >
              Arabica Bubuk
            </p>
            <hr 
              class="my-2 mx-48"
              style={{
                border: 0,
                borderTop: `1px solid ${COLORS.lightBrown}`
              }}
            />
            <p class="px- text-lg" style={{ color: COLORS.brown }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <img src={aribacaBubuk}
            class="mr-40 rounded-full"
            style={{
              width: "400px"
            }} 
          />
        </div>
        <div
          style={{
            backgroundColor: COLORS.darkMain
          }}
        >
          <hr 
            class="mx-16"
            style={{
              border: 0,
              borderTop: `1px solid ${COLORS.lightBrown}`,
              backgroundColor: COLORS.darkMain
            }}
          />
        </div>
        <div 
          class="flex items-center justify-between h-screen"
          style={{
            backgroundColor: COLORS.darkMain
          }}
        >
          <img src={aribacaBubuk}
            class="ml-40 rounded-full"
            style={{
              width: "400px"
            }} 
          />
          <div 
            class="max-w-xl p-12 rounded-l-xl text-center  justify-end mr-40"
            style={{
              
            }}
          >
            <p 
              class="font-bold text-2xl"
              style={{
                color: COLORS.lightBrown
              }}
            >
              Arabica Bubuk
            </p>
            <hr 
              class="my-2 mx-48"
              style={{
                border: 0,
                borderTop: `1px solid ${COLORS.lightBrown}`
              }}
            />
            <p class="px- text-lg" style={{ color: COLORS.brown }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </>
    );
  }
  