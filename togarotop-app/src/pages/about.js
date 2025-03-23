import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaPen, FaLock, FaWhatsapp } from "react-icons/fa";
import { COLORS } from "../consts/colors";
import coffee from "../assets/coffee.jpg";
import togatoLogo from "../assets/togato-logo.png";
import allCoffee from "../assets/all-coffee.jpeg";
import aribacaBubuk from "../assets/arabica-bubuk.webp";
import backgroundAbout from "../assets/new/about-background.jpeg";
import geografisImage from "../assets/new/geografis.jpeg";
import kualitasImage from "../assets/new/kualitas.jpeg";
import variatifImage from "../assets/new/variatif.jpeg";
import halalImage from "../assets/halal.png";
import bpomImage from "../assets/bpom.png";
import hakiImage from "../assets/haki.png";


export default function About() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    let w = window.innerWidth;
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
                  class="self-center text-lg font-semibold whitespace-nowrap dark:text-white"
                  style={{ color: COLORS.main }}
                >
                  Togato Coffee
                </span>
              </a>
              <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => setIsNavbarOpen(!isNavbarOpen)}>
                <span class="sr-only">Open main menu</span>
                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
              </button>
              <div 
                class={`${!isNavbarOpen && "hidden"} w-full md:block md:w-auto`}
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

          {w <= 450 ?
            <>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  height: "calc(100vh - 64px)",
                  backgroundImage: `url(${backgroundAbout})`,
                  // backgroundSize: "33.4vw",
                  color: "white",
                  padding: "10px 30px"
                }}
              >
                <p class="text-2xl mb-8">ABOUT US</p>
                <p class="text-justify text-md">
                  Togato Coffee is processed from coffee originating from Siborongborong
                  with an altitude of 1200-1300 meters above sea level. The post-harvest process to
                  remove the fruit skin with a semi-wash system. Then
                  the coffee is processed using traditional tools such as pestles and
                  mortars to peel off the horny skin and simple machines
                  made of clay for roasting. The roasting level
                  is medium dark and the result is coffee that has a distinctive aroma
                  with a low acidity level.
                </p>
              </div>
              <div className="h-16"></div>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  padding: "10px 30px"
                }}
              >
                <p class="text-2xl mb-12 font-black text-center">VISION AND MISSION OF TOGATO COFFEE</p>
                <p class="font-bold text-xl font-black mb-2">Vision</p>
                <p class="text-justify text-md">
                  Creating quality coffee for the people of Indonesia, especially those whose coffee comes 
                  from the Siborongborong area, North Tapanuli Regency and the Lake Toba area.
                </p>
                <p class="font-black mt-10 mb-2 text-xl">Mision</p>
                <p class="text-justify text-md">
                  Increasing the added value of coffee, with excellent processing
                  starting from the coffee beans used, the coffee bean processing process
                  into ready-to-use materials, to the final results of coffee bean processing.
                </p>
              </div>
              <hr className="my-16 border-2"></hr>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  padding: "10px 30px"
                }}
              >
                <p class="text-2xl mb-2 text-center font-black">THE EXCELLENCE OF<br/> TOGATO COFFEE</p>
              </div>
              {/* <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-10 text-center font-bold">GEOGRAFIS</p>
                <img src={geografisImage} class="h-96"/>
                <p class="mx-56 text-justify text-xl">
                  Togato Coffee memiliki banyak variasi produk. Bentuk produk berdasarkan
                  pengolahan biji (termasuk Natural, Semi Wash, Full Wash, Wine, Luwak, Honey,
                  dan Peaberry) dan level roasting (Medium, Medium to Dark, Dark, dan Full
                  Dark). Untuk kopi bubuk dengan skala gilingan kopi (grind size) mulai dari
                  (Fine, Medium-Fine, Medium, Medium-Coarse, dan Coarse)
                </p>
              </div> */}
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  padding: "10px 30px"
                }}
              >
                <img src={kualitasImage} class="h-40"/>
                <p class="text-xl text-center font-bold mb-4">QUALITY</p>
                <p class="text-justify text-md">
                  Togato Coffee is a selected coffee bean (single origin), picked at a sufficient level of ripeness (red picking), 
                  controlled drying, and processing of coffee beans with standardized machines.
                </p>
              </div>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  padding: "10px 30px"
                }}
              >
                <img src={variatifImage} class="h-40"/>
                <p class="text-2xl mb-10 text-center font-bold">VARIETY OF PRODUCT</p>
                <p class="text-justify text-md">
                  Togato Coffee has many product variations. Product forms are based on bean processing (including Natural, 
                  Semi Wash, Full Wash, Wine, Luwak, Honey, and Peaberry) and roasting levels (Medium, Medium to Dark, Dark, 
                  and Full Dark). For ground coffee with a coffee grinding scale (grind size) starting from (Fine, Medium-Fine, 
                  Medium, Medium-Coarse, and Coarse)
                </p>
              </div>
              <hr className="my-16 border-2"></hr>
              <div 
                class="flex items-center flex-col justify-center"
                style={{

                }}
              >
                <p class="text-2xl mb-14 text-center font-black">OUR CERTIFICATIONS</p>
                <div class="flex flex-col items-center">
                  <div>
                    <img src={halalImage} class="h-40"/>
                    {/* <p class="font-bold text-center text-xl">HALAL</p> */}
                  </div>
                  <div>
                    <img src={bpomImage} class="h-40 my-10"/>
                    {/* <p class="font-bold text-center text-xl">BPOM MD</p> */}
                  </div>
                  <div>
                    <img src={hakiImage} class="h-40"/>
                    {/* <p class="font-bold text-center text-xl">HAKI MEREK</p> */}
                  </div>
                </div>
              </div>
            </>
          :
            <>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  height: "calc(100vh - 64px)",
                  backgroundImage: `url(${backgroundAbout})`,
                  backgroundSize: "33.4vw",
                  color: "white"
                }}
              >
                <p class="text-3xl mb-14">ABOUT US</p>
                <p class="mx-56 text-justify text-xl">
                  Togato Coffee is processed from coffee originating from Siborongborong
                  with an altitude of 1200-1300 meters above sea level. The post-harvest process to
                  remove the fruit skin with a semi-wash system. Then
                  the coffee is processed using traditional tools such as pestles and
                  mortars to peel off the horny skin and simple machines
                  made of clay for roasting. The roasting level
                  is medium dark and the result is coffee that has a distinctive aroma
                  with a low acidity level.
                </p>
              </div>
              <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-20 font-black">VISION AND MISSION OF TOGATO COFFEE</p>
                <p class="font-bold text-xl font-black">Vision</p>
                <p class="mx-56 text-justify text-xl">
                  Creating quality coffee for the people of Indonesia, especially those whose coffee comes 
                  from the Siborongborong area, North Tapanuli Regency and the Lake Toba area.
                </p>
                <p class="font-black mt-10 text-xl">Mision</p>
                <p class="mx-56 text-justify text-xl">
                  Increasing the added value of coffee, with excellent processing
                  starting from the coffee beans used, the coffee bean processing process
                  into ready-to-use materials, to the final results of coffee bean processing.
                </p>
              </div>
              <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-14 text-center font-black">THE EXCELLENCE OF<br/> TOGATO COFFEE</p>
                <div class="flex">
                  {/* <div>
                    <img src={geografisImage} class="h-72"/>
                    <p class="font-bold text-center text-xl">DIVER</p>
                  </div> */}
                  <div>
                    <img src={kualitasImage} class="h-72 mx-20"/>
                    <p class="font-bold text-center text-xl">QUALITY</p>
                  </div>
                  <div>
                    <img src={variatifImage} class="h-72 mx-20"/>
                    <p class="font-bold text-center text-xl">VARIETY OF PRODUCT</p>
                  </div>
                </div>
              </div>
              {/* <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-10 text-center font-bold">GEOGRAFIS</p>
                <img src={geografisImage} class="h-96"/>
                <p class="mx-56 text-justify text-xl">
                  Togato Coffee memiliki banyak variasi produk. Bentuk produk berdasarkan
                  pengolahan biji (termasuk Natural, Semi Wash, Full Wash, Wine, Luwak, Honey,
                  dan Peaberry) dan level roasting (Medium, Medium to Dark, Dark, dan Full
                  Dark). Untuk kopi bubuk dengan skala gilingan kopi (grind size) mulai dari
                  (Fine, Medium-Fine, Medium, Medium-Coarse, dan Coarse)
                </p>
              </div> */}
              <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-10 text-center font-bold">QUALITY</p>
                <img src={kualitasImage} class="h-96"/>
                <p class="mx-56 text-justify text-xl">
                  Togato Coffee is a selected coffee bean (single origin), picked at a sufficient level of ripeness (red picking), 
                  controlled drying, and processing of coffee beans with standardized machines.
                </p>
              </div>
              <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-10 text-center font-bold">VARIETY OF PRODUCT</p>
                <img src={variatifImage} class="h-96"/>
                <p class="mx-56 text-justify text-xl">
                  Togato Coffee has many product variations. Product forms are based on bean processing (including Natural, 
                  Semi Wash, Full Wash, Wine, Luwak, Honey, and Peaberry) and roasting levels (Medium, Medium to Dark, Dark, 
                  and Full Dark). For ground coffee with a coffee grinding scale (grind size) starting from (Fine, Medium-Fine, 
                  Medium, Medium-Coarse, and Coarse)
                </p>
              </div>
              <div 
                class="flex items-center flex-col justify-center h-screen"
                style={{

                }}
              >
                <p class="text-3xl mb-14 text-center font-black">OUR CERTIFICATIONS</p>
                <div class="flex">
                  <div>
                    <img src={halalImage} class="h-72"/>
                    {/* <p class="font-bold text-center text-xl">HALAL</p> */}
                  </div>
                  <div>
                    <img src={bpomImage} class="h-72 mx-20"/>
                    {/* <p class="font-bold text-center text-xl">BPOM MD</p> */}
                  </div>
                  <div>
                    <img src={hakiImage} class="h-72"/>
                    {/* <p class="font-bold text-center text-xl">HAKI MEREK</p> */}
                  </div>
                </div>
              </div>
            </>
          }
        </div>
      </>
    );
  }
  