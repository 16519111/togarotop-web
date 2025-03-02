import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaPen, FaLock, FaWhatsapp } from "react-icons/fa";
import { COLORS } from "../consts/colors";
import togatoLogo from "../assets/togato-logo.png";
import ContactsImage from "../assets/new/contacts.png";

export default function Contacts() {

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
              <a href="" class="flex items-center">
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
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/about" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/products" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
                      aria-current="page"
                    >
                      Products
                    </a>
                  </li>
                  <li>
                    <a 
                      href="/contacts" 
                      class="block font-semibold py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" 
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
          <div class="flex justify-center mt-24">
            <div style={{ backgroundImage: `url(${ContactsImage})`, width: "1200px", height: "613px", backgroundSize: "cover" }} class="p-4 text-center flex">
              <div style={{ width: "600px" }}></div>
              <div style={{ width: "600px" }} class="items-center flex flex-col justify-center text-lg">
                <p class="my-0.5 font-bold" style={{ color: COLORS.darkMain }}>CONTACT PERSON</p>
                <p class="my-0.5 bg-white p-5">RAULAN TOGATOROP (+62-82169188778)</p>
                <div class="my-4"></div>
                <p class="my-0.5 font-bold" style={{ color: COLORS.darkMain }}>EMAIL</p>
                <p class="my-0.5 bg-white p-5">togatocemerlang23@gmail.com</p>
                <div class="my-4"></div>
                <p class="my-0.5 font-bold" style={{ color: COLORS.darkMain }}>INSTAGRAM</p>
                <p class="my-0.5 bg-white p-5">Togato Coffee</p>
                <div class="my-4"></div>
                <p class="my-0.5 font-bold" style={{ color: COLORS.darkMain }}>FACEBOOK</p>
                <p class="my-0.5 bg-white p-5">togatocoffee</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  