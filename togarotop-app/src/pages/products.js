import { useState } from "react";
import { FaDesktop, FaLaptop, FaMouse, FaPlus, FaPen, FaLock, FaWhatsapp } from "react-icons/fa";
import { COLORS } from "../consts/colors";
import coffee from "../assets/coffee.jpg";
import togatoLogo from "../assets/togato-logo.png";
import allCoffee from "../assets/all-coffee.jpeg";
import aribacaBubuk from "../assets/arabica-bubuk.webp";
import backgroundAbout from "../assets/new/about-background.jpeg";
import ShowcaseOne from "../assets/new/showcase-1.jpeg";
import ProductOne from "../assets/new/product-1.jpeg";
import ProductTwo from "../assets/new/product-2.jpeg";
import ProductThree from "../assets/new/product-3.jpeg";
import ProductFour from "../assets/new/product-4.jpeg";
import ProductFive from "../assets/new/product-5.jpeg";
import ProductSix from "../assets/new/product-6.jpeg";
import ProductSeven from "../assets/new/product-7.jpeg";
import ProductEight from "../assets/new/product-8.jpeg";
import ProductNine from "../assets/new/product-9.jpeg";


export default function Products() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  let w = window.innerWidth;

    const products = [
      {
        nama: "DRIP TOGATO COFFEE",
        berat: "60 gr",
        harga: "$3.88 USD",
        deskripsi: "Togato Drip Arabica Coffee is Arabica coffee that is harvested and processed using a semi-wash system to produce the best Arabica coffee beans which are then roasted with a medium-dark roast profile. Packed in a drip sachet that makes it easy for you to bring coffee when traveling or working. Consists of 5 drip coffee sachets packed with drip paper filters.",
        region: "Lintong-Siborongborong",
        process: "Semi Wash",
        altitude: "1200 - 1400 meters above sea level",
        roasting: "Medium - Dark",
        image: ProductOne
      },
      {
        nama: "ROBUSTA GROUND COFFEE",
        berat: "200 gr",
        harga: "$2.33 USD",
        deskripsi: "Togato Robusta Coffee is robusta coffee that is harvested and processed using a semi-wash system to produce the best robusta coffee beans which are then roasted with a medium-dark roast profile.",
        region: "Lintong-Siborongborong",
        process: "Semi Wash",
        altitude: "1200 - 1400 meters above sea level",
        roasting: "Medium - Dark",
        image: ProductTwo
      },
      {
        nama: "ARABICA SINGLE ORIGIN 200GR",
        berat: "200 gr",
        harga: "$3.82 USD",
        deskripsi: "Togato Coffee Arabica Coffee is Arabica coffee that is harvested and processed using a semi-wash system to produce the best Arabica coffee beans which are then roasted with a medium-dark roast profile (suitable for manual brew/filter and espresso/machine). Has a distinctive aroma and taste and low acidity.",
        region: "Lintong-Siborongborong",
        process: "Semi Wash",
        altitude: "1200 - 1400 meters above sea level",
        roasting: "Medium - Dark",
        image: ProductThree
      },
      {
        nama: "ARABICA SINGLE ORIGIN 100GR",
        berat: "100 gr",
        harga: "$1.94 USD",
        deskripsi: "Togato Coffee Arabica Coffee is Arabica coffee that is harvested and processed using a semi-wash system to produce the best Arabica coffee beans which are then roasted with a medium-dark roast profile (suitable for manual brew/filter and espresso/machine).",
        region: "Lintong-Siborongborong",
        process: "Semi Wash",
        altitude: "1200 - 1400 meters above sea level",
        roasting: "Medium - Dark",
        image: ProductFour
      },
      {
        nama: "CUP TOGATO COFFEE 3 IN 1",
        berat: "33 gr",
        harga: "$1.1 USD",
        deskripsi: "3 in 1 makes it easier for consumers to serve coffee according to taste, take it anywhere and is very practical. Packed in drip paper filters and put in aluminum foil sachets. So you get coffee without grounds with a distinctive aroma and taste and low acidity.",
        region: "Lintong-Siborongborong",
        process: "Semi Wash",
        altitude: "1200 - 1400 meters above sea level",
        roasting: "Medium - Dark",
        image: ProductFive
      },
      {
        nama: "Green Bean Arabica grade 1",
        berat: "1 kg",
        harga: "$9 USD",
        deskripsi: "Original, semi-washed, contains 12-13% water, and 5-7% residues.",
        region: "Lintong-Siborongborong",
        process: "Semi Wash",
        altitude: "1200 - 1400 meters above sea level",
        roasting: "Not Roasted",
        image: ProductSix
      },
    ]

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
              <div className="h-10"></div>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  // height: "calc(100vh - 64px)",
                }}
              >
                <p class="text-2xl mb-8 text-center font-black">OUR PRODUCTS</p>
                <div class="flex">
                  <div>
                    <img src={ShowcaseOne} class="h-32 w-32 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductOne} class="h-32 w-32 object-cover"/>
                  </div>
                  {/* <div>
                    <img src={ProductThree} class="h-32 w-32 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductSix} class="h-32 w-32 object-cover"/>
                  </div> */}
                </div>
                <div class="flex">
                  {/* <div>
                    <img src={ProductSeven} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductEight} class="h-64 w-64 object-cover"/>
                  </div> */}
                  <div>
                    <img src={ProductNine} class="h-32 w-32 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductFour} class="h-32 w-32 object-cover"/>
                  </div>
                </div>
              </div>
              <hr className="mt-16 border-2"></hr>
              {products.map((product, index) => (
                <>
                  <div 
                    class="items-center justify-center"
                    style={{
                      padding: "10px 30px"
                    }}
                  >
                      <img src={product.image} style={{ width: "450px" }} class="object-fill mb-4" />
                      <p class="text-center text-xl mb-6 font-bold">{product.nama}</p>
                      <table class="mb-6 text-md font-light">
                        <tr>
                          <td class="w-6 align-top">Origin</td>
                          <td class="w-3 text-center align-top">:</td>
                          <td>{product.region}</td>
                        </tr>
                        <tr>
                          <td class="w-6 align-top">Process</td>
                          <td class="w-3 text-center align-top">:</td>
                          <td>{product.process}</td>
                        </tr>
                        <tr>
                          <td class="w-6 align-top">Altitude</td>
                          <td class="w-3 text-center align-top">:</td>
                          <td>{product.altitude}</td>
                        </tr>
                        <tr>
                          <td class="w-6 align-top">Roasting</td>
                          <td class="w-3 text-center align-top">:</td>
                          <td>{product.roasting}</td>
                        </tr>
                      </table>
                      <p class="text-justify text-sm">
                        {product.deskripsi}
                      </p>
                    {/* <div class="flex flex-col ml-28 items-center">
                      <img src={product.image} style={{ width: "450px" }} class="object-fill mb-4" />
                      <p>Weight {product.berat}</p>
                      <p>Price : {product.harga}</p>
                    </div> */}
                  
                  </div>
                  {index !== products.length - 1 ?
                    <hr className="my-16 border-2"></hr>
                  :
                    <div className="h-16"></div>
                  }
                </>
              ))}
            </>
          :
            <>
              <div 
                class="flex items-center flex-col justify-center"
                style={{
                  height: "calc(100vh - 64px)",
                }}
              >
                <p class="text-3xl mb-20 text-center font-black">OUR PRODUCTS</p>
                <div class="flex">
                  <div>
                    <img src={ShowcaseOne} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductOne} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductThree} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductSix} class="h-64 w-64 object-cover"/>
                  </div>
                </div>
                <div class="flex">
                  <div>
                    <img src={ProductSeven} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductEight} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductNine} class="h-64 w-64 object-cover"/>
                  </div>
                  <div>
                    <img src={ProductFour} class="h-64 w-64 object-cover"/>
                  </div>
                </div>
              </div>
              {products.map((product) => (
                <div 
                  class="flex items-center justify-center mx-56"
                  style={{

                  }}
                >
                  <div class="flex flex-col w-1/2">
                    <p class="text-center text-2xl font-bold">{product.nama}</p>
                    <table class="mt-12 mb-4">
                      <tr>
                        <td class="w-24">Origin</td>
                        <td class="w-4">:</td>
                        <td>{product.region}</td>
                      </tr>
                      <tr>
                        <td class="w-24">Process</td>
                        <td class="w-4">:</td>
                        <td>{product.process}</td>
                      </tr>
                      <tr>
                        <td class="w-24">Altitude</td>
                        <td class="w-4">:</td>
                        <td>{product.altitude}</td>
                      </tr>
                      <tr>
                        <td class="w-24">Roasting</td>
                        <td class="w-4">:</td>
                        <td>{product.roasting}</td>
                      </tr>
                    </table>
                    <p class="text-justify">
                      {product.deskripsi}
                    </p>
                  </div>
                  <div class="flex flex-col ml-28 items-center">
                    <img src={product.image} style={{ width: "450px" }} class="object-fill mb-4" />
                    <p>Weight {product.berat}</p>
                    <p>Price : {product.harga}</p>
                  </div>
                </div>
              ))}
            </>
          }
          {/* <div 
            class="flex items-center justify-center h-screen mx-56"
            style={{

            }}
          >
            <div class="flex flex-col w-1/2">
              <p class="text-center text-2xl font-bold">DRIP TOGATO COFFEE</p>
              <table class="mt-12 mb-4">
                <tr>
                  <td class="w-24">Asal</td>
                  <td class="w-4">:</td>
                  <td>Siborongborong</td>
                </tr>
                <tr>
                  <td class="w-24">Proses</td>
                  <td class="w-4">:</td>
                  <td>Semi Wash</td>
                </tr>
                <tr>
                  <td class="w-24">Ketinggian</td>
                  <td class="w-4">:</td>
                  <td>1200 - 1400 meters above sea level</td>
                </tr>
                <tr>
                  <td class="w-24">Roasting</td>
                  <td class="w-4">:</td>
                  <td>Medium - Dark</td>
                </tr>
              </table>
              <p class="text-justify">
                Kopi Arabika Drip Togato adalah kopi arabika yang dipanen dan diproses secara sistem semi wash sehingga menghasilkan biji kopi arabika terbaik yang kemudian di roasting dengan profil medium-dark roast. Dikemas dalam sachet drip yang memudahkan anda membawa kopi saat bepergian ataupun bekerja. Terdiri atas 5 sachet drip coffee yang dikemas dengan drip paper filter.
              </p>
            </div>
            <div class="flex flex-col ml-28 items-center">
              <img src={ProductOne} style={{ width: "450px" }} class="object-fill mb-4" />
              <p>Berat 212 gr</p>
              <p>Harga : 55000 IDR</p>
            </div>
          </div>
          <div 
            class="flex items-center justify-center h-screen mx-56"
            style={{

            }}
          >
            <div class="flex flex-col w-1/2">
              <p class="text-center text-2xl font-bold">ROBUSTA GROUND COFFEE</p>
              <table class="mt-12 mb-4">
                <tr>
                  <td class="w-24">Asal</td>
                  <td class="w-4">:</td>
                  <td>Siborongborong</td>
                </tr>
                <tr>
                  <td class="w-24">Proses</td>
                  <td class="w-4">:</td>
                  <td>Semi Wash</td>
                </tr>
                <tr>
                  <td class="w-24">Ketinggian</td>
                  <td class="w-4">:</td>
                  <td>1200 - 1400 meters above sea level</td>
                </tr>
                <tr>
                  <td class="w-24">Roasting</td>
                  <td class="w-4">:</td>
                  <td>Medium - Dark</td>
                </tr>
              </table>
              <p class="text-justify">
              Kopi Robusta Togato adalah kopi robusta yang dipanen dan diproses secara sistem semi wash sehingga menghasilkan biji kopi robusta terbaik yang kemudian di roasting dengan profil medium-dark roast. 
              </p>
            </div>
            <div class="flex flex-col ml-28 items-center">
              <img src={ProductTwo} style={{ width: "450px" }} class="object-fill mb-4" />
              <p>Berat 200 gr</p>
              <p>Harga : 16000 IDR</p>
            </div>
          </div> */}
        </div>
      </>
    );
  }
  