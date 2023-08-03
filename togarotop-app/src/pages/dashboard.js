import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaPen, FaLock, FaWhatsapp } from "react-icons/fa";
import { COLORS } from "../consts/colors";
import coffee from "../assets/coffee.jpg";
import togatoLogo from "../assets/togato-logo.png";
import allCoffee from "../assets/all-coffee.jpeg";
import aribacaBubuk from "../assets/arabica-bubuk.webp";
import backgroundCoffee from "../assets/background-coffee.png";
import heroImage from "../assets/new/hero.jpeg";
import logoWhite from "../assets/new/Logo_White.jpg";
import dashboardTwo from "../assets/new/dashboard-2.jpeg";

export default function Dashboard() {

    return (
      <>
        <div 
          class=""
          style={{
            
            // backgroundImage: `url(${backgroundCoffee})`,
            
          }}
        >
          <nav 
            class="border-gray-200 max-w-screen-xl flex items-center justify-between" 
            style={{ color: "white" }}
          >

              {/* <a href="" class="flex items-center">
                <img src={togatoLogo} class="h-8 mr-3" alt="Flowbite Logo" />
                <span 
                  class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                  style={{ color: "white" }}
                >
                  Togato Coffee
                </span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button> */}

                <div style={{ backgroundColor: "#0c0a0b", minWidth: "35vw", maxWidth: "35vw" }} class="p-4 flex justify-center">
                  <ul class="font-medium flex flex-row mt-0 rounded-lg space-x-12">
                    <li>
                      <a 
                        href="/" 
                        class="block font-semibold px-4 py-1 rounded hover:bg-transparent border-0 hover:text-green-700" 
                        aria-current="page"
                      >
                        Home
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/about" 
                        class="block font-semibold px-4 py-1 rounded hover:bg-transparent border-0 hover:text-green-700" 
                        aria-current="page"
                      >
                        About
                      </a>
                    </li>
                  </ul>
                </div>
                <div style={{ minWidth: "30vw", maxWidth: "30vw", width: "30vw" }}></div>
                <div class="p-4 flex justify-center" style={{ backgroundColor: "#0c0a0b", minWidth: "35vw", maxWidth: "35vw" }}>
                  <ul class="font-medium flex flex-row mt-0 rounded-lg space-x-12">
                    <li>
                      <a 
                        href="/products" 
                        class="block font-semibold px-4 py-1 rounded hover:bg-transparent border-0 hover:text-green-700" 
                        aria-current="page"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a 
                        href="/contacts" 
                        class="block font-semibold px-4 py-1 rounded hover:bg-transparent border-0 hover:text-green-700" 
                        aria-current="page"
                      >
                        Contacts
                      </a>
                    </li>
                  </ul>
                </div>

          </nav>
          <div 
            class="flex items-center"
            style={{
              height: "calc(100vh - 64px)",
            }}
          >
            <img 
              src={heroImage}
              style={{
                height: "calc(100vh - 64px)",
                minWidth: "35vw",
                maxWidth: "35vw",
                width: "35vw"
              }}
            />
            <div style={{ minWidth: "30vw", maxWidth: "30vw", width: "30vw" }}>
              <img src={logoWhite} />
              <p 
                class="text-center text-2xl font-bold"
                style={{ color: COLORS.main }}
              >
                KOPI SIBORONGBORONG<br/>SUMATERA UTARA<br/>SINCE 2019
              </p>
            </div>
            <img 
              src={heroImage} 
              style={{
                height: "calc(100vh - 64px)",
                minWidth: "35vw",
                maxWidth: "35vw",
                width: "35vw"
              }}
            />
            {/* <div class="mt-48 flex justify-between">
              <div 
                class="max-w-xl p-12 rounded-l-xl text-center justify-end"
                style={{
                  
                }}
              >
                <hr 
                  class="my-4 mx-48 rounded border-0"
                  style={{
                    border: 0,
                    borderTop: `3px dotted ${COLORS.main}`
                  }}
                />
                <p 
                  class="font-bold text-2xl"
                  style={{
                    color: COLORS.darkMain,
                    lineHeight: "3rem"
                  }}
                >
                  Sumatera's<br /> <span class="font-black text-5xl" style={{ color: COLORS.main }}>SIBORONGBORONG</span><br /> <i class="text-4xl">Drip Coffee ~</i>
                </p>
                <hr 
                  class="my-4 mx-48 rounded border-0"
                  style={{
                    border: 0,
                    borderTop: `3px dotted ${COLORS.main}`
                  }}
                />
                <div class="mt-6 flex justify-center">
                  <button 
                    class="text-white text-lg font-bold py-2 px-4 rounded mr-1"
                    style={{
                      border: `1px solid ${COLORS.main}`,
                      color: COLORS.main,
                      "&:hover": {
                        backgroundColor: COLORS.darkMain
                      }
                    }}
                  >
                    Selengkapnya
                  </button>
                  <button 
                    class="text-white text-lg font-bold py-2 px-4 rounded ml-1 flex items-center"
                    style={{
                      backgroundColor: COLORS.main,
                      "&:hover": {
                        backgroundColor: COLORS.darkMain
                      }
                    }}
                  >
                    <FaWhatsapp />
                    <p class="ml-1.5">0852-0659-6663</p>
                  </button>
                </div>
                // 
              </div>
              <img src={allCoffee} 
                style={{
                  width: "600px"
                }} 
              />
            </div> */}
          </div>
        </div>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#063c14" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg> */}
        {/* <div 
          class="h-screen flex justify-center items-center"
          style={{
            
          }}
        >
          <img src={dashboardTwo} />
        </div> */}
      </>
    );
  }
  