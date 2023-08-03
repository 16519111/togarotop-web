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

export default function About() {

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
          <div 
            class="flex items-center flex-col justify-center"
            style={{
              height: "calc(100vh - 64px)",
              backgroundImage: `url(${backgroundAbout})`,
              backgroundSize: "33.4vw",
              color: "white"
            }}
          >
            <p class="text-3xl mb-14">TENTANG KAMI</p>
            <p class="mx-56 text-justify text-xl">
              Togato Coffee diolah dari kopi yang berasal dari Siborongborong
              dengan ketinggian 1200-1300 mdpl. Proses pasca panen untuk
              menghilangkan kulit buah dengan sistem semi wash. Kemudian
              kopi diolah dengan menggunakan alat tradisional seperti alu dan
              lumpang untuk mengelupas kulit tanduk serta mesin sederhana
              yang terbuat dari tanah liat untuk roasting. Tingkat roasting
              adalah medium_dark dan hasilnya kopi yang memiliki aroma
              khas dengan tingkat keasaman yang rendah.
            </p>
          </div>
          <div 
            class="flex items-center flex-col justify-center h-screen"
            style={{

            }}
          >
            <p class="text-3xl mb-20 font-black">VISI MISI TOGATO COFFEE</p>
            <p class="font-bold text-xl font-black">Visi</p>
            <p class="mx-56 text-justify text-xl">
              Menciptakan kopi yang berkualitas kepada masyarakat Indonesia,
              khusus nya yang kopinya berasal dari wilayah Siborongborong
              kab. Tapanuli Utara dan kawasan Danau Toba.
            </p>
            <p class="font-black mt-10 text-xl">Misi</p>
            <p class="mx-56 text-justify text-xl">
              Meningkatkan nilai tambah kopi, dengan pengolahan yang prima
              mulai dari biji kopi yang digunakan, proses pengolahan biji kopi
              menjadi bahan siap pakai, hingga hasil akhir pengolahan biji kopi.
            </p>
          </div>
          <div 
            class="flex items-center flex-col justify-center h-screen"
            style={{

            }}
          >
            <p class="text-3xl mb-14 text-center font-black">KEUNGGULAN<br/> TOGATO COFFEE</p>
            <div class="flex">
              <div>
                <img src={geografisImage} class="h-72"/>
                <p class="font-bold text-center text-xl">GEOGRAFIS</p>
              </div>
              <div>
                <img src={kualitasImage} class="h-72 mx-12"/>
                <p class="font-bold text-center text-xl">KUALITAS</p>
              </div>
              <div>
                <img src={variatifImage} class="h-72"/>
                <p class="font-bold text-center text-xl">PRODUK VARIATIF</p>
              </div>
            </div>
          </div>
          <div 
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
          </div>
          <div 
            class="flex items-center flex-col justify-center h-screen"
            style={{

            }}
          >
            <p class="text-3xl mb-10 text-center font-bold">KUALITAS</p>
            <img src={kualitasImage} class="h-96"/>
            <p class="mx-56 text-justify text-xl">
              Togato Coffee merupakan biji kopi pilihan (single origin), dipetik pada tingkat
              kematangan cukup (petik merah), penjemuran terkontrol, dan pengolahan
              biji kopi dengan mesin terstandarisasi.
            </p>
          </div>
          <div 
            class="flex items-center flex-col justify-center h-screen"
            style={{

            }}
          >
            <p class="text-3xl mb-10 text-center font-bold">PRODUK VARIATIF</p>
            <img src={variatifImage} class="h-96"/>
            <p class="mx-56 text-justify text-xl">
              Togato Coffee memiliki banyak variasi produk. Bentuk produk berdasarkan
              pengolahan biji (termasuk Natural, Semi Wash, Full Wash, Wine, Luwak, Honey,
              dan Peaberry) dan level roasting (Medium, Medium to Dark, Dark, dan Full
              Dark). Untuk kopi bubuk dengan skala gilingan kopi (grind size) mulai dari
              (Fine, Medium-Fine, Medium, Medium-Coarse, dan Coarse)
            </p>
          </div>
        </div>
      </>
    );
  }
  