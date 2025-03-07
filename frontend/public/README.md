## **\* STEPS **

# create folder frontend and backend

# in frontend

# npm create vite@latest

# goto tailwind follow postcss intallation

# npm install tailwindcss @tailwindcss/postcss postcss

# npm install react-router-dom

# npm install react-icons

# in App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";

const App = () => {
return (
<BrowserRouter>
<Routes>
<Route>
<Route path="/" element={<UserLayout />}>
{/_ User Layout _/}
</Route>
</Route>
<Route>{/_ Admin Layout _/}</Route>
</Routes>
</BrowserRouter>
);
};

export default App;

# index.css

@import "tailwindcss";

#root {
font-family: "Inter", sans-serif;
font-optical-sizing: auto;
font-style: normal;
}

# create tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
export default {
content: ["./index.html", "./src/**/\*.{js,ts,jsx,tsx}"],
theme: {
extend: {
colors: {
"juan-black": "#292928",
},
},
},
plugins: [],
};

# in src/components/Layout/UserLayout.tsx

import React from "react";
import Header from "../Common/Header";

const UserLayout = () => {
return (
<>
{/_ Header _/}

<Header />
{/_ Main Content _/}
{/_ Footer _/}
</>
);
};

export default UserLayout;

# in src/components/Common/Header.jsx

import React from "react";
import Topbar from "../Layout/Topbar";
import Navbar from "./Navbar";

const Header = () => {
return (

<div>
{/_ Topbar _/}
<Topbar />
{/_ Navbar _/}
<Navbar />
{/_ Cart Drawer _/}
</div>
);
};

export default Header;

# in src/components/Layout/Topbar.jsx

import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
return (

<div className="text-white bg-gradient-to-r from-slate-900 to-slate-700">
<div className="container mx-auto flex justify-between items-center py-2 px-4">
<div className="hidden md:flex items-center space-x-4">
<a href="#" className="hover:text-gray-300">
<TbBrandMeta className="h-5 w-5" />
</a>
<a href="#" className="hover:text-gray-300">
<IoLogoInstagram className="h-5 w-5" />
</a>
<a href="#" className="hover:text-gray-300">
<RiTwitterXLine className="h-4 w-4" />
</a>
</div>
<div className="text-sm text-center flex-grow">
<span>
Worldwide shipping! 🟣 60-day free returns Pay later with Afterpay
or Klarna 🟣 💸 Made-to-order sustainably 🌏 🟣
</span>
</div>
<div className="text-sm hidden md:block">
<a href="tel:123456789" className="hover:text-gray-300">
+63 959 654589
</a>
</div>
</div>
</div>
);
};

export default Topbar;

# in src/components/Common/Navbar.jsx

import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";

const Navbar = () => {
return (
<>

<nav className="container mx-auto flex items-center justify-between py-4 px-6">
{/_ Left - Logo _/}
<div>
<Link to="/" className="text-2xl font-medium">
Panda
</Link>
</div>
{/_ Center - Navigation Links _/}
<div className="hidden md:flex space-x-6">
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Men
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Women
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Top Wear
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Bottom Wear
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Threads
</Link>
</div>
{/_ Right - Icons _/}
<div className="flex items-center space-x-4">
<Link to="/profile" className="hover:text-black">
<HiOutlineUser className="h-6 w-6 text-gray-700" />
</Link>

          <button className="relative hover:text-black">
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2.5 bg-slate-800 text-white text-xs rounded-full px-2 py-1">
              4
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
    </>

);
};

export default Navbar;

# in Searchbar.jsx

import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";

const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState("");
const [isOpen, setIsOpen] = useState(false);

const handleSearchToggle = () => {
setIsOpen(!isOpen);
};

const handleSearch = (e) => {
e.preventDefault();
console.log("Search Log:", searchTerm);
};

return (

<div
className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`} >
{isOpen ? (
<form
          onSubmit={handleSearch}
          className="relative flex items-center justify-center w-full"
        >
<div className="relative w-1/2">
<input
type="text"
placeholder="Search"
value={searchTerm}
onChange={(e) => setSearchTerm(e.target.value)}
className="bg-gray-100 px-4 py-2 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
/>
{/_ search icon _/}
<button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
<HiMagnifyingGlass className="h-6 w-6" />
</button>
</div>
{/_ close button _/}
<button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
          >
<HiMiniXMark className="h-6 w-6" />
</button>
</form>
) : (
<button onClick={handleSearchToggle}>
<HiMagnifyingGlass className="h-6 w-6" />
</button>
)}
</div>
);
};

export default SearchBar;

#

#57:37

# in Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);

const toggleCartDrawer = () => {
setDrawerOpen(!drawerOpen);
};

return (
<>

---

  <button className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
    </>
  );
};

export default Navbar;

# in src/components/Layout/CartDrawer.jsx

import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
return (
<div
className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`} >
{/_ Close Button _/}
<div className="flex justify-end p-4">
<button onClick={toggleCartDrawer}>
<IoMdClose className="h-6 w-6 text-gray-600" />
</button>
</div>
{/_ Cart contents with scrollable area _/}
<div className="flex-grow p-4 overflow-y-auto">
<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
<CartContents />
{/_ Component for Cart Contents _/}
</div>

      {/* Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>

);
};
export default CartDrawer;

# in src/components/Cart/CartContents.jsx

import { RiDeleteBin3Line } from "react-icons/ri";

const CartContents = () => {
const cartProducts = [
{
productId: 1,
name: "T-shirt",
size: "M",
color: "Red",
quantity: 1,
price: 15,
image: "https://picsum.photos/200?random=1",
},
{
productId: 2,
name: "Jeans",
size: "L",
color: "Blue",
quantity: 1,
price: 15,
image: "https://picsum.photos/200?random=2",
},
];
return (
<div>
{cartProducts.map((product, index) => (
<div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-300"
        >
<div className="flex items-start">
<img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
<div>
<h3>{product.name}</h3>
<p className="text-sm text-gray-500">
size: {product.size} | color: {product.color}
</p>
<div className="flex items-center mt-2">
<button className="border rounded px-2 py-1 text-xl font-medium"> -
</button>
<span className="mx-4">{product.quantity}</span>
<button className="border rounded px-2 py-1 text-xl font-medium"> +
</button>
</div>
</div>
</div>
<div>
<p>${product.price.toLocaleString()}</p>
<button>
<RiDeleteBin3Line />
</button>
</div>
</div>
))}
</div>
);
};

export default CartContents;

# for Bar Navigation in mobile, in Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);
const [navDrawerOpen, setNavDrawerOpen] = useState(false);

const toggleNavDrawer = () => {
setNavDrawerOpen(!navDrawerOpen);
};

const toggleCartDrawer = () => {
setDrawerOpen(!drawerOpen);
};

return (
<>
<nav className="container mx-auto flex items-center justify-between py-4 px-6">
{/_ Left - Logo _/}
<div>
<Link to="/" className="text-2xl font-medium">
Panda
</Link>
</div>
{/_ Center - Navigation Links _/}
<div className="hidden md:flex space-x-6">
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Men
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Women
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Top Wear
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Bottom Wear
</Link>
<Link
            to="#"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Threads
</Link>
</div>
{/_ Right - Icons _/}
<div className="flex items-center space-x-4">
<Link to="/profile" className="hover:text-black">
<HiOutlineUser className="h-6 w-6 text-gray-700" />
</Link>

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2.5 bg-slate-800 text-white text-xs rounded-full px-2 py-1">
              4
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              WoMen
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>

);
};

export default Navbar;

# add footer in UserLayout.jsx

import Header from "../Common/Header";
import Footer from "../Common/Footer";

const UserLayout = () => {
return (
<>
{/_ Header _/}
<Header />
{/_ Main Content _/}
{/_ Footer _/}
<Footer />
</>
);
};

export default UserLayout;

in src/components/Common/Footer.jsx

import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
return (
<footer className="border-t border-gray-300 py-12">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
<div>
<h3 className="text-lg text-gray-800 mb-4">Newsletter</h3>
<p className="text-gray-500 mb-4">
Be the first to hear about new products, exclusive events, and
online offers.
</p>
<p className="font-medium text-sm text-gray-600 mb-6">
Sign up and get 10% off your first order.
</p>
{/_ Newsletter form _/}
<form className="flex">
<input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
              required
            />
<button
              type="submit"
              className="bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all"
            >
Subscribe
</button>
</form>
</div>

        {/* Shop links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Top Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Men's Bottom Wear
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Women's Bottom Wear
              </Link>
            </li>
          </ul>
        </div>

        {/* Support links */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Shop</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-gray-500 transition-colors">
                Features
              </Link>
            </li>
          </ul>
        </div>

        {/* Follow us */}
        <div>
          <h3 className="text-lg text-gray-800 mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <TbBrandMeta />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-500"
            >
              <RiTwitterXFill />
            </a>
          </div>
          <p className="text-gray-500">Call Us</p>
          <p>
            <FiPhoneCall className="inline-block mr-2 my-2" />
            0123-456-789
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6">
        <p className="text-gray-500 text-sm tracking-tighter text-center">
          © 2025, CompileTab. All Rights Reserved.
        </p>
      </div>
    </footer>

);
};

export default Footer;

# use outlet to render nested component

# create file in src/pages/Home.jsx and

# src/components/Layout/Hero.jsx , rafce each one

# update App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

const App = () => {
return (
<BrowserRouter>
<Routes>
<Route>
<Route path="/" element={<UserLayout />}>
<Route index element={<Home />} />
</Route>
</Route>
<Route>{/_ Admin Layout _/}</Route>
</Routes>
</BrowserRouter>
);
};

export default App;

# in Home.jsx

import Hero from "../components/Layout/Hero";

const Home = () => {
return (
<div>
<Hero />
</div>
);
};

export default Home;

# in UserLayout.jsx

import Header from "../Common/Header";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
return (
<>
{/_ Header _/}
<Header />
{/_ Main Content _/}
<main>
<Outlet />
</main>
{/_ Footer _/}
<Footer />
</>
);
};

export default UserLayout;

# this well render the Hero jsx render

# in Hero.jsx

import { Link } from "react-router-dom";
import heroImg from "../../assets/rabbit-hero.webp";

const Hero = () => {
return (
<section className="relative">
<img
        src={heroImg}
        alt="Rabbit"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"
      />
<div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
<div className="text-center text-white p-6">
<h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">
Vacation <br /> Ready
</h1>
<p className="text-sm tracking-tighter md:text-lg mb-6">
Explore our vacation-ready outfits with fast worldwide shipping.
</p>
<Link
            to="#"
            className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg"
          >
Shop Now
</Link>
</div>
</div>
</section>
);
};

export default Hero;

# then in Home.jsx

import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";

const Home = () => {
return (
<div>
<Hero />
<GenderCollectionSection />
</div>
);
};

export default Home;

# in src/components/Products/GenderCollectionSection.jsx

import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mens-collection.webp";
import womensCollectionImage from "../../assets/womens-collection.webp";

const GenderCollectionSection = () => {
return (
<section className="py-16 px-4 lg:px-0">
<div className="container mx-auto flex flex-col md:flex-row gap-8">
{/_ Women's Collection _/}
<div className="relative flex-1">
<img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          />
<div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
<h2 className="text-2xl font-bold text-gray-900 mb-3">
Women's Collection
</h2>
<Link
              to="/collections/all?gender=Women"
              className="text-gray-900 underline"
            >
Shop Now
</Link>
</div>
</div>

        {/* Men's Collection */}
        <div className="relative flex-1">
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Women's Collection
            </h2>
            <Link
              to="/collections/all?gender=Men"
              className="text-gray-900 underline"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>

);
};

export default GenderCollectionSection;

# lets add NewArrivals, in Home.jsx

import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";

const Home = () => {
return (
<div>
<Hero />
<GenderCollectionSection />
<NewArrivals />
</div>
);
};

export default Home;

# src/components/Products/NewArrivals.jsx

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewArrivals = () => {
const scrollRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(false);
const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);

const newArrivals = [
{
\_id: "1",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=1", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "2",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=2", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "3",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=3", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "4",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=4", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "5",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=5", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "6",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=6", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "7",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=7", // Corrected URL
altText: "Stylish Jacket",
},
],
},
{
\_id: "8",
name: "Stylish Jacket",
price: 120,
images: [
{
url: "https://picsum.photos/500/500?random=8", // Corrected URL
altText: "Stylish Jacket",
},
],
},
];

const handleMouseDown = (e) => {
if (!scrollRef.current) return; // Prevent error

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);

};

const handleMouseMove = (e) => {
if (!isDragging) return;
const x = e.pageX - scrollRef.current.offsetLeft;
const walk = x - startX;
scrollRef.current.scrollLeft = scrollLeft - walk;
};

const handleMouseUpOrLeave = () => {
setIsDragging(false);
};

const scroll = (direction) => {
const scrollAmount = direction === "left" ? -300 : 300;
scrollRef.current.scrollBy({ left: scrollAmount, behaviour: "smooth" });
};

// Update Scroll Buttons
const updateScrollButtons = () => {
const container = scrollRef.current;

    if (!container) return; // Prevent accessing properties of undefined

    const leftScroll = container.scrollLeft;
    const rightScrollable =
      container.scrollWidth > leftScroll + container.clientWidth;

    setCanScrollLeft(leftScroll > 0);
    setCanScrollRight(rightScrollable);

    console.log({
      scrollLeft: container.scrollLeft,
      clientWidth: container.clientWidth,
      containerScrollWidth: container.scrollWidth,
      offsetLeft: container?.offsetLeft, // Ensure it exists before logging
    });

};

useEffect(() => {
const container = scrollRef.current;
if (container) {
container.addEventListener("scroll", updateScrollButtons);
updateScrollButtons();
}

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };

}, []); // Run only on mount/unmount

return (
<section className="py-16 px-4 lg:px-0">
<div className="container mx-auto text-center mb-10 relative">
<h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
<p className="text-lg text-gray-600 mb-8">
Discover the latest styles straight off the runway, freshly added to
keep your wardrobe on the cutting edge of fashion.
</p>

        {/* Scroll Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border ${
              canScrollLeft
                ? "bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } `}
          >
            <FiChevronLeft className="text-2xl " />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`p-2 rounded border ${
              canScrollRight
                ? "bg-white text-black cursor-pointer"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            } `}
          >
            <FiChevronRight className="text-2xl " />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 relative ${
          isDragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[100%] sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.images[0]?.url}
              alt={product.images[0]?.altText || product.name}
              className="w-full h-[500px] object-cover rounded-lg"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white p-4 rounded-b-lg">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>

);
};

export default NewArrivals;

# lets add BEST SELLER

# intall this

npm install sonner

# in App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";

const App = () => {
return (
<BrowserRouter>
<Toaster position="top-center" />
<Routes>

# in Home.jsx

import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
return (
<div>
<Hero />
<GenderCollectionSection />
<NewArrivals />

      {/* Best Sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />
    </div>

);
};

export default Home;

# in src/components/Products/ProductDetails.jsx

import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
name: "Stylish Jacket",
price: 120,
originalPrice: 150,
description: "This is a stylish Jacket perfect for any occasion",
brand: "FashionBrand",
material: "Leather",
sizes: ["S", "M", "L", "XL"],
colors: ["Red", "Black"],
images: [
{
url: "https://picsum.photos/500/500?random=1",
altText: "Stylish Jacket 1",
},
{
url: "https://picsum.photos/500/500?random=2",
altText: "Stylish Jacket 2",
},
],
};

const similarProducts = [
{
\_id: 1,
name: "Product 1",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=1" }],
},
{
\_id: 2,
name: "Product 2",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=2" }],
},
{
\_id: 3,
name: "Product 3",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=3" }],
},
{
\_id: 4,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=4" }],
},
];

const ProductDetails = () => {
const [mainImage, setMainImage] = useState("");
const [selectedSize, setSelectedSize] = useState("");
const [selectedColor, setSelectedColor] = useState("");
const [quantity, setQuantity] = useState(1);
const [isButtonDisabled, setIsButtonDisabled] = useState(false);

useEffect(() => {
if (selectedProduct?.images?.length > 0) {
setMainImage(selectedProduct.images[0].url);
}
}, [selectedProduct]);

const handleQuantityChange = (action) => {
if (action === "plus") setQuantity((prev) => prev + 1);
if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
};

const handleAddToCart = () => {
if (!selectedSize || !selectedColor) {
toast.error("Please select a size and color before adding to cart.", {
duration: 1000,
});
return;
}

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);

};

return (
<div className="p-6">
<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
<div className="flex flex-col md:flex-row">
{/_ Left Thumbnails _/}
<div className="hidden md:flex flex-col space-y-4 mr-6">
{selectedProduct.images.map((image, index) => (
<img
onClick={() => setMainImage(image.url)}
key={index}
src={image.url}
alt={image.altText || `Thumbnail ${index}`}
className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
/>
))}
</div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* {Mobile Thumbnail} */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding item to cart..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>

);
};

export default ProductDetails;

# in src/components/Products/ProductGrid.jsx

import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
name: "Stylish Jacket",
price: 120,
originalPrice: 150,
description: "This is a stylish Jacket perfect for any occasion",
brand: "FashionBrand",
material: "Leather",
sizes: ["S", "M", "L", "XL"],
colors: ["Red", "Black"],
images: [
{
url: "https://picsum.photos/500/500?random=1",
altText: "Stylish Jacket 1",
},
{
url: "https://picsum.photos/500/500?random=2",
altText: "Stylish Jacket 2",
},
],
};

const similarProducts = [
{
\_id: 1,
name: "Product 1",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=1" }],
},
{
\_id: 2,
name: "Product 2",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=2" }],
},
{
\_id: 3,
name: "Product 3",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=3" }],
},
{
\_id: 4,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=4" }],
},
];

const ProductDetails = () => {
const [mainImage, setMainImage] = useState("");
const [selectedSize, setSelectedSize] = useState("");
const [selectedColor, setSelectedColor] = useState("");
const [quantity, setQuantity] = useState(1);
const [isButtonDisabled, setIsButtonDisabled] = useState(false);

useEffect(() => {
if (selectedProduct?.images?.length > 0) {
setMainImage(selectedProduct.images[0].url);
}
}, [selectedProduct]);

const handleQuantityChange = (action) => {
if (action === "plus") setQuantity((prev) => prev + 1);
if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
};

const handleAddToCart = () => {
if (!selectedSize || !selectedColor) {
toast.error("Please select a size and color before adding to cart.", {
duration: 1000,
});
return;
}

    setIsButtonDisabled(true);

    setTimeout(() => {
      toast.success("Product added to cart!", {
        duration: 1000,
      });
      setIsButtonDisabled(false);
    }, 500);

};

return (
<div className="p-6">
<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
<div className="flex flex-col md:flex-row">
{/_ Left Thumbnails _/}
<div className="hidden md:flex flex-col space-y-4 mr-6">
{selectedProduct.images.map((image, index) => (
<img
onClick={() => setMainImage(image.url)}
key={index}
src={image.url}
alt={image.altText || `Thumbnail ${index}`}
className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
/>
))}
</div>

          {/* Main Image */}
          <div className="md:w-1/2">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Main Product"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          {/* {Mobile Thumbnail} */}
          <div className="md:hidden flex overscroll-x-scroll space-x-4 mb-4">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
                  mainImage === image.url ? "border-black" : "border-gray-300"
                }`}
              />
            ))}
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice &&
                `$${selectedProduct.originalPrice}`}
            </p>
            <p className="text-xl text-gray-500 mb-2">
              ${selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">{selectedProduct.description}</p>

            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-8 h-8 rounded-full border cursor-pointer ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border-gray-300"
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.5)",
                    }}
                  ></button>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border cursor-pointer ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisabled
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisabled ? "Adding item to cart..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="text-xl font-bold mb-4">Characteristics:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-1">Brand</td>
                    <td className="py-1">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-1">Material</td>
                    <td className="py-1">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>

);
};

export default ProductDetails;

# NEXT THE TOP WEARS FOR WOMEN

# in Home.jsx

import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
{
\_id: 5,
name: "Product 1",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=5" }],
},
{
\_id: 6,
name: "Product 2",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=6" }],
},
{
\_id: 7,
name: "Product 3",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=7" }],
},
{
\_id: 8,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=8" }],
},
{
\_id: 9,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=9" }],
},
{
\_id: 10,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=10" }],
},
{
\_id: 11,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=11" }],
},
{
\_id: 12,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=12" }],
},
];

const Home = () => {
return (
<div>
<Hero />
<GenderCollectionSection />
<NewArrivals />

      {/* Best Sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
    </div>

);
};

export default Home;

# add Featured Collection

# in Home.jsx

        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
    </div>

);

# in src/components/Products/FeaturedCollection.jsx

import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

const FeaturedCollection = () => {
return (
<section className="py-16 px-4 lg:px-0">
<div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
{/_ Left Content _/}
<div className="lg:w-1/2 p-8 text-center lg:text-left">
<h2 className="text-lg font-semibold text-gray-700 mb-2">
Comfort and Style
</h2>
<h2 className="text-4xl lg:text-5xl font-bold mb-6">
Apparel made for your everyday life
</h2>
<p className="text-lg text-gray-600 mb-6">
Discover high-quality, comfortable clothing that effortlessly blends
fashion and function. Designed to make you look and feel great every
day.
</p>
<Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
Shop Now
</Link>
</div>

        {/* Right Content */}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>

);
};

export default FeaturedCollection;

# next the FEATURE AD SECTION

# in Home.jsx

   </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>

);

# in src/components/Products/FeaturesSection.jsx

import {
HiArrowPath,
HiArrowPathRoundedSquare,
HiOutlineCreditCard,
HiOutlineShoppingBag,
HiShoppingBag,
} from "react-icons/hi2";

const FeaturesSection = () => {
return (
<section className="py-16 px-4 bg-white">
<div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
{/_ Feature 1 _/}
<div className="flex flex-col items-center">
<div className="p-4 rounded-full mb-4">
<HiOutlineShoppingBag className="text-xl" />
</div>
<h4 className="tracking-tighter mb-2">FREE INTERNATIONAL SHIPPING</h4>
<p className="text-gray-600 text-sm tracking-tighter">
On all orders over $100.00
</p>
</div>

        {/* Feature 2 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiArrowPathRoundedSquare className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">45 DAYS RETURN</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            Money back guarantee
          </p>
        </div>

        {/* Feature 1 */}
        <div className="flex flex-col items-center">
          <div className="p-4 rounded-full mb-4">
            <HiOutlineCreditCard className="text-xl" />
          </div>
          <h4 className="tracking-tighter mb-2">SECURE CHECKOUT</h4>
          <p className="text-gray-600 text-sm tracking-tighter">
            100% secured checkout process
          </p>
        </div>
      </div>
    </section>

);
};

export default FeaturesSection;

# CREATE THE LOGIN PAGE

# in App.jsx

import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";

const App = () => {
return (
<BrowserRouter>
<Toaster position="top-center" />
<Routes>
<Route>
<Route path="/" element={<UserLayout />}>
<Route index element={<Home />} />
<Route path="login" element={<Login />} />
</Route>
</Route>
<Route>{/_ Admin Layout _/}</Route>
</Routes>
</BrowserRouter>
);
};import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";

const App = () => {
return (
<BrowserRouter>
<Toaster position="top-center" />
<Routes>
<Route>
<Route path="/" element={<UserLayout />}>
<Route index element={<Home />} />
<Route path="login" element={<Login />} />
</Route>
</Route>
<Route>{/_ Admin Layout _/}</Route>
</Routes>
</BrowserRouter>
);
};

export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";

const App = () => {
return (
<BrowserRouter>
<Toaster position="top-center" />
<Routes>
<Route>
<Route path="/" element={<UserLayout />}>
<Route index element={<Home />} />
<Route path="login" element={<Login />} />
</Route>
</Route>
<Route>{/_ Admin Layout _/}</Route>
</Routes>
</BrowserRouter>
);
};

export default App;

# in src/pages/Login.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

return (
<div className="flex">
<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
<form className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
<div className="flex justify-center mb-6">
<h2 className="text-xl font-medium">Panda</h2>
</div>
<h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
<p className="text-center mb-6">
Enter your username and password to Login
</p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link to="/register" className="text-blue-500">
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="Login to Account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>

);
};

export default Login;

# REGISTER

# in App.jsx

  <Route>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>

# in src/pages/Register.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
console.log("User Registered:", { name, email, password });
};

return (
<div className="flex">
<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
<form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
<div className="flex justify-center mb-6">
<h2 className="text-xl font-medium">Panda</h2>
</div>
<h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
<p className="text-center mb-6">Create Your Panda Account</p>
<div className="mb-4">
<label className="block text-sm font-semibold mb-2">Name</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
className="w-full p-2 border rounded"
placeholder="Enter your Name"
/>
</div>
<div className="mb-4">
<label className="block text-sm font-semibold mb-2">Email</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full p-2 border rounded"
placeholder="Enter your email address"
/>
</div>
<div className="mb-4">
<label className="block text-sm font-semibold mb-2">Password</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full p-2 border rounded"
placeholder="Enter your password"
/>
</div>
<button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
Sign Up
</button>
<p className="mt-6 text-center text-sm">
Don't have an account?{" "}
<Link to="/login" className="text-blue-500">
Login
</Link>
</p>
</form>
</div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Login to Account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>

);
};

export default Register;

ADD PROFILE PAGE

# in App.jsx

<Route path="/" element={<UserLayout />}>
<Route index element={<Home />} />
<Route path="login" element={<Login />} />
<Route path="register" element={<Register />} />
<Route path="profile" element={<Profile />} />
</Route>

# in sec/pages/Profile.jsx

import MyOrder from "./MyOrder";

const Profile = () => {
return (
<div className="min-h-screen flex flex-col">
<div className="flex-grow container mx-auto p-4 md:p-6">
<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
{/_ Left Section _/}
<div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
<h1 className="text-2xl md:text-3xl font-bold mb-4">John Doe</h1>
<p className="text-lg text-gray-600 mb-4">John@example.com</p>
<button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
Logout
</button>
</div>
{/_ Right Section: Orders table _/}
<div className="w-full md:w-2/3 lg:w-3/4">
<MyOrder />
</div>
</div>
</div>
</div>
);
};

export default Profile;

# in src/pages/MyOrder.jsx

import { useEffect, useState } from "react";

const MyOrder = () => {
const [orders, setOrders] = useState([]);

useEffect(() => {
// Simulate fetching orders
setTimeout(() => {
const mockOrders = [
{
\_id: "34567",
createdAt: new Date(),
shippingAddress: { city: "New York", country: "USA" },
orderItems: [
{
name: "Product 1",
image: "https://picsum.photos/500/500?random=1",
},
],
totalPrice: 100,
isPaid: true,
},
{
\_id: "34568",
createdAt: new Date(),
shippingAddress: { city: "New York", country: "USA" },
orderItems: [
{
name: "Product 2",
image: "https://picsum.photos/500/500?random=2",
},
],
totalPrice: 100,
isPaid: true,
},
{
\_id: "34569",
createdAt: new Date(),
shippingAddress: { city: "New York", country: "USA" },
orderItems: [
{
name: "Product 3",
image: "https://picsum.photos/500/500?random=3",
},
],
totalPrice: 100,
isPaid: true,
},
];
setOrders(mockOrders);
}, 1000);
}, []);

return (
<div className="max-w-7xl mx-auto p-4 sm:p-6">
<h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      <div className="relative shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center textgra5">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

);
};

export default MyOrder;

# NEXT COLLECTION PAGE OR PRODUCT FILTER PAGE

# in App.jsx

        <Route path="/" element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route
              path="collections/:collection"
              element={<CollectionPage />}
            />
          </Route>

# in src/pages/CollectionPage.jsx

import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";
import SortOptions from "../components/Products/SortOptions";

const CollectionPage = () => {
const [products, setProducts] = useState([]);
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const sidebarRef = useRef(null);

const toggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen);
};

const handleClickOutside = (e) => {
// Close sidebar if clicked outside
if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
setIsSidebarOpen(false);
}
};

useEffect(() => {
// Add Event listener for clicks
document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

}, []); // Added empty dependency array

useEffect(() => {
setTimeout(() => {
const fetchedProducts = [
{
\_id: 5,
name: "Product 1",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=5" }],
},
{
\_id: 6,
name: "Product 2",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=6" }],
},
{
\_id: 7,
name: "Product 3",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=7" }],
},
{
\_id: 8,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=8" }],
},
{
\_id: 9,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=9" }],
},
{
\_id: 10,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=10" }],
},
{
\_id: 11,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=11" }],
},
{
\_id: 12,
name: "Product 4",
price: 1000,
images: [{ url: "https://picsum.photos/500/500?random=12" }],
},
];
setProducts(fetchedProducts);
}, 1000);
}, []);

return (
<div className="flex flex-col lg:flex-row">
{/_ Mobile Filter button _/}
<button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
<FaFilter className="mr-2" /> Filters
</button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>
      <div className="flex-grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>

        {/* Sort Options */}
        <SortOptions />

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>

);
};

export default CollectionPage;

# in src/components/Products/FilterSidebar.jsx

import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
const [searchParams, setSearchParams] = useSearchParams();
const navigate = useNavigate();
const [filters, setFilters] = useState({
category: "",
gender: "",
color: "",
size: [],
material: [],
brand: [],
minPrice: 0,
maxPrice: 100,
});

const [priceRange, setPriceRange] = useState([0, 100]);

const categories = ["Top Wear", "Bottom Wear"];

const colors = [
"Red",
"Blue",
"Black",
"Green",
"Yellow",
"Gray",
"White",
"Pink",
"Beige",
"Navy",
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const materials = [
"Cotton",
"Wool",
"Denim",
"Polyester",
"Silk",
"Linen",
"Viscose",
"Fleece",
];

const brands = [
"Urban Threads",
"Modern Fit",
"Street Style",
"Beach Breeze",
"Fashionista",
"ChicStyle",
];

const genders = ["Men", "Women"];

useEffect(() => {
const params = Object.fromEntries([...searchParams]);

    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });

    setPriceRange([0, params.maxPrice || 100]);

}, [searchParams]);

const handleFilterChange = (e) => {
const { name, value, checked, type } = e.target;
let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);

};

const updateURLParams = (newFilters) => {
const params = new URLSearchParams();

    // {category: "Top Wear", size: ["XS", "S"]}

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`);

};

const handlePriceChange = (e) => {
const newPrice = e.target.value;
setPriceRange([0, newPrice]);
const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
setFilters(filters); // Corrected: Should be setFilters(newFilters)
updateURLParams(newFilters);
};

return (
<div className="p-4">
<h3 className="text-xl font-medium text-gray-800 mb-4">Filter</h3>

      {/* Category Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <div key={category} className="flex items-center mb-1">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={handleFilterChange}
              checked={filters.category === category}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="flex items-center mb-1">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`w-8 h-8 rounded-full border border-gray-300 cursor-pointer transition hover:scale-105 ${
                filters.color === color ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {sizes.map((size) => (
          <div key={size} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <div key={material} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand Filter */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center mb-1">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
        />
        <div className="flex items-center justify-between">
          <span>₱ 0.00</span>
          <span>₱ {priceRange[1]}</span>
        </div>
      </div>
    </div>

);
};

export default FilterSidebar;

# then in src/components/Products/SortOptions.jsx

import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
const [searchParams, setSearchParams] = useSearchParams();

const handleSortChange = (e) => {
const sortBy = e.target.value;
searchParams.set("sortBy", sortBy);
setSearchParams(searchParams);
};

return (
<div className="mb-4 flex items-center justify-end">
<select
id="sort"
onChange={handleSortChange}
value={searchParams.get("sortBy") || ""}
className="border p-2 rounded-md focus:outline-none" >
<option value="">Default</option>
<option value="priceAsc">Price: Low to High</option>
<option value="priceDesc">Price: High to Low</option>
<option value="popularity">Popularity</option>
</select>
</div>
);
};

export default SortOptions;

# NEXT LETS TEST THE CHECOUT PAYMENT METHOD TRIAL FOR PAYPAL

# intall this

npm i @paypal/react-paypal-js

# in App.jsx

<Route
path="collections/:collection"
element={<CollectionPage />}
/>
<Route path="product/:id" element={<ProductDetails />} />
<Route path="checkout" element={<Checkout />} />
</Route>
</Route>

# in CartDrawer.jsx

import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
const navigate = useNavigate();

const handleCheckout = () => {
navigate("/checkout");
};

---

{/_ Checkout button fixed at the bottom _/}
<div className="p-4 bg-white sticky bottom-0">
<button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
Checkout
</button>

# in src/components/Cart/Checkout.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaypalButton from "./PaypalButton";

const cart = {
products: [
{
name: "T-shirt",
size: "M",
color: "Red",
quantity: 1,
price: 150,
image: "https://picsum.photos/200?random=1",
},
{
name: "Jeans",
size: "L",
color: "Blue",
quantity: 1,
price: 105,
image: "https://picsum.photos/200?random=2",
},
],
totalPrice: 205,
};

const Checkout = () => {
const [checkoutId, setCheckoutId] = useState(null);
const navigate = useNavigate();
const [shippingAddress, setShippingAddress] = useState({
firstName: "",
lastName: "",
address: "",
city: "",
postalCode: "",
country: "",
phone: "",
});

const handleCreateCheckout = (e) => {
e.preventDefault();
setCheckoutId(123);
};

const handlePaymentSuccess = (details) => {
console.log("Payment Successful", details);
navigate("/order-confirmation");
};

return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
{/_ Left Section _/}
<div className="bg-white rounded-lg p-6">
<h2 className="text-2xl uppercase mb-6">Checkout</h2>
<form onSubmit={handleCreateCheckout}>
<h3 className="text-lg mb-4">Contact Details</h3>
<div className="mb-4">
<label className="block text-gray-700">Email</label>
<input
              type="email"
              value="user@example.com"
              className="w-full p-2 border rounded"
              disabled
            />
</div>
<h3 className="text-lg mb-4">Delivery</h3>
<div className="mb-4 grid grid-cols-2 gap-4">
<div>
<label className="block text-gray-700">First Name</label>
<input
type="text"
value={shippingAddress.firstName}
onChange={(e) =>
setShippingAddress({
...shippingAddress,
firstName: e.target.value,
})
}
className="w-full p-2 border rounded"
required
/>
</div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded cursor-pointer"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PaypalButton
                  amount={100}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment Failed. Please Try Again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>

);
};
export default Checkout;

# in src/components/Cart/PaypalButton.jsx

import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
return (
<PayPalScriptProvider
options={{
        "client-id":
          "AVQYfLk6YIWU-VlzGMYW-vBzcjk57aNJk5CngaUdh-QDIx_NIjbZh7wwq4H_dZAg7bUvwFIzpzxCyj6z",
      }} >
<PayPalButtons
style={{ layout: "vertical" }}
createOrder={(data, actions) => {
return actions.order.create({
purchase_units: [{ amount: { value: amount } }],
});
}}
onApprove={(data, actions) => {
return actions.order.capture().then(onSuccess);
}}
onError={onError}
/>
</PayPalScriptProvider>
);
};

export default PayPalButton;

# THEN NEXT LETS CREATE THE ORDER CONFIRMATION PAGE

# in App.jsx

<Route path="product/:id" element={<ProductDetails />} />
<Route path="checkout" element={<Checkout />} />
<Route
path="order-confirmation"
element={<OrderConfirmationPage />}
/>
</Route>

# in src/pages/OrderConfirmation.jsx

const checkout = {
\_id: "12323",
createdAt: new Date(),
checkoutItems: [
{
productId: "1",
name: "Jacket",
color: "black",
size: "M",
price: 150,
quantity: 1,
image: "https://picsum.photos/150?random=1",
},
{
productId: "2",
name: "Shirts",
color: "black",
size: "M",
price: 260,
quantity: 10,
image: "https://picsum.photos/150?random=2",
},
],
shippingAddress: {
address: "123 Fashion Streeet",
city: "Singapore",
country: "UAE",
},
};

const OrderConfirmationPage = () => {
const calculateEstimatedDelivery = (createdAt) => {
const orderDate = new Date(createdAt);
orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
return orderDate.toLocaleDateString();
};

return (
<div className="max-w-4xl mx-auto p-6 bg-white">
<h1 className="text-4xl font-bold text-center text-emerald-700 mb-8">
Thank You for Your Order!
</h1>

      {checkout && (
        <div className="p-6 rounded-lg border">
          <div className="flex justify-between mb-20">
            {/* Order Id and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order ID: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-emerald-700 text-sm">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-md mr-4"
                />
                <div>
                  <h4 className="text-md font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-md">${item.price}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/* Delivery Info */}
            <div>
              <h4 className="text-lg font-semibold mb-2">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">{checkout.shippingAddress.city}</p>{" "}
              <p className="text-gray-600">
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>

);
};

export default OrderConfirmationPage;

# REDIRECT THE DRAWER CARD CART CHECKOUT TO CHECKOUT PAGE THEN ORDER CONFIRM

# in CartDrawer.jsx

import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
const navigate = useNavigate();

const handleCheckout = () => {
toggleCartDrawer();
navigate("/checkout");
};

return (
<div
className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`} >
{/_ Close Button _/}
<div className="flex justify-end p-4">
<button onClick={toggleCartDrawer}>
<IoMdClose className="h-6 w-6 text-gray-600" />
</button>
</div>
{/_ Cart contents with scrollable area _/}
<div className="flex-grow p-4 overflow-y-auto">
<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
<CartContents />
{/_ Component for Cart Contents _/}
</div>

      {/* Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button
          onClick={handleCheckout}
          className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>

);
};
export default CartDrawer;

# in OrderConfirmationPage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

const checkout = {
\_id: "12323",
createdAt: new Date(),
checkoutItems: [
{
productId: "1",
name: "Jacket",
color: "black",
size: "M",
price: 150,
quantity: 1,
image: "https://picsum.photos/150?random=1",
},
{
productId: "2",
name: "Shirts",
color: "black",
size: "M",
price: 260,
quantity: 10,
image: "https://picsum.photos/150?random=2",
},
],
shippingAddress: {
address: "123 Fashion Streeet",
city: "Singapore",
country: "UAE",
},
};

const OrderConfirmationPage = () => {
const navigate = useNavigate();

const calculateEstimatedDelivery = (createdAt) => {
const orderDate = new Date(createdAt);
orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
return orderDate.toLocaleDateString();
};

return (
<div className="max-w-3xl mx-auto px-6 py-12 bg-white">
<h1 className="text-4xl font-bold text-center text-green-600 tracking-wide">
Order Confirmed 🎉
</h1>
<p className="text-center text-gray-500 mt-2">
Thanks for shopping with us. Your order is on the way!
</p>

      <div className="mt-8 border border-gray-200 shadow-md p-6 rounded-xl">
        {/* Order Details */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Order ID: <span className="text-gray-600">{checkout._id}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Ordered on: {new Date(checkout.createdAt).toLocaleDateString()}
            </p>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            Estimated Delivery:{" "}
            <span className="text-green-600">
              {calculateEstimatedDelivery(checkout.createdAt)}
            </span>
          </p>
        </div>

        {/* Ordered Items */}
        <div className="divide-y divide-gray-200">
          {checkout.checkoutItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center py-4 hover:bg-gray-50 transition-all duration-300 rounded-lg px-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg shadow"
              />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-medium text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.color} | {item.size}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Shipping Info */}
        <div className="mt-8 flex justify-between gap-6">
          {/* Payment Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">Payment</h4>
            <p className="text-gray-500 mt-1">PayPal</p>
          </div>

          {/* Delivery Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">
              Shipping Address
            </h4>
            <p className="text-gray-500 mt-1">
              {checkout.shippingAddress.address},{" "}
              {checkout.shippingAddress.city},{" "}
              {checkout.shippingAddress.country}
            </p>
          </div>
        </div>

        {/* Back to Shopping Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white cursor-pointer px-6 py-3 rounded-lg text-sm font-medium tracking-wide hover:bg-gray-800 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>

);
};

export default OrderConfirmationPage;

# CREATE THE ORDER DETAILS

# in App.jsx

            <Route path="product/:id" element={<ProductDetails />} />
            <Route path="checkout" element={<Checkout />} />
            <Route
              path="order-confirmation"
              element={<OrderConfirmationPage />}
            />
            <Route path="order/:id" element={<OrderDetailsPage />} />
          </Route>
        </Route>

# in src/pages/OrderDetailsPage.jsx

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const OrderDetailsPage = () => {
const { id } = useParams();
const [orderDetails, setOrderDetails] = useState(null);

useEffect(() => {
const mockOrderDetails = {
\_id: id,
createdAt: new Date(),
isPaid: true,
isDelivered: false,
paymentMethod: "PayPal",
shippingMethod: "Standard",
shippingAddress: { city: "New York", country: "USA" },
orderItems: [
{
productId: "1",
name: "Jacket",
price: 120,
quantity: 1,
image: "https://picsum.photos/150?random=1",
},
{
productId: "2",
name: "Sweatrer",
price: 180,
quantity: 2,
image: "https://picsum.photos/150?random=2",
},
],
};
setOrderDetails(mockOrderDetails);
}, [id]); // Added id as a dependency

return (
<div className="max-w-7xl mx-auto p-4 sm:p-6">
<h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
{!orderDetails ? (
<p>No Order details found</p>
) : (
<div className="p-4 sm:p-6 rounded-lg border">
{/_ Order Info _/}
<div className="flex flex-col sm:flex-row justify-between mb-8">
<div>
<h3 className="text-lg md:text-xl font-semibold">
Order ID: #{orderDetails.\_id}
</h3>
<p className="text-gray-600">
{new Date(orderDetails.createdAt).toLocaleDateString()}
</p>
</div>

            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/* Customer, Payment, Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {orderDetails.shippingAddress &&
                  `${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* Product list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">${item.quantity}</td>
                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

            {/* Back to Orders Link */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            Back to My Orders
          </Link>
        </div>
      )}
    </div>

);
};

export default OrderDetailsPage;

# NAVIGATE EVERY PRODUCT WHEN CLICK ON ORDERS

# in App.jsx

/>
<Route path="order/:id" element={<OrderDetailsPage />} />
<Route path="my-orders" element={<MyOrder />} />
</Route>
</Route>
<Route>{/_ Admin Layout _/}</Route>
</Routes>

# in MyOrder.jsx

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const MyOrder = () => {
const [orders, setOrders] = useState([]);
const navigate = useNavigate();

---

    setOrders(mockOrders);
    }, 1000);

}, []);

const handleRowClick = (orderId) => {
navigate(`/order/${orderId}`);
};

---

 <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img

# UPDATE PayPalButton.jsx for safe KEYS

    <PayPalScriptProvider
      options={{
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
      }}
    >

LETS GO TO ADMIN

# in App.jsx

     </Route>
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin Layout  */}
        </Route>
      </Routes>

# in Navbar.jsx

{/_ Right - Icons _/}
<div className="flex items-center space-x-4">
<Link
            to="/admin"
            className="block bg-slate-700 px-4 py-2 text-sm text-white"
          >
Admin
</Link>
<Link to="/profile" className="hover:text-black">
<HiOutlineUser className="h-6 w-6 text-gray-700" />
</Link>

# in src/components/Admin/AdminLayout.jsx

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen);
};

return (
<div className="min-h-screen flex flex-col md:flex-row relative">
{/_ Mobile Toggle Button _/}
<div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
<button onClick={toggleSidebar}>
<FaBars size={24} />
</button>
<h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
</div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-80 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute transform transition-transform duration-300 md:translate-x-0 md:static md:block z-20 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar */}
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-grow p-6 overflow-auto">
        <Outlet />
      </div>
    </div>

);
};

export default AdminLayout;

# in src/components/Admin/AdminSidebar.jsx

import {
FaBoxOpen,
FaClipboardList,
FaSignOutAlt,
FaStore,
FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
const navigate = useNavigate();

const handleLogout = () => {
navigate("/");
};

return (
<div className="p-6">
<div className="mb-6">
<Link to="/admin" className="text-2xl font-medium">
Panda
</Link>
</div>
<h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
<nav className="flex flex-col space-y-2">
<NavLink
to="/admin/users"
className={({ isActive }) =>
isActive
? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
: "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
} >
<FaUser />
<span>Users</span>
</NavLink>
<NavLink
to="/admin/products"
className={({ isActive }) =>
isActive
? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
: "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
} >
<FaBoxOpen />
<span>Products</span>
</NavLink>
<NavLink
to="/admin/orders"
className={({ isActive }) =>
isActive
? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
: "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
} >
<FaClipboardList />
<span>Orders</span>
</NavLink>
<NavLink
to="/"
className={({ isActive }) =>
isActive
? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
: "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
} >
<FaStore />
<span>Shop</span>
</NavLink>
</nav>
<div className="mt-6">
<button
          onClick={handleLogout}
          className="focus:outline-none w-full cursor-pointer text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        >
<span className="flex items-center justify-center gap-3">
<FaSignOutAlt />
Logout
</span>
</button>
</div>
</div>
);
};

export default AdminSidebar;

# Admin MainPage

# in App.jsx

 </Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomepage />} />
        </Route>
      </Routes>

# in src/pages/AdminHomePage.jsx

import { Link } from "react-router-dom";

const AdminHomePage = () => {
const orders = [
{
_id: 123123,
user: {
name: "John Doe",
},
totalPrice: 110,
status: "Processing",
},
{
_id: 123123,
user: {
name: "John Doe",
},
totalPrice: 110,
status: "Processing",
},
{
_id: 123123,
user: {
name: "John Doe",
},
totalPrice: 110,
status: "Processing",
},
];

return (
<div className="max-w-7xl mx-auto p-6">
<h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="p-4 shadow-md rounded-lg">
<h2 className="text-xl font-semibold">Revenue</h2>
<p className="text-2xl">$10000</p>
</div>
<div className="p-4 shadow-md rounded-lg">
<h2 className="text-xl font-semibold">Total Orders</h2>
<p className="text-2xl">200</p>
<Link to="/admin/orders" className="text-blue-500 hover:underline">
Manage Orders
</Link>
</div>
<div className="p-4 shadow-md rounded-lg">
<h2 className="text-xl font-semibold">Total Products</h2>
<p className="text-2xl">$10000</p>
<Link to="/admin/orders" className="text-blue-500 hover:underline">
Manage Products
</Link>
</div>
</div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user.name}</td>
                    <td className="p-4">{order.totalPrice}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500">
                    No recent orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>

);
};

export default AdminHomePage;

# ADMIN USER MANAGEMENT

# in App.jsx

<Route path="/admin" element={<AdminLayout />}>
<Route index element={<AdminHomepage />} />
<Route path="users" element={<UserManagement />} />
</Route>
</Routes>
</BrowserRouter>

# in src/components/Admin/UserManagement.jsx

import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const UserManagement = () => {
const users = [
{
_id: 5615,
name: "John Doe",
email: "john@example.com",
role: "admin",
},
];

const [formData, setFormData] = useState({
name: "",
email: "",
password: "",
role: "customer", // Default role
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(formData);

    setFormData({
      name: "",
      email: "",
      password: "",
      role: "customer",
    });

};

const handleRoleChange = (userId, newRole) => {
console.log({ id: userId, role: newRole });
};

const handleDelete = (userId) => {
if (window.confirm("Are you sure you want to delete this user?")) {
console.log("deleting user with ID", userId);
}
};

return (
<div className="max-w-7xl mx-auto p-6">
<h2 className="text-2xl font-bold mb-6">User Management</h2>

      {/* Add New User Form */}
      <div className="p-6 rounded-lg mb-6">
        <h3 className="text-lg font-bold mb-4">Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-green-500 cursor-pointer text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Add User
          </button>
        </form>
      </div>

      {/* User List Management */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-3 px-4">Name</th>
              <th className="py-3 px-4">Email</th>
              <th className="py-3 px-4">Role</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="border-b hover:bg-gray-50">
                <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                  {user.name}
                </td>
                <td className="p-4">{user.email}</td>
                <td className="p-4">
                  <select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                    className="p-2 border rounded"
                  >
                    <option value="customer">Customer</option>
                    <option value="admin">Admin</option>
                  </select>
                </td>
                <td className="p-4">
                  <button
                    className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

);
};

export default UserManagement;

# ADMIN PRODUCT MANAGEMENT

# in App.jsx

<Route index element={<AdminHomepage />} />
<Route path="users" element={<UserManagement />} />
<Route path="products" element={<ProductManagement />} />
</Route>
</Routes>

# in src/components/Admin/ProductManagement.jsx

import { Link } from "react-router-dom";

const ProductManagement = () => {
const products = [
{
_id: 123123,
name: "Shirt",
price: 110,
sku: "123123213",
},
];

const handleDelete = (id) => {
if (window.confirm("Are you sure you want to delete the Product?")) {
console.log("Deleted the Product with id: ", id);
}
};

return (
<div className="max-w-7xl mx-auto p-6">
<h2 className="text-2xl font-bold mb-6">Product Management</h2>
<div className="overflow-x-auto shadow-md sm:rounded-lg">
<table className="min-w-full text-left text-gray-500">
<thead className="bg-gray-100 text-xs uppercase text-gray-700">
<tr>
<th className="py-3 px-4">Name</th>
<th className="py-3 px-4">Price</th>
<th className="py-3 px-4">SKU</th>
<th className="py-3 px-4">Actions</th>
</tr>
</thead>
<tbody>
{products.length > 0 ? (
products.map((product) => (
<tr
                  key={product._id}
                  className="border-b hover:bg-gray-50 cursor-pointer"
                >
<td className="p-4 font-medium text-gray-900 whitespace-nowrap">
{product.name}
</td>
<td className="p-4">${product.price}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product.\_id}/edit`}
className="bg-yellow-500 text-white px-4 py-[6px] rounded mr-2 hover:bg-yellow-600" >
Edit
</Link>
<button
onClick={() => handleDelete(product.\_id)}
className="bg-red-500 cursor-pointer text-white px-2 py-1 rounded hover:bg-red-600" >
Delete
</button>
</td>
</tr>
))
) : (
<tr>
<td colSpan={4} className="p-4 text-center text-gray-500">
No products found
</td>
</tr>
)}
</tbody>
</table>
</div>
</div>
);
};

export default ProductManagement;

# ADMIN EDIT PRODUCT

# in App.jsx

<Route path="/admin" element={<AdminLayout />}>
<Route index element={<AdminHomepage />} />
<Route path="users" element={<UserManagement />} />
<Route path="products" element={<ProductManagement />} />
<Route path="products/:id/edit" element={<EditProductPage />} />
</Route>

# then in src/components/Admin/EditProductPage.jsx

import { useState } from "react";

const EditProductPage = () => {
const [productData, setProductData] = useState({
name: "",
description: "",
price: 0,
countInStock: 0,
sku: "",
category: "",
brand: "",
sizes: [],
colors: [],
collections: "",
material: "",
gender: "",
images: [
{
url: "https://picsum.photos/150?random=1",
},
{
url: "https://picsum.photos/150?random=3",
},
],
});

const handleChange = (e) => {
const { name, value } = e.target;
setProductData((prevData) => ({ ...prevData, [name]: value }));
};

const handleImageUpload = async (e) => {
const file = e.target.files[0];
console.log(file);
};

const handleSubmit = (e) => {
e.preventDefault();
console.log(productData);
};

return (
<div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
<h2 className="text-3xl font-bold mb-6">Edit Product</h2>

      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
            rows={4}
            required
          />
        </div>

        {/* Price */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Count In Stock */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count In Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* SKU */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Sizes */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Colors */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-300 rounded-md p-2"
          />
        </div>

        {/* Image Upload */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />
          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors cursor-pointer"
        >
          Update Product
        </button>
      </form>
    </div>

);
};

export default EditProductPage;

# 7:20

# LETS GO backend

# navigate to terminal backend

# intall this

npm init -y
npm i express mongoose dotenv jsonwebtoken bcryptjs cors nodemon

# intial setup for express server

# create file in backend/server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
res.send("WELCOME TO PANDA API!");
});

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

# then edit the package.json

{
"name": "backend",
"version": "1.0.0",
"description": "",
"main": "server.js",
"scripts": {
"start": "node backend/server.js",
"dev": "nodemon backend/server.js"
},
"keywords": [],
"author": "",

# CREATE MONGO APP DATABASE

# GET THE URI

# in .env

PORT=9000
MONGO_URI=mongodb+srv://danaolumad:unshack@cluster0.ntgbk.mongodb.net/panda-shirt?retryWrites=true&w=majority&appName=Cluster0

# in backend/config/db.js

const mongoose = require("mongoose");

const connectDB = async () => {
try {
await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected successfully");
} catch (err) {
console.error("MongoDB connection failed.", err);
process.exit(1);
}
};

module.exports = connectDB;

# CREATE A SCHEMA

# in backend/model/User.js

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
trim: true,
},
email: {
type: String,
required: true,
unique: true,
trim: true,
match: [/.+\@.+\..+/, "Please enter a valid email address"],
},
password: {
type: String,
required: true,
minLength: 6,
},
role: {
type: String,
enum: ["customer", "admin"],
default: "customer",
},
},
{ timestamps: true }
);

// Password Hash middleware
userSchema.pre("save", async function (next) {
if (!this.isModified("password")) return next();
const salt = await bcrypt.genSalt(10);
this.password = await bcrypt.hash(this.password, salt);
next();
});

// Match User entered password to Hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);

# THEN CREATE ROUTES

# in backend/routes/userRoutes.js

const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const router = express.Router();

// @route POST /api/users/register
// @desc Register a new user
// @access Public
router.post("/register", async (req, res) => {
const { name, email, password } = req.body;

try {
// Registration logic
res.send({ name, email, password });
} catch (error) {
console.log(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

# in server.js

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");

---

// API Routes
app.use("/api/users", userRoutes);

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

# then test in POSTMAN

# POSTMAN => REGISTER USER

http://localhost:9000/api/users/register

RAW JSON BODY =>
{
"name": "Shelu",
"email": "shelu@gmail.com",
"password": "123456"
}

RESPONSE => 200OK
{
"name": "Shelu",
"email": "shelu@gmail.com",
"password": "123456"
}

# TEST IT IF IT SAVE TO MONGO DB

# in userRoutes.js

router.post("/register", async (req, res) => {
const { name, email, password } = req.body;

try {
// Registration logic
let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "User already exists" });

    user = new User({ name, email, password });
    await user.save();

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

} catch (error) {
console.log(error);
res.status(500).send("Server Error");

# SEND IT TO POSTMAN AGAIN

# RESPONSE 200OK

# AND SEE IN MONGODB, IT SAVE THE NEW USER

# then back to userRoutes.js WE NEED TO ADD JWT TOKEN

# in userRoutes.js

user = new User({ name, email, password });
await user.save();

    // Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        // Send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );

} catch (error) {
console.log(error);
res.status(500).send("Server Error");

# then back to postman used other email

"email": "shelu1@gmail.com",

RESPONSE IS WITH TOKEN

# STILL IN userRoutes.js add Login route logic, below the register login add this

/ @route POST /api/users/login
// @desc Authenticate user
// @access Public
router.post("/login", async (req, res) => {
const { email, password } = req.body;

try {
// Find the user by email
let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });
    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    // Create JWT Payload
    const payload = { user: { id: user._id, role: user.role } };

    // Sign and return the token along with user data
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "40h" },
      (err, token) => {
        // Send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );

} catch (error) {
console.log(error);
res.status(500).send("Server Error");
}
});

# THEN IN POSTMAN CREATE A NEW POST REQUEST NAMED LOGIN

# http://localhost:9000/api/users/login

# {

     "email": "shelu@gmail.com",
    "password": "123456"

}

# 200OK

{
"user": {
"\_id": "67c8e58bd2b944bdc7b67323",
"name": "Shelu",
"email": "shelu@gmail.com",
"role": "customer"
},
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjdjOGU1OGJkMmI5NDRiZGM3YjY3MzIzIiwicm9sZSI6ImN1c3RvbWVyIn0sImlhdCI6MTc0MTIyMDQ2MiwiZXhwIjoxNzQxMzY0NDYyfQ.L2Q0q49UcvB9NnBET4tIB89y7-Vy342GafG8E6t2K8c"
}

# NEXT CREATE MIDDLEWARE

# in backend/middleware/authMiddleware.js

const jwt = require("jsonwebtoken");
const User = require("../models/User");

// Middleware to protect routes
const protect = async (req, res, next) => {
let token;

if (
req.headers.authorization &&
req.headers.authorization.startsWith("Bearer")
) {
try {
token = req.headers.authorization.split(" ")[1];
const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.user.id).select("-password"); // Exclude password
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      res.status(401).json({ message: "Not authorized, token failed" }); // Fixed typo and added message
    }

} else {
res.status(401).json({ message: "Not authorized, no token provided" }); // Added message for clarity
}
};

module.exports = { protect };

# then in userRoutes.js

const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");

---

// @route GET /api/users/profile
// @desc Get logged-in user's profile (Protected Route)
// @access Private
router.get("/profile", protect, async (req, res) => {
res.json(req.user);
});

module.exports = router;

# THEN MAKE A NEW GET REQUEST IN POSTMAN

http://localhost:9000/api/users/profile

HEADERS =>

Key: Authorization
Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzA3YjQzY2I5MzQzMTQ1YjI1YzYxYjkiLCJpYXQiOjE2NTY3NzU1NTQsImV4cCI6MTY1Njc3OTE1NH0.R5Cj6IkpxVCJ...
Description: (empty)

RESPONSE => 200OK

{
"\_id": "67c8e58bd2b944bdc7b67323",
"name": "Shelu",
"email": "shelu@gmail.com",
"role": "customer",
"createdAt": "2025-03-06T00:00:11.044Z",
"updatedAt": "2025-03-06T00:00:11.044Z",
"\_\_v": 0
}

# WE FINISHED CREATING USER

# NEXT WELL CREATE THE LOGIC FOR PRODUCTS

# CREATE SCHEMA

# in models/Product.js

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
name: {
type: String,
required: true,
trim: true,
},
description: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
discountPrice: {
type: Number,
},
countInStock: {
type: Number,
required: true,
default: 0,
},
sku: {
type: String,
unique: true,
required: true,
},
category: {
type: String,
required: true,
},
brand: {
type: String,
},
sizes: {
type: [String],
required: true,
},
colors: {
type: [String],
required: true,
},
collections: {
type: String,
required: true,
},
material: {
type: String,
},
gender: {
type: String,
enum: ["Men", "Women", "Unisex"],
},
images: [
{
url: {
type: String,
required: true,
},
altText: {
type: String,
},
},
],
isFeatured: {
type: Boolean,
default: false,
},
isPublished: {
type: Boolean,
default: false,
},
rating: {
type: Number,
default: 0,
},
numReviews: {
type: Number,
default: 0,
},
tags: [String],
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
},
metaTitle: {
type: String,
},
metaDescription: {
type: String,
},
metaKeywords: {
type: String,
},
dimensions: {
length: Number,
width: Number,
height: Number,
},
weight: Number,
},
{ timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);

# in backend/routes/productRoutes.js

const express = require("express");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
router.post("/", protect, async (req, res) => {
try {
const {
name,
description,
price,
discountPrice,
countInStock,
category,
brand,
sizes,
colors,
collections,
material,
gender,
images,
isFeatured,
isPublished,
tags,
dimensions,
weight,
sku,
} = req.body;

    const product = new Product({
      name,
      description,
      price,
      discountPrice,
      countInStock,
      category,
      brand,
      sizes,
      colors,
      collections,
      material,
      gender,
      images,
      isFeatured,
      isPublished,
      tags,
      dimensions,
      weight,
      sku,
      user: req.user._id, // Reference to the admin user who created it
    });
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

# then in server.js

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

---

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

# THEN TEST TO POSTMAN

# NEW POST REQUEST

http://localhost:9000/api/products

HEADERS
KEY => Authorization
VALUE => Bearer

BODY => RAW

{
"name": "Classic Denim Jacket",
"description": "A timeless denim jacket perfect for any season. Comfortable fit and durable material.",
"price": 59.99,
"discountPrice": 49.99,
"countInStock": 200,
"category": "Apparel",
"brand": "UrbanWear",
"sizes": ["XS", "S", "M", "L", "XL"],
"colors": ["Blue", "Black"],
"collections": "Spring Collection",
"material": "Denim",
"gender": "Unisex",
"images": [
{
"url": "https://picsum.photos/seed/denim1/500/500",
"altText": "Front view of the denim jacket"
},
{
"url": "https://picsum.photos/seed/denim2/500/500",
"altText": "Back view of the denim jacket"
}
],
"isFeatured": true,
"isPublished": true,
"tags": ["denim", "jacket", "casual", "spring"],
"dimensions": {
"length": 12,
"width": 8,
"height": 1
},
"width": 1.5,
"sku": "CLTH123456"
}

# 201

Created

{
"name": "Classic Denim Jacket",
"description": "A timeless denim jacket perfect for any season. Comfortable fit and durable material.",
"price": 59.99,
"discountPrice": 49.99,
"countInStock": 200,
"sku": "CLTH123456",
"category": "Apparel",
"brand": "UrbanWear",
"sizes": [
"XS",
"S",
"M",
"L",
"XL"
],
"colors": [
"Blue",
"Black"
],
"collections": "Spring Collection",
"material": "Denim",
"gender": "Unisex",
"images": [
{
"url": "https://picsum.photos/seed/denim1/500/500",
"altText": "Front view of the denim jacket",
"_id": "67c8f5b10a5a350cd57b3496"
},
{
"url": "https://picsum.photos/seed/denim2/500/500",
"altText": "Back view of the denim jacket",
"_id": "67c8f5b10a5a350cd57b3497"
}
],
"isFeatured": true,
"isPublished": true,
"rating": 0,
"numReviews": 0,
"tags": [
"denim",
"jacket",
"casual",
"spring"
],
"user": "67c8e58bd2b944bdc7b67323",
"dimensions": {
"length": 12,
"width": 8,
"height": 1
},
"\_id": "67c8f5b10a5a350cd57b3495",
"createdAt": "2025-03-06T01:09:05.198Z",
"updatedAt": "2025-03-06T01:09:05.198Z",
"\_\_v": 0
}

# OUR CURRENT USER CREATING PRODUCT IS CUSTOMER TO DENY THIS WE CREATE A MIDDLEWARE FOR ONLY ADMIN CAN CREATE PRODUCT

# in middleware/authMiddleware.js

// Middleware to check if the user is an admin
const admin = (req, res, next) => {
if (req.user && req.user.role === "admin") {
next();
} else {
res.status(403).json({ message: "Not authorized as an admin" });
}
};

module.exports = { protect, admin };

# then import it to productRoutes.js

const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new Product
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
try {

# TRY TO SEND AGAIN REQUEST TO POSTMAN IT WILL RESPONSE 403

Forbidden
{
"message": "Not authorized as an admin"
}

# MEXT LETS UPDATE THE PRODUCT ONLY ACCESSABLE BY ADMIN

# in productRoutes.js

// @route PUT /api/products/:id
// @desc Update an existing product ID
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
try {
const {
name,
description,
price,
discountPrice,
countInStock,
category,
brand,
sizes,
colors,
collections,
material,
gender,
images,
isFeatured,
isPublished,
tags,
dimensions,
weight,
sku,
} = req.body;

    // Find product by ID
    const product = await Product.findById(req.params.id);

    if (product) {
      // Update product fields
      product.name = name || product.name;
      product.description = description || product.description;
      product.price = price || product.price;
      product.discountPrice = discountPrice || product.discountPrice;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category;
      product.brand = brand || product.brand;
      product.sizes = sizes || product.sizes;
      product.colors = colors || product.colors;
      product.collections = collections || product.collections;
      product.gender = gender || product.gender;
      product.images = images || product.images;
      product.isFeatured =
        isFeatured !== undefined ? isFeatured : product.isFeatured;
      product.isPublished =
        isPublished !== undefined ? isPublished : product.isPublished;
      product.tags = tags || product.tags;
      product.dimensions = dimensions || product.dimensions;
      product.weight = weight || product.weight;
      product.sku = sku || product.sku;

      // Save the updated product
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: "Product not found" });
    }

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

# in POSTMAN

# PUT REQUEST => UPDATE

http://localhost:9000/api/products/67c8f5b10a5a350cd57b3495

AUTHORIZATION FOLLOW THE OLD METHOD

BODY => RAW

{
"name": "Graphico Shirts"
}

# NEXT DELETE LOGIC

# in productRoutes.js

// @route DELETE /api/products/:id
// @desc Delete a product by ID
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
try {
// Find the product by ID
const product = await Product.findById(req.params.id);

    if (product) {
      // Remove the product from DB
      await product.deleteOne();
      res.json({ message: "Product Deleted Successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

#

# in POSTMAN

# DELETE REQUEST => DELETE

http://localhost:9000/api/products/67c8f5b10a5a350cd57b3495

AUTHORIZATION FOLLOW THE OLD METHOD

{
"message": "Product Deleted Successfully"
}

## LEST POPULATE SOME DATA

# get data/products.js in sc

# then in backend/seeder.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");

const Product = require("./models/Product");
const User = require("./models/User");

const products = require("./data/products");

dotenv.config();

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed

const seedData = async () => {
try {
// Clear existing data
await Product.deleteMany();
await User.deleteMany();

    // Create a default admin User
    const createdUser = await User.create({
      name: "Admin User",
      email: "admin@example.com",
      password: "123456",
      role: "admin",
    });

    // Assign the default user ID to each product
    const userID = createdUser._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: userID }; // Changed userID to user to match schema
    });

    // Insert the products into the database
    await Product.insertMany(sampleProducts);

    console.log("Product data seeded successfully!");
    process.exit(); // Added process.exit() to stop the script

} catch (error) {
console.error("Error seeding data:", error); // Added error message
process.exit(1); // Exit with error code
}
};

seedData();

# then in package.json create script

"scripts": {
"start": "node backend/server.js",
"dev": "nodemon backend/server.js",
"seed": "node seeder.js"
},
"keywords": [],

# NOW OUR SORTING LOGIC OF ALL OPTIN WE HAVE INCLUDING SEARCH

# in productRoutes.js

// @route GET /api/products
// @desc Get all products with optional query filters
// @access Public
router.get("/", async (req, res) => {
try {
const {
collection,
size,
color,
gender,
minPrice,
maxPrice,
sortBy,
search,
category,
material,
brand,
limit,
} = req.query;

    let query = {};

    // Filter logic
    if (collection && collection.toLocaleLowerCase() !== "all") {
      query.collections = collection;
    }

    if (category && category.toLocaleLowerCase() !== "all") {
      query.category = category;
    }

    if (material) {
      query.material = { $in: material.split(",") };
    }

    if (brand) {
      query.brand = { $in: brand.split(",") };
    }

    if (size) {
      query.sizes = { $in: size.split(",") };
    }

    if (color) {
      query.colors = { $in: [color] };
    }

    if (gender) {
      query.gender = gender;
    }

    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } }, // Corrected the duplicate "name" to "description"
      ];
    }

    // Sort Logic
    let sort = {};
    if (sortBy) {
      switch (sortBy) {
        case "priceAsc":
          sort = { price: 1 };
          break;
        case "priceDesc":
          sort = { price: -1 };
          break;
        case "popularity":
          sort = { rating: -1 };
          break;
        default:
          break;
      }
    }

    // Fetch products and apply sorting and limit
    let products = await Product.find(query)
      .sort(sort)
      .limit(Number(limit) || 0);

    res.json(products);

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

# THEN IN POSTMAN,NEW ALL PRODUCTS, GET REQUEST

http://localhost:9000/api/products?maxPrice=30

PARAMS
category Top Wear
maxPrice 30

200
OK

# GET SINGLE PRODUCT

# in productRoutes.js

// @route GET /api/products/:id
// @desc Get a single product by ID
// @access Public
router.get("/:id", async (req, res) => {
try {
const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product Not Found" });
    }

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

# in postman

NEW GET REQUST PRODUCT DETAILS

http://localhost:9000/api/products/67c904e495ac18ec40b0975d

200
OK

{
"\_id": "67c904e495ac18ec40b0975d",
"name": "Slim-Fit Stretch Shirt",
"description": "A versatile slim-fit shirt perfect for business or evening events. Designed with a fitted silhouette, the added stretch provides maximum comfort throughout the day. Features a crisp turn-down collar, button placket, and adjustable cuffs.",
"price": 29.99,
"discountPrice": 24.99,
"countInStock": 35,
"sku": "SLIM-SH-002",
"category": "Top Wear",
"brand": "Modern Fit",
"sizes": [
"S",
"M",
"L",
"XL"
],
"colors": [
"Black",
"Navy Blue",
"Burgundy"
],
"collections": "Formal Wear",
"material": "Cotton Blend",
"gender": "Men",
"images": [
{
"url": "https://picsum.photos/500/500?random=41",
"altText": "Slim-Fit Stretch Shirt Front View",
"_id": "67c904e495ac18ec40b0975e"
},
{
"url": "https://picsum.photos/500/500?random=42",
"altText": "Slim-Fit Stretch Shirt Back View",
"_id": "67c904e495ac18ec40b0975f"
}
],
"isFeatured": false,
"isPublished": false,
"rating": 4.8,
"numReviews": 15,
"tags": [],
"user": "67c904e495ac18ec40b09758",
"\_\_v": 0,
"createdAt": "2025-03-06T02:13:56.544Z",
"updatedAt": "2025-03-06T02:13:56.544Z"
}

# SIMILAR PRODUCT DISPLAY ON TERMINAL ADMIN

# in productRoutes.js

// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current product's gender and category
// @access Public
router.get("/similar/:id", async (req, res) => {
const { id } = req.params;
console.log(id);
});

module.exports = router;

# then in POSTMAN

http://localhost:9000/api/products/similar/:id

Path Variables
id 67c904e495ac18ec40b0975a

# LOOK AT TERMINAL ADMIN IT RESPONSE THE ID

# THIS IS OK

# FULL LOGIC ON SIMILAR PRODUCTS

# in productRoutes.js

// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current product's gender and category
// @access Public
router.get("/similar/:id", async (req, res) => {
const { id } = req.params;

try {
const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const similarProducts = await Product.find({
      _id: { $ne: id }, // Exclude the current product ID
      gender: product.gender,
      category: product.category,
    }).limit(4);

    res.json(similarProducts);

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

module.exports = router;

# THEN SEND AGAIN REQUEST IN POSTMAN AND SEE THE CATEGORY IS THE SAME AS THE PROUCT SEARCH THIS IS SIMILAR LOGIC

# BEST SELLER LOGIC

# in productRoutes.js

// @route GET /api/products/best-seller
// @desc Retrieve the product with highest rating
// @access Public
router.get("/best-seller", async (req, res) => {
try {
const bestSeller = await Product.findOne().sort({ rating: -1 });

    if (bestSeller) {
      res.json(bestSeller);
    } else {
      res.status(404).json({ message: "No best-seller product found" }); // Added a message
    }

} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

# IN POSTMAN

http://localhost:9000/api/products/best-seller

200
OK

NOTICE THIS ONLY PRODUCT HAS THIS WELL DISPLAY IN BEST SELLER => "rating": 5,

# NEW ARRIVALS LOGIC

# in productRoutes.js

// @route GET /api/products/new-arrivals
// @desc Retrieve latest 8 products - Creation date
// @access Public
router.get("/new-arrivals", async (req, res) => {
try {
// Fetch latest 8 products
const newArrivals = await Product.find().sort({ createdAt: -1 }).limit(8);
res.json(newArrivals);
} catch (error) {
console.error(error);
res.status(500).send("Server Error");
}
});

# IN POSTMAN

http://localhost:9000/api/products/new-arrivals

NOTICE EVERY RESPONE THE CREATED AT IT WILL DISPLAY ON NEW ARRIVALS

@

# NOW LETS GO TO ADD TO CART LOGIC

# in models/Cart.js

const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema(
{
productId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Product",
required: true,
},
name: String,
image: String,
price: String,
size: String,
color: String,
quantity: {
type: Number,
default: 1,
},
},
{ \_id: false }
);

const cartSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
},
guestId: {
type: String,
},
products: [cartItemSchema],
totalPrice: {
type: Number,
required: true,
default: 0,
},
},
{ timestamps: true }
);

module.exports = mongoose.model("Cart", cartSchema);

# then in seeder.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");

const products = require("./data/products");

dotenv.config();

// Connect to mongoDB
mongoose.connect(process.env.MONGO_URI);

// Function to seed

const seedData = async () => {
try {
// Clear existing data
await Product.deleteMany();
await User.deleteMany();
await Cart.deleteMany();

# CART GUEST ADD ITEM

# in routes/cartRoutes.js

const express = require("express");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// Helper function to get a cart by user Id or guest ID
const getCart = async (userId, guestId) => {
if (userId) {
return await Cart.findOne({ user: userId });
} else if (guestId) {
return await Cart.findOne({ guestId });
}
return null;
};

// @route POST /api/cart
// @desc Add a product to the cart for a guest or logged in user
// @access Public
router.post("/", async (req, res) => {
const { productId, quantity, size, color, guestId, userId } = req.body;

try {
const product = await Product.findById(productId);
if (!product) return res.status(404).json({ message: "Product not found" });

    // Determine if the user is logged in or guest
    let cart = await getCart(userId, guestId);

    // If the cart exists, update it
    if (cart) {
      const productIndex = cart.products.findIndex(
        (p) =>
          p.productId.toString() === productId &&
          p.size === size &&
          p.color === color
      );

      if (productIndex > -1) {
        // If the product already exists, update the quantity
        cart.products[productIndex].quantity += quantity;
      } else {
        // add new product
        cart.products.push({
          productId,
          name: product.name,
          image: product.images[0].url,
          price: product.price,
          size,
          color,
          quantity,
        });
      }

      // Recalculate the total price
      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();

      return res.status(200).json(cart);
    } else {
      // Create a new cart for the guest or user
      const newCart = await Cart.create({
        userId: userId ? userId : undefined,
        guestId: guestId ? guestId : "guest_" + new Date().getTime(),
        products: [
          {
            productId,
            name: product.name,
            image: product.images[0].url,
            price: product.price,
            size,
            color,
            quantity,
          },
        ],
        totalPrice: product.price * quantity,
      });
      return res.status(201).json(newCart);
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# then in server.js

const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");

---

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => {
console.log(`Server is running on http://localhost:${PORT}`);
});

# THEN IN POSTMAN

# POST REQUEST CREATE CART

http://localhost:9000/api/cart

RAW

{
"productId": "67c904e495ac18ec40b0975d",
"size": "M",
"color": "red",
"quantity": "1"
}

201

{
"guestId": "guest_1741232021056",
"products": [
{
"productId": "67c904e495ac18ec40b0975d",
"name": "Slim-Fit Stretch Shirt",
"image": "https://picsum.photos/500/500?random=41",
"price": "29.99",
"size": "M",
"color": "red",
"quantity": 1
}
],
"totalPrice": 29.99,
"\_id": "67c91795936ec8df36bb1b93",
"createdAt": "2025-03-06T03:33:41.080Z",
"updatedAt": "2025-03-06T03:33:41.080Z",
"\_\_v": 0
}

# UPDATE THE CART ITEM WITH GUEST USER

# IN POSTMAN

http://localhost:9000/api/cart

200
OK

{
"guestId": "guest_1741232021056",
"productId": "67c904e495ac18ec40b0975d",
"size": "M",
"color": "red",
"quantity": 1
}

# TO UPDATE THE GUEST USER ID TO LOGIN USER ID

# goto cartRoutes.js edit the wrong code

// Create a new cart for the guest or user
const newCart = await Cart.create({
user: userId ? userId : undefined,
guestId: guestId ? guestId : "guest\_" + new Date().getTime(),
products: [

# THEN BACK TO POSTMAN

http://localhost:9000/api/cart

{
"userId": "67c904e495ac18ec40b09758",
"productId": "67c904e495ac18ec40b0975d",
"size": "M",
"color": "red",
"quantity": 1
}

# SEE IN THE MONGO ATLAS IT IS UPDATED FROM GUSTID IT HAS NOW ID AND USERID

# NEXT

guest or logged-in user CAN UPDATE QUANTITY CART

# in cartRoute.js

// @route PUT /api/cart
// @desc Update product quantity in the cart for a guest or logged-in user
// @access Public
router.put("/", async (req, res) => {
const { productId, quantity, size, color, guestId, userId } = req.body;

try {
let cart = await getCart(userId, guestId);
if (!cart) return res.status(404).json({ message: "Cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      // update quantity
      if (quantity > 0) {
        cart.products[productIndex].quantity = quantity;
      } else {
        cart.products.splice(productIndex, 1); // Remove product if quantity is 0 or less
      }

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();

      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }

} catch (error) {
console.error(error);
return res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# IN POSTMAN YOU CAN NOW UPDATE THE CART QUANTITY

PUT REQUEST

http://localhost:9000/api/cart

{
"userId": "67c904e495ac18ec40b09758",
"productId": "67c904e495ac18ec40b0975d",
"size": "M",
"color": "red",
"quantity": 0
}

200
OK

# DELETE PRODUCT

// @route DELETE /api/cart
// @desc Remove a product from the cart
// @access Public
router.delete("/", async (req, res) => {
const { productId, size, color, guestId, userId } = req.body;
try {
let cart = await getCart(userId, guestId);

    if (!cart) return res.status(404).json({ message: "cart not found" });

    const productIndex = cart.products.findIndex(
      (p) =>
        p.productId.toString() === productId &&
        p.size === size &&
        p.color === color
    );

    if (productIndex > -1) {
      cart.products.splice(productIndex, 1);

      cart.totalPrice = cart.products.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      await cart.save();

      return res.status(200).json(cart);
    } else {
      return res.status(404).json({ message: "Product not found in cart" });
    }

} catch (error) {
console.error(error);
return res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# IN POSTMAN

# DELETE REQUEST

http://localhost:9000/api/cart

HEADERS FOLLOW THE OLD STEP

RAW BODY

{
"userId": "67c904e495ac18ec40b09758",
"productId": "67c904e495ac18ec40b0975d",
"size": "M",
"color": "red"
}

# REMOVE/UPDATE CART IN DRAWER LOGIC

in cartRoutes.js

// @route GET /api/cart
// @desc Get logged-in user's or guest user's cart
// @access Public
router.get("/", async (req, res) => {
const { userId, guestId } = req.query;

try {
const cart = await getCart(userId, guestId);

    if (cart) {
      res.json(cart);
    } else {
      res.status(404).json({ message: "Cart not found" });
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server error" });
}
});

module.exports = router;

# in POSTMAN GET REQUEST CART DETAILS

http://localhost:9000/api/cart?userId=67c904e495ac18ec40b09758

200
OK

{
"\_id": "67c91beac9d222a18bcdb4eb",
"user": "67c904e495ac18ec40b09758",
"guestId": "guest_1741233130464",
"products": [],
"totalPrice": 0,
"createdAt": "2025-03-06T03:52:10.477Z",
"updatedAt": "2025-03-06T04:16:51.191Z",
"\_\_v": 3
}

# NEXT

# LETS MERGE THE GUEST CART TO LOGIN USER CART

# in cartRoutes.js

// @route POST /api/cart/merge
// @desc Merge guest cart into user cart on login
// @access Private
router.post("/merge", protect, async (req, res) => {
const { guestId } = req.body;

try {
// Find the guest cart and user cart
const guestCart = await Cart.findOne({ guestId });
const userCart = await Cart.findOne({ user: req.user.\_id });

    if (guestCart) {
      if (guestCart.products.length === 0) {
        return res.status(400).json({ message: "Guest cart is empty" });
      }

      if (userCart) {
        // Merge guest cart into user cart
        guestCart.products.forEach((guestItem) => {
          const productIndex = userCart.products.findIndex(
            (item) =>
              item.productId.toString() === guestItem.productId.toString() &&
              item.size === guestItem.size &&
              item.color === guestItem.color
          );

          if (productIndex > -1) {
            // If the items exists in the user cart, update the quantity
            userCart.products[productIndex].quantity += guestItem.quantity;
          } else {
            // Otherwise, add the guest item to the cart
            userCart.products.push(guestItem);
          }
        });

        userCart.totalPrice = userCart.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );

        await userCart.save();

        // Remove the guest cart after merging
        try {
          await Cart.findOneAndDelete({ guestId });
        } catch (error) {
          console.error("Error deleting guest cart:", error);
        }

        res.status(200).json(userCart); // Added userCart to the response
      } else {
        // If the user has no existing cart, assign the guest cart to the user
        guestCart.user = req.user._id;
        guestCart.guestId = undefined;
        await guestCart.save();

        res.status(200).json(guestCart);
      }
    } else {
      if (userCart) {
        // Guest cart has already been merged, return user cart
        return res.status(200).json(userCart);
      }

      res.status(404).json({ message: "Guest cart not found" });
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server error" });
}
});

module.exports = router;

# IN POST MAN

# SINCE WE GOT ALOT OF ORDERS ALREADY

# RUN THE SEEDERS TO GET A FRESH DATA

# npm run seed

# THEN IN POST

SEND AGAIN THE ALL PRODUCTS
GET 1 ID

# IN CART

CREATE REQUEST SEND AGAIN AND GET THE ID

# THEN LOGIN AS USER

# THEN CREATE NEW POST REQUEST

# http://localhost:9000/api/cart/merge

GET THE HEADERS AS YOU LOGIN AS USER

RAW

{
"guestId": "guest_1741236062561"
}

RESPONSE 200 OK

{
"\_id": "67c9275e34d683e40157ea3f",
"products": [
{
"productId": "67c926db7e8294bb2074cfcf",
"name": "Classic Oxford Button-Down Shirt",
"image": "https://picsum.photos/500/500?random=39",
"price": "39.99",
"size": "M",
"color": "red",
"quantity": 1
}
],
"totalPrice": 39.99,
"createdAt": "2025-03-06T04:41:02.576Z",
"updatedAt": "2025-03-06T04:43:39.843Z",
"\_\_v": 0,
"user": "67c926db7e8294bb2074cfcd"
}

# THEN NEXT CREATE THE PAYMENT LOGIC

# CREATE CHECKOUT SCHEMA

# in models/Checkout.js

const mongoose = require("mongoose");

const checkoutItemSchema = new mongoose.Schema(
{
productId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Product",
required: true,
},
name: {
type: String,
required: true,
},
image: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
},
{ \_id: false }
);

const checkoutSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
},
checkoutItems: [checkoutItemSchema],
shippingAddress: {
address: { type: String, required: true },
city: { type: String, required: true },
postalCode: { type: String, required: true },
country: { type: String, required: true },
},
paymentMethod: {
type: String,
required: true,
},
totalPrice: {
type: Number,
required: true,
},
isPaid: {
type: Boolean,
default: false,
},
paidAt: {
type: Date,
},
paymentStatus: {
type: String,
default: "pending",
},
paymentDetails: {
type: mongoose.Schema.Types.Mixed, // store payment-related details(transaction ID,paypal response)
},
isFinalized: {
type: Boolean,
default: false,
},
isFinalized: {
type: Boolean,
default: false,
},
finalizedAt: {
type: Date,
},
}, // Added a comma here
{ timestamps: true }
);

module.exports = mongoose.model("Checkout", checkoutSchema);

# in backend/models/Order.js

const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema(
{
productId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Product",
required: true,
},
name: {
type: String,
required: true,
},
image: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
size: String,
color: String,
quantity: {
type: Number,
required: true,
},
},
{ \_id: false }
);

const orderSchema = new mongoose.Schema(
{
user: {
type: mongoose.Schema.Types.ObjectId,
ref: "User",
required: true,
},
orderItems: [orderItemSchema],
shippingAddress: {
address: { type: String, required: true },
city: { type: String, required: true },
postalCode: { type: String, required: true },
country: { type: String, required: true },
},
paymentMethod: {
type: String,
required: true,
},
totalPrice: {
type: Number,
required: true,
},
isPaid: {
type: Boolean,
default: false,
},
paidAt: {
type: Date,
},
isDelivered: {
type: Boolean,
default: false,
},
deliveredAt: {
type: Date,
},
paymentStatus: {
type: String,
default: "pending",
},
status: {
type: String,
enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
default: "Processing",
},
},
{ timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);

# in routes/checkoutRoutes.js

const express = require("express");
const Checkout = require("../models/Checkout");
const Cart = require("../models/Cart");
const Product = require("../models/Product");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
router.post("/", protect, async (req, res) => {
const { checkoutItems, shippingAddress, paymentMethod, totalPrice } =
req.body;

if (!checkoutItems || checkoutItems.length === 0) {
return res.status(400).json({ message: "No items in checkout" }); // Corrected the message
}

try {
// Create a new checkout session
const newCheckout = await Checkout.create({
user: req.user.\_id,
checkoutItems: checkoutItems,
shippingAddress,
paymentMethod,
totalPrice,
paymentStatus: "Pending",
isPaid: false,
});

    console.log(`Checkout created for user: ${req.user._id}`); // Corrected template literal syntax
    res.status(201).json(newCheckout);

} catch (error) {
console.error("Error Creating checkout session", error);
res.status(500).json({ message: "Server Error" });
}
});

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
router.put("/:id/pay", protect, async (req, res) => {
const { paymentStatus, paymentDetails } = req.body;

try {
const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (paymentStatus === "paid") {
      // Update checkout to mark as paid
      checkout.isPaid = true;
      checkout.paymentStatus = paymentStatus;
      checkout.paymentDetails = paymentDetails; // Store payment details
      checkout.paidAt = Date.now();
      await checkout.save();

      res.status(200).json(checkout);
    } else {
      // Handle other payment statuses or invalid status
      return res.status(400).json({ message: "Invalid Payment Status" });
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout and convert to an order after payment confirmation
// @access Private
router.post("/:id/finalize", protect, async (req, res) => {
try {
const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (checkout.isPaid && !checkout.isFinalized) {
      // Create final order based on the checkout details
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.orderItems,
        shippingAddress: checkout.shippingAddress,
        paymentMethod: checkout.paymentMethod,
        totalPrice: checkout.totalPrice,
        isPaid: true,
        paidAt: checkout.paidAt,
        isDelivered: false,
        paymentStatus: "paid",
        paymentDetails: checkout.paymentDetails,
      });

      // Mark the checkout as finalized
      checkout.isFinalized = true;
      checkout.finalizedAt = Date.now();
      await checkout.save();

      // Delete the cart associated with the user
      await Cart.findOneAndDelete({ user: checkout.user });

      res.status(201).json(finalOrder);
    } else if (checkout.isFinalized) {
      res.status(400).json({ message: "Checkout already finalized" });
    } else {
      res.status(400).json({ message: "Checkout is not paid" });
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# then import it on server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");

---

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);

# THEN IN POSTMAN

CREATE NEW FOLDER CHECKOUT

# LOGIN FIRST TO GET THE JWT

# FIRST REQUEST IS

POST CREATE

http://localhost:9000/api/checkout

RAW
{
"checkoutItems": [
{
"productId": "64d5f8c4e4b0ab001f5d8b1c",
"name": "Classic T-shirt",
"image": "https://picsum.photos/seed/denim1/500/500",
"price": 19
}
],
"shippingAddress": {
"address": "123 street",
"city": "New York",
"postalCode": "10001",
"country": "USA"
},
"paymentMethod": "PayPal",
"totalPrice": 19
}

HEADERS => FOLLOW BEARER TOKEN

201
Created

# NEXT IS PUT PAY REQUEST

http://localhost:9000/api/checkout/:id/pay

GET THE ID IN THE DB MONGODB

PARAMS => INSERT THE ID

HEADERS => FOLLOW BEARER TOKEN

{
"paymentStatus": "paid",
"paymentDetails": {
"transactionId": "txn_123456789",
"paymentGateway": "PayPal",
"amount": 19,
"currency": "USD"
}
}

200
OK
"paymentMethod": "PayPal",

# NEXT FINALIZE

JUST DUPLICATE THE PAY REQUEST

http://localhost:9000/api/checkout/:id/finalize

DELETE THE RAW

201
Created

BUT WHEN WE CHECK IN DATABASE

orderItems
Array (empty)

CORRECT THIS PART IN THIS ROUTE => (orderItems: checkout.orderItems,)
IN THE BOTTOM IS THE CORRECT IMPLEMENTAION

router.post("/:id/finalize", protect, async (req, res) => {
try {
const checkout = await Checkout.findById(req.params.id);

    if (!checkout) {
      return res.status(404).json({ message: "Checkout not found" });
    }

    if (checkout.isPaid && !checkout.isFinalized) {
      // Create final order based on the checkout details
      const finalOrder = await Order.create({
        user: checkout.user,
        orderItems: checkout.checkoutItems,

# ANOTHER ERROR

IN THE TERMINAL CONSOLE WE DONT GET QUANTITY ALSO IN CHECKOUT ITEM

# TO SOLVE THIS ADD THIS IN checkout.js

const mongoose = require("mongoose");

const checkoutItemSchema = new mongoose.Schema(
{
productId: {
type: mongoose.Schema.Types.ObjectId,
ref: "Product",
required: true,
},
name: {
type: String,
required: true,
},
image: {
type: String,
required: true,
},
price: {
type: Number,
required: true,
},
quantity: {
type: Number,
required: true,
},
},
{ \_id: false }
);

# REPEAT THE SEQUENT IN POSTMAN, CREATE,PAY,FINALIZE

# GET THE NEW ID WHEN CREATE IS SUCCESSFUL AND USE IT TO CONITUNE

# ADD ITEM IN RAW CHECKOUT

"checkoutItems": [
{
"productId": "64d5f8c4e4b0ab001f5d8b1c",
"name": "Classic T-shirt",
"image": "https://picsum.photos/seed/denim1/500/500",
"price": 19,
"quantity": 1
}

# CREATE NEW ROUTE

# in routes/orderRoutes.js

const express = require("express");
const Order = require("../models/Order");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/orders/my-orders
// @desc Get logged-in user's orders
// @access Private
router.get("/my-orders", protect, async (req, res) => {
try {
// Find orders for the authenticated user
const orders = await Order.find({ user: req.user.\_id }).sort({
createdAt: -1,
}); // sort by most recent orders
res.json(orders);
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

// @route GET /api/orders/:id
// @desc Get order details by ID
// @access Private
router.get("/:id", protect, async (req, res) => {
try {
const order = await Order.findById(req.params.id).populate(
"user",
"name email"
);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // Return the full order details
    res.json(order);

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# then in server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");

---

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);

# THEN GOTO POSTMAN

CREATE NEW FOLDER ORDERS

# FIRST REQUEST MY ORDERS

http://localhost:9000/api/orders/my-orders

HEADERS => BEARER

200
OK

GET THE ORDER ID

# NEXT Order Details

http://localhost:9000/api/orders/:id

PARAMS => PASTE THE ORDER ID FROM EARLIER

200
OK

# UPLOAD IMAGES IN CLOUDINARY

# in routes/uploadRoutes.js

const express = require("express");
const multer = require("multer");

const cloudinary = require("cloudinary").v2;
const streamifier = require("streamifier");

require("dotenv").config();

const router = express.Router();

// Cloudinary Configuration
cloudinary.config({
cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
api_key: process.env.CLOUDINARY_API_KEY,
api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer setup using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
try {
if (!req.file) {
return res.status(400).json({ message: "No file Uploaded" });
}

    // Function to handle the stream upload to Cloudinary
    const streamUpload = (fileBuffer) => {
      return new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream((error, result) => {
          if (result) {
            resolve(result);
          } else {
            reject(error);
          }
        });

        // Use streamifier to convert file buffer to stream
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });
    };

    // Call the streamUpload function
    const result = await streamUpload(req.file.buffer);

    // Respond with the uploaded image URL
    res.json({ imageUrl: result.secure_url });

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# goto cloudinary create account and get this

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

# then in server.js

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

---

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

# THEN IN POSTMAN

UPLOAD FOLDER

POST CREATE REQUEST
http://localhost:9000/api/upload

HEADERS => BEARER

BODY => FORM-DATA

image file upload your image

200
OK

# IMPLEMENT THE NEWSLETTER BUTTON

# CREATE SCHEMA

# in models/Subscriber.js

const mongoose = require("mongoose");

const subscriberSchema = new mongoose.Schema({
email: {
type: String,
required: true,
unique: true,
trim: true,
lowercase: true,
},
subscribedAt: {
type: Date,
default: Date.now,
},
});

module.exports = mongoose.model("Subscriber", subscriberSchema);

# in routes/subscribeRoutes.js

const express = require("express");
const router = express.Router();

const Subscriber = require("../models/Subscriber");

// @route POST /api/subscribe
// @desc Handle newsletter subscription
// @access Public
router.post("/subscribe", async (req, res) => {
const { email } = req.body;

if (!email) {
return res.status(400).json({ message: "Email is required" });
}

try {
// Check if the email is already subscribed
let subscriber = await Subscriber.findOne({ email });

    if (subscriber) {
      return res.status(400).json({ message: "email is already subscribed" });
    }
    // Create a new subscriber
    subscriber = new Subscriber({ email });

    await subscriber.save();

    res
      .status(201)
      .json({ message: "Successfully subscribed to the newsletter!" });

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# in server.js

const cartRoutes = require("./routes/cartRoutes");
const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");

---

app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoutes);

# THEN IN POSTMAN

FOLDER SUBSCRIBE => POST REQUEST SUBSCRIBE

http://localhost:9000/api/subscribe

RAW
{
"email": "hi@example.com"
}

201
Created

{
"message": "Successfully subscribed to the newsletter!"
}

# ADMIN USERS LOGIC

# routes/adminRoutes.js

const express = require("express");
const User = require("../models/User");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/users
// @desc Get all users (Admin only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
try {
const users = await User.find({});
res.json(users);
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# in server.js

const checkoutRoutes = require("./routes/checkoutRoutes");
const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const adminRoutes = require("./routes/adminRoutes");

---

app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api", subscribeRoutes);

// Admin Routes
app.use("/api/admin/users", adminRoutes);

# CREATE USER

# adminRoutes.js

// @route POST /api/admin/users
// @desc Add a new user (admin only)
// @access Private/Admin
router.post("/", protect, admin, async (req, res) => {
const { name, email, password, role } = req.body;

try {
let user = await User.findOne({ email });
if (user) {
return res.status(400).json({ message: "User already exists" });
}

    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });

    await user.save();

    res.status(201).json({ message: "User created successfully", user });

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# IN POSTMAN

ADMIN USERS
Create User

POST REQUEST

http://localhost:9000/api/admin/users

HEADERS =>

RAW
{
"name": "Matcko",
"email": "matcko@gmail.com",
"password": "123456456"
}

201
Created

{
"message": "User created successfully",
"user": {
"name": "Matcko",
"email": "matcko@gmail.com",
"password": "$2b$10$iZp1zzYxQ1Gm6otdvYdCdOjDn.9avWlVn78t6T5Yoa7K2HW/9HJ..",
"role": "customer",
"\_id": "67c9591abfd19d0084f21efb",
"createdAt": "2025-03-06T08:13:14.673Z",
"updatedAt": "2025-03-06T08:13:14.673Z",
"\_\_v": 0
}
}

# ADMIN UPDATE USER LOGIC

# in adminRoutes.js

// @route PUT /api/admin/users/:id
// @desc Update user info (admin only) - Name, email and role
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
try {
const user = await User.findById(req.params.id);
if (user) {
user.name = req.body.name || user.name;
user.email = req.body.email || user.email;
user.role = req.body.role || user.role;

      const updatedUser = await user.save();
      res.json({ message: "User updated successfully", user: updatedUser }); // Send updated user as response
    } else {
      res.status(404).json({ message: "User not found" }); // User not found
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" }); // Send server error
}
});

module.exports = router;

# THEN IN POSTMAN

# NEW PUT REQUEST

UPDATED USER

PARAMS => KEY 67c926db7e8294bb2074cfcd => GET THIS TO USER MONGODB

RAW
{
"name": "Phen",
"email": "phen@gmail.com"
}

HEADERS =>

200
OK

# ADMIN DELETE USER LOGIC

in adminRoutes.js

// @route DELETE /api/admin/users/:id
// @desc Delete a user
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
try {
const user = await User.findById(req.params.id);
if (user) {
await user.deleteOne();
res.json({ message: "User deleted successfully" });
} else {
res.status(404).json({ message: "User not found" });
}
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# DUPLICATE POSTMAN IN PREVIOOUS THEN CHANGE IT TO DELETE REQUEST

200
OK

# GET ALL ADMIN PRODUCTS

# routes/productAdminRoutes.js

const express = require("express");
const Product = require("../models/Product");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/products
// @desc Get all products (Admin only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
try {
const products = await Product.find({});
res.json(products);
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# in server.js

const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");

---

// Admin Routes
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);

# IN POSTMAN

http://localhost:9000/api/admin/products

HEADER =>

200
OK

#

# ADMIN ORDER

# routes/adminOrderRoutes.js

const express = require("express");
const Order = require("../models/Order");
const { protect, admin } = require("../middleware/authMiddleware");

const router = express.Router();

// @route GET /api/admin/orders
// @desc Get all orders (Admin only)
// @access Private/Admin
router.get("/", protect, admin, async (req, res) => {
try {
const orders = await Order.find({}).populate("user", "name email");
res.json(orders);
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# in server.js

const orderRoutes = require("./routes/orderRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const subscribeRoutes = require("./routes/subscribeRoutes");
const adminRoutes = require("./routes/adminRoutes");
const productAdminRoutes = require("./routes/productAdminRoutes");
const adminOrderRoutes = require("./routes/adminOrderRoutes");

---

// Admin Routes
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

# POSTMAN

ORDERS GET REQUEST

http://localhost:9000/api/admin/orders

200
OK

# UPDATE ORDER STATUS

in adminOrderRoutes.js

// @route PUT /api/admin/orders/:id
// @desc Update order status
// @access Private/Admin
router.put("/:id", protect, admin, async (req, res) => {
try {
const order = await Order.findById(req.params.id);
if (order) {
order.status = req.body.status || order.status;
order.isDelivered =
req.body.status === "Delivered" ? true : order.isDelivered;
order.deliveredAt =
req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder); // Send updated order as response
    } else {
      res.status(404).json({ message: "Order not found" }); // Order not found
    }

} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" }); // Send server error
}
});

module.exports = router;

# in POSTMAN

DUPLICATE THE LAST REQUEST

UPDATE STATUS => PUT

PARAMS = > ID

HEADERS

RAW
{
"status": "Delivered"
}

200
OK

"status": "Delivered",

# ADMIN DELETE ORDER LOGIV

in adminOrderRoutes.js

// @route DELETE /api/admin/orders/:id
// @desc Delete an order
// @access Private/Admin
router.delete("/:id", protect, admin, async (req, res) => {
try {
const order = await Order.findById(req.params.id);
if (order) {
await order.deleteOne();
res.json({ message: "Order removed" });
} else {
res.status(404).json({ message: "Order not found" });
}
} catch (error) {
console.error(error);
res.status(500).json({ message: "Server Error" });
}
});

module.exports = router;

# in POSTMAN

DUPLICATE THE LAST REQUEST

UPDATE STATUS => DELETE

PARAMS = > ID

HEADERS

200
OK

{
"message": "Order removed"
}

# NOW LETS CONNECT THE BACKEND AND FRONTEND

# first install redux infrontend

npm i react-redux @reduxjs/toolkit axios

# CREATE STORE FIRST

# in frontend/src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";

const store = configureStore({
reducer: {
auth: authReducer,
},
});

export default store;

# in src/redux/slices/authSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Retrieve user info and token from localStorage if available
const userFromStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null;

// Check for an existing guest ID in the localStorage or generate a new one
const initialGuestId =
localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;

localStorage.setItem("guestId", initialGuestId);

// Initial state
const initialState = {
user: userFromStorage,
guestId: initialGuestId,
loading: false,
error: null,
};

// Async Thunk for User Login
export const loginUser = createAsyncThunk(
"auth/loginUser",
async (userData, { rejectWithValue }) => {
try {
const response = await axios.post(
`${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
userData
);
localStorage.setItem("userInfo", JSON.stringify(response.data.user));
localStorage.setItem("userToken", response.data.token);
return response.data.user; // Return the user object from the response
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Async Thunk for User Login
export const registerUser = createAsyncThunk(
"auth/registerUser",
async (userData, { rejectWithValue }) => {
try {
const response = await axios.post(
`${import.meta.env.VITE_BACKEND_URL}/api/users/register`,
userData
);
localStorage.setItem("userInfo", JSON.stringify(response.data.user));
localStorage.setItem("userToken", response.data.token);
return response.data.user; // Return the user object from the response
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Slice
const authSlice = createSlice({
name: "auth",
initialState,
reducers: {
logout: (state) => {
state.user = null;
state.guestId = `guest_${new Date().getTime()}`; // Reset guest ID on logout
localStorage.removeItem("userInfo");
localStorage.removeItem("userToken");
localStorage.setItem("guestId", state.guestId); // Set new guest ID in localStorage
},

    generateNewGuestId: (state) => {
      state.guestId = `guest_${new Date().getTime()}`;
      localStorage.setItem("guestId", state.guestId);
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          //   state.user = action.payload; // Corrected: Store payload in state.user
          //   state.error = null; // Corrected: Clear error on success
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false; // Corrected: Set loading to false on rejection
          state.error = action.payload.message; // Corrected: Store payload in state.error
        })

        .addCase(registerUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
          state.loading = false;
          state.error = action.payload;
          //   state.user = action.payload; // Corrected: Store payload in state.user
          //   state.error = null; // Corrected: Clear error on success
        })
        .addCase(registerUser.rejected, (state, action) => {
          state.loading = false; // Corrected: Set loading to false on rejection
          state.error = action.payload.message; // Corrected: Store payload in state.error
        });
    },

},
});

export const { logout, generateNewGuestId } = authSlice.actions;
export default authSlice.reducer;

# add this on .env

VITE_BACKEND_URL=http://localhost:9000

# THEN UPDATE THE App.jsx

import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";

import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
return (
<Provider store={store}>

# in Login.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
dispatch(loginUser({ email, password }));
};

# THEN TEST IT

# LOGIN AND CHECK THE NETWORK IN CONSOLE ALSO THE LOCAL STORAGE

# IT IS A SUCCESS

# SAME IN Register.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();

const handleSubmit = (e) => {
e.preventDefault();
dispatch(registerUser({ name, email, password }));
};

# TEST IT SAME IT WILL SHOW THE TOKEN IN NETWORK

# THIS IS GOOD

12:00:00 REDUX

# in src/redux/slices/cartSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Helper function to load cart from localStorage
const loadCartFromStorage = () => {
const storedCart = localStorage.getItem("cart");
return storedCart ? JSON.parse(storedCart) : { products: [] };
};

// Helper function to save cart to localStorage
const saveCartToStorage = (cart) => {
localStorage.setItem("cart", JSON.stringify(cart));
};

// Fetch cart for a user or guest
export const fetchCart = createAsyncThunk(
"cart/fetchCart",
async ({ userId, guestId }, { rejectWithValue }) => {
try {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/cart`,
{
params: { userId, guestId },
}
);
return response.data;
} catch (error) {
console.error(error);
return rejectWithValue(error.response.data);
}
}
);

// Add an item to the cart for a user or guest
export const addToCart = createAsyncThunk(
"cart/addToCart",
async (
{ productId, quantity, size, color, guestId, userId },
{ rejectWithValue }
) => {
try {
const response = await axios.post(
`${import.meta.env.VITE_BACKEND_URL}/api/cart`,
{
productId,
quantity,
size,
color,
guestId,
userId,
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Update the quantity of an item in the cart
export const updateCartItemQuantity = createAsyncThunk(
"cart/updateCartItemQuantity",
async (
{ productId, quantity, guestId, userId, size, color },
{ rejectWithValue }
) => {
try {
const response = await axios.put(
`${import.meta.env.VITE_BACKEND_URL}/api/cart`,
{ productId, quantity, guestId, userId, size, color }
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Remove an item from the cart
export const removeFromCart = createAsyncThunk(
"cart/removeFromCart",
async ({ productId, guestId, userId, size, color }, { rejectWithValue }) => {
try {
const response = await axios({
method: "DELETE",
url: `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
data: { productId, guestId, userId, size, color },
});
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Merge guest cart into user cart
export const mergeCart = createAsyncThunk(
"cart/mergeCart",
async ({ guestId, user }, { rejectWithValue }) => {
try {
const response = await axios.post(
`${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
{ guestId, user },
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

const cartSlice = createSlice({
name: "cart",
initialState: {
cart: loadCartFromStorage(),
loading: false,
error: null,
},
reducers: {
clearCart: (state) => {
state.cart = { products: [] };
localStorage.removeItem("cart");
},
},
extraReducers: (builder) => {
builder
.addCase(fetchCart.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(fetchCart.fulfilled, (state, action) => {
state.loading = false;
state.cart = action.payload;
saveCartToStorage(action.payload);
})
.addCase(fetchCart.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message || "Failed to fetch cart";
})

      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed adding item to cart";
      })

      .addCase(updateCartItemQuantity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.loading = false;
        state.error =
          action.payload?.message || "Failed to update item quantity";
      })

      .addCase(removeFromCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(removeFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to remove item";
      })

      .addCase(mergeCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(mergeCart.fulfilled, (state, action) => {
        state.loading = false;
        state.cart = action.payload;
        saveCartToStorage(action.payload);
      })
      .addCase(mergeCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to merge cart";
      });

},
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;

# ALWAYS IMPORT THE NEW SLICE/REDUCER TO STORE

# in src/redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
},
});

export default store;

# in src/redux/slices/productSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to Fetch Products by Collection and optional Filters
export const fetchProductsByFilters = createAsyncThunk(
"products/fetchByFilters",
async ({
collection,
size,
color,
gender,
minPrice,
maxPrice,
sortBy,
search,
category,
material,
brand,
limit,
}) => {
const query = new URLSearchParams();
if (collection) query.append("collection", collection);
if (size) query.append("size", size);
if (color) query.append("color", color);
if (gender) query.append("gender", gender);
if (minPrice) query.append("minPrice", minPrice);
if (maxPrice) query.append("maxPrice", maxPrice);
if (sortBy) query.append("sortBy", sortBy);
if (search) query.append("search", search);
if (category) query.append("category", category);
if (material) query.append("material", material);
if (brand) query.append("brand", brand);
if (limit) query.append("limit", limit);

    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/products?${query.toString()}`
    );

    return response.data;

}
);

// Async thunk to fetch a single product by ID
export const fetchProductDetails = createAsyncThunk(
"products/fetchProductDetails",
async (id) => {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`
);
return response.data;
}
);

// Async thunk to update a product by ID
export const updateProduct = createAsyncThunk(
"products/updateProduct",
async ({ id, productData }) => {
const response = await axios.put(
`${import.meta.env.VITE_BACKEND_URL}/api/products/${id}`,
productData,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
}
);

// Async thunk to fetch similar products
export const fetchSimilarProducts = createAsyncThunk(
"products/fetchSimilarProducts",
async ({ id }) => {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/products/similar/${id}`
);
return response.data;
}
);

const productsSlice = createSlice({
name: "products",
initialState: {
products: [],
selectedProduct: null, // Store the details of the single Product
similarProducts: [],
loading: false,
error: null,
filters: {
category: "",
size: "",
color: "",
gender: "",
brand: "",
minPrice: "",
maxPrice: "",
sortBy: "",
search: "",
material: "",
collection: "",
// limit: "",
},
},
reducers: {
setFilters: (state, action) => {
state.filters = { ...state.filters, ...action.payload };
},
clearFilters: (state) => {
state.filters = {
category: "",
size: "",
color: "",
gender: "",
brand: "",
minPrice: "",
maxPrice: "",
sortBy: "",
search: "",
material: "",
collection: "",
};
},
},
extraReducers: (builder) => {
builder
// handle fetching products with filter
.addCase(fetchProductsByFilters.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(fetchProductsByFilters.fulfilled, (state, action) => {
state.loading = false;
state.products = Array.isArray(action.payload) ? action.payload : [];
})
.addCase(fetchProductsByFilters.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message;
})

      // handle fetching single product details
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // handle updating product
      .addCase(updateProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.loading = false;
        const updatedProduct = action.payload;
        const index = state.products.findIndex(
          (product) => product._id === updateProduct._id
        );
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(fetchSimilarProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSimilarProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchSimilarProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

},
});

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;

# IMPORT THE REDUCER IN STORE.JS

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
adminProduct: adminProductReducer,
},
});

export default store;

# in slices/checkoutSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to create a checkout session
export const createCheckout = createAsyncThunk(
"checkout/createCheckout",
async (checkoutdata, { rejectWithValue }) => {
try {
const response = await axios.post(
`${import.meta.env.VITE_BACKEND_URL}/api/checkout`,
checkoutdata,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

const checkoutSlice = createSlice({
name: "checkout",
initialState: {
checkout: null,
loading: false,
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(createCheckout.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(createCheckout.fulfilled, (state, action) => {
state.loading = false;
state.checkout = action.payload;
// state.checkout = action.payload; // Corrected: Store payload in state.checkout
// state.error = null; // Corrected: Clear error on success
})
.addCase(createCheckout.rejected, (state, action) => {
state.loading = false;
state.error = action.payload.message;
});
},
});

export default checkoutSlice.reducer;

# IMPORT TO STORE

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
adminProduct: adminProductReducer,
},
});

export default store;

# in slices/orderSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunk to fetch user orders
export const fetchUserOrders = createAsyncThunk(
"orders/fetchUserOrders",
async (\_, { rejectWithValue }) => {
try {
const response = await axios.get(
`${import.meta.env.VITE_BAKEND_URL}/api/orders/my-orders`,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Async thunk to fetch orders details by ID
export const fetchOrderDetails = createAsyncThunk(
"orders/fetchOrderDetails",
async (orderId, { rejectWithValue }) => {
try {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/orders/${orderId}`,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

const orderSlice = createSlice({
name: "orders",
initialState: {
orders: [],
totalOrders: 0,
orderDetails: null,
loading: false,
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
// Fetch user orders
.addCase(fetchUserOrders.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(fetchUserOrders.fulfilled, (state, action) => {
state.loading = false;
state.orders = action.payload;
})
.addCase(fetchUserOrders.rejected, (state, action) => {
state.loading = false;
state.error = action.payload.message;
})

      // Fetch order details
      .addCase(fetchOrderDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrderDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.orderDetails = action.payload;
      })
      .addCase(fetchOrderDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

},
});

export default orderSlice.reducer;

# IMPORT TO STORE

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
adminProduct: adminProductReducer,
},
});

export default store;

# in slices/adminSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// fetch all users (admin only)
export const fetchUsers = createAsyncThunk("admin/fetchUsers", async () => {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
{
headers: { Authorization: `Bearer ${localStorage.getItem("userToken")}` },
}
);
return response.data;
});

// Add the create user action
export const addUser = createAsyncThunk(
"admin/addUser",
async (userData, { rejectWithValue }) => {
try {
const response = await axios.post(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/users`,
userData,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Update user info
export const updateUser = createAsyncThunk(
"admin/updateUser",
async ({ id, name, email, role }) => {
const response = await axios.put(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
{ name, email, role },
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
response.data;
}
);

// Delete a user
export const deleteUser = createAsyncThunk("admin/deleteUser", async (id) => {
await axios.delete(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return id;
});

const adminSlice = createSlice({
name: "admin",
initialState: {
users: [],
loading: false,
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchUsers.pending, (state) => {
state.loading = true;
})
.addCase(fetchUsers.fulfilled, (state, action) => {
state.loading = false;
state.users = action.payload;
})
.addCase(fetchUsers.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message;
})

      .addCase(updateUser.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        const userIndex = state.users.findIndex(
          (user) => user._id === updatedUser._id
        );
        if (userIndex !== -1) {
          state.users[userIndex] = updatedUser;
        }
      })

      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user._id !== action.payload);
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload.user); // add a new user to the state
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });

},
});

export default adminSlice.reducer;

# IMPORT IN STORE

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";
import adminOrdersReducer from "./slices/adminOrderSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
adminProduct: adminProductReducer,
adminOrders: adminOrdersReducer,
},
});

export default store;

# in slices/adminProductSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

// async thunk to fetch admin products
export const fetchAdminProducts = createAsyncThunk(
"adminProducts/fetchProducts",
async () => {
const response = await axios.get(`${API_URL}/api/admin/products`, {
headers: {
Authorization: USER_TOKEN,
},
});
return response.data;
}
);

// async function to create a new product
export const createProduct = createAsyncThunk(
"adminProducts/createProduct",
async (productData) => {
const response = await axios.post(
`${API_URL}/api/admin/products`,
productData,
{
headers: {
Authorization: USER_TOKEN,
},
}
);
return response.data;
}
);

// async thunk to update an existing product
export const updateProduct = createAsyncThunk(
"adminProducts/updateProduct",
async ({ id, productData }) => {
const response = await axios.put(
`${API_URL}/api/admin/products/${id}`,
productData,
{
headers: {
Authorization: USER_TOKEN,
},
}
);
return response.data;
}
);

// async thunk to delete a product
export const deleteProduct = createAsyncThunk(
"adminProducts/deleteProduct",
async (id) => {
await axios.delete(`${API_URL}/api/admin/products/${id}`, {
headers: { Authorization: USER_TOKEN },
});
return id;
}
);

const adminProductSlice = createSlice({
name: "adminProducts",
initialState: {
products: [],
loading: false,
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
.addCase(fetchAdminProducts.pending, (state) => {
state.loading = true;
})
.addCase(fetchAdminProducts.fulfilled, (state, action) => {
state.loading = false;
state.products = action.payload;
})
.addCase(fetchAdminProducts.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message;
})

      // Create Product
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })

      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product._id === action.payload._id
        );
        if (index !== -1) {
          state.products[index] = action.payload;
        }
      })
      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter(
          (product) => product._id !== action.payload
        );
      });

},
});

export default adminProductSlice.reducer;

# IMPORT ON STORE

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";
import adminOrdersReducer from "./slices/adminOrderSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
adminProduct: adminProductReducer,
adminOrders: adminOrdersReducer,
},
});

export default store;

# in slices/adminOrderSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch all orders (admin only)
export const fetchAllOrders = createAsyncThunk(
"adminOrders/fetchAllOrders",
async (\_, { rejectWithValue }) => {
try {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/orders`,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// update order delivery status
export const updateOrderStatus = createAsyncThunk(
"adminOrders/updateOrderStatus",
async ({ id, status }, { rejectWithValue }) => {
try {
const response = await axios.put(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
{ status },
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return response.data;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

// Delete an order
export const deleteOrder = createAsyncThunk(
"adminOrders/deleteOrder",
async (id, { rejectWithValue }) => {
try {
await axios.delete(
`${import.meta.env.VITE_BACKEND_URL}/api/admin/orders/${id}`,
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
return id;
} catch (error) {
return rejectWithValue(error.response.data);
}
}
);

const adminOrderSlice = createSlice({
name: "adminOrders",
initialState: {
orders: [],
totalOrders: 0,
totalSales: 0,
loading: false,
error: null,
},
reducers: {},
extraReducers: (builder) => {
builder
// Fetch all orders
.addCase(fetchAllOrders.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(fetchAllOrders.fulfilled, (state, action) => {
state.loading = false;
state.orders = action.payload;
state.totalOrders = action.payload.length;

        // calculate total sales
        const totalSales = action.payload.reduce((acc, order) => {
          return acc + order.totalPrice;
        }, 0);
        state.totalSales = totalSales;
      })
      .addCase(fetchAllOrders.pending, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })

      // Update Order Status
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updatedOrder = action.payload;
        const orderIndex = state.orders.findIndex(
          (order) => order._id === updatedOrder._id
        );
        if (orderIndex !== -1) {
          state.orders[orderIndex] = updatedOrder;
        }
      })

      // Delete Order
      .addCase(deleteOrder.fulfilled, (state, action) => {
        state.orders = state.orders.filter(
          (order) => order._id !== action.payload
        );
      });

},
});

export default adminOrderSlice.reducer;

# IMPORT IN STORE

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import checkoutReducer from "./slices/checkoutSlice";
import orderReducer from "./slices/orderSlice";
import adminReducer from "./slices/adminSlice";
import adminProductReducer from "./slices/adminProductSlice";
import adminOrdersReducer from "./slices/adminOrderSlice";

const store = configureStore({
reducer: {
auth: authReducer,
products: productReducer,
cart: cartReducer,
checkout: checkoutReducer,
orders: orderReducer,
admin: adminReducer,
adminProduct: adminProductReducer,
adminOrders: adminOrdersReducer,
},
});

export default store;

# NOW LETS EMPLEMENT OUR BACKEND DATA WITH REDUX TO FRONTEND

# FIRST IN NewArrivals.jsx

import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import axios from "axios";

const NewArrivals = () => {
const scrollRef = useRef(null);
const [isDragging, setIsDragging] = useState(false);
const [startX, setStartX] = useState(0);
const [scrollLeft, setScrollLeft] = useState(false);
const [canScrollLeft, setCanScrollLeft] = useState(false);
const [canScrollRight, setCanScrollRight] = useState(true);

const [newArrivals, setNewArrivals] = useState([]);

useEffect(() => {
const fetchNewArrivals = async () => {
try {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
);
setNewArrivals(response.data);
} catch (error) {
console.log(error);
}
};

    fetchNewArrivals();

}, []);

---

useEffect(() => {
const container = scrollRef.current;
if (container) {
container.addEventListener("scroll", updateScrollButtons);
updateScrollButtons();
}

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };

}, [newArrivals]);

return (
<section className="py-16 px-4 lg:px-0">

# in Home.jsx

import { useEffect, useState } from "react";
import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeatureSection from "../components/Products/FeatureSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slices/productSlice";
import axios from "axios";

const Home = () => {
const dispatch = useDispatch();
const { products, loading, error } = useSelector((state) => state.products);
const [bestSellerProduct, setBestSellerProduct] = useState(null);

useEffect(() => {
dispatch(
fetchProductsByFilters({
gender: "Women",
category: "Bottom Wear",
limit: 8,
})
);

    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBestSeller();

}, [dispatch]);

return (
<div>
<Hero />
<GenderCollectionSection />
<NewArrivals />

      {/* Best Sellers */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct._id} />
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}

      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeaturedCollection />
      <FeatureSection />
    </div>

);
};

export default Home;

# ADD REDUX IN ProductDetails.jsx

import { useEffect, useState } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
fetchProductDetails,
fetchSimilarProducts,
} from "../../redux/slices/productSlice";
import { addToCart } from "../../redux/slices/cartSlice";

const ProductDetails = ({ productId }) => {
const { id } = useParams();
const dispatch = useDispatch();
const { selectedProduct, loading, error, similarProducts } = useSelector(
(state) => state.products
);
const { user, guestId } = useSelector((state) => state.auth);
const [mainImage, setMainImage] = useState("");
const [selectedSize, setSelectedSize] = useState("");
const [selectedColor, setSelectedColor] = useState("");
const [quantity, setQuantity] = useState(1);
const [isButtonDisabled, setIsButtonDisabled] = useState(false);

const productFetchId = productId || id;

useEffect(() => {
if (productFetchId) {
dispatch(fetchProductDetails(productFetchId));
dispatch(fetchSimilarProducts({ id: productFetchId }));
}
}, [dispatch, productFetchId]);

useEffect(() => {
if (selectedProduct?.images?.length > 0) {
setMainImage(selectedProduct.images[0].url);
}
}, [selectedProduct]);

const handleQuantityChange = (action) => {
if (action === "plus") setQuantity((prev) => prev + 1);
if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
};

const handleAddToCart = () => {
if (!selectedSize || !selectedColor) {
toast.error("Please select a size and color before adding to cart.", {
duration: 1000,
});
return;
}

    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success("Product added to cart!", {
          duration: 1000,
        });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });

};

if (loading) {
return <p>Loading...</p>;
}

if (error) {
return <p>Error: {error}</p>;
}

---

return (
<div className="p-6">
{selectedProduct && (
<div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">

---

            </h2>
            <ProductGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      )}
    </div>

);
};

export default ProductDetails;

# ADD REDUX IN ProductGrid.jsx

import { Link } from "react-router-dom";

const ProductGrid = ({ products, loading, error }) => {
if (loading) {
return <p>Loading...</p>;
}

if (error) {
return <p>Error: {error}</p>;
}

# FIX THE ERROR ON productSlice.js

.addCase(fetchSimilarProducts.fulfilled, (state, action) => {
state.loading = false;
state.similarProducts = action.payload;
})
.addCase(fetchSimilarProducts.rejected, (state, action) => {
state.loading = false;
state.error = action.error.message;
});
},
});

export const { setFilters, clearFilters } = productsSlice.actions;
export default productsSlice.reducer;

# ADD REDUX TO CollectionPage.jsx

import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import ProductGrid from "../components/Products/ProductGrid";
import SortOptions from "../components/Products/SortOptions";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchProductsByFilters } from "../redux/slices/productSlice";

const CollectionPage = () => {
const { collection } = useParams();
const [searchParams] = useSearchParams();
const dispatch = useDispatch();
const { products, loading, error } = useSelector((state) => state.products);
const queryParams = Object.fromEntries([...searchParams]);

const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const sidebarRef = useRef(null);

useEffect(() => {
dispatch(fetchProductsByFilters({ collection, ...queryParams }));
console.log(collection);
}, [dispatch, collection, searchParams]);

const toggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen);
};

const handleClickOutside = (e) => {
// Close sidebar if clicked outside
if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
setIsSidebarOpen(false);
}
};

useEffect(() => {
// Add Event listener for clicks
document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

}, []); // Added empty dependency array

return (
<div className="flex flex-col lg:flex-row">

---

        {/* Product Grid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>

);
};

export default CollectionPage;

# UPDATE THE LINKS IN NAVBAR.JSX

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);
const [navDrawerOpen, setNavDrawerOpen] = useState(false);

const toggleNavDrawer = () => {
setNavDrawerOpen(!navDrawerOpen);
};

const toggleCartDrawer = () => {
setDrawerOpen(!drawerOpen);
};

return (
<>
<nav className="container mx-auto flex items-center justify-between py-4 px-6">
{/_ Left - Logo _/}
<div>
<Link to="/" className="text-2xl font-medium">
Panda
</Link>
</div>
{/_ Center - Navigation Links _/}
<div className="hidden md:flex space-x-6">
<Link
            to="/collections/all?gender=Men"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Men
</Link>
<Link
            to="/collections/all?gender=Women"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Women
</Link>
<Link
            to="/collections/all?category=Top Wear"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Top Wear
</Link>
<Link
            to="/collections/all?category=Bottom Wear"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Bottom Wear
</Link>
<Link
            to="/collections/all?gender=Women"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Threads
</Link>
</div>
{/_ Right - Icons _/}
<div className="flex items-center space-x-4">
<Link
            to="/admin"
            className="block bg-slate-700 px-4 py-2 text-sm text-white"
          >
Admin
</Link>
<Link to="/profile" className="hover:text-black">
<HiOutlineUser className="h-6 w-6 text-gray-700" />
</Link>

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-2.5 bg-slate-800 text-white text-xs rounded-full px-2 py-1">
              4
            </span>
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              WoMen
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>

);
};

export default Navbar;

# ADD REDUX TO CARTDRAWER.JSX

import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
const navigate = useNavigate();
const { user, guestId } = useSelector((state) => state.auth);
const { cart } = useSelector((state) => state.cart);
const userId = user ? user.\_id : null;

const handleCheckout = () => {
toggleCartDrawer();
if (!user) {
navigate("/login?redirect=checkout");
} else {
navigate("/checkout");
}
};

return (
<div
className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        drawerOpen ? "translate-x-0" : "translate-x-full"
      }`} >
{/_ Close Button _/}
<div className="flex justify-end p-4">
<button onClick={toggleCartDrawer}>
<IoMdClose className="h-6 w-6 text-gray-600" />
</button>
</div>
{/_ Cart contents with scrollable area _/}
<div className="flex-grow p-4 overflow-y-auto">
<h2 className="text-xl font-semibold mb-4">Your Cart</h2>
{cart && cart?.products?.length > 0 ? (
<CartContents cart={cart} userId={userId} guestId={guestId} />
) : (
<p>Your cart is empty.</p>
)}
</div>

      {/* Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        {cart && cart?.products?.length > 0 && (
          <>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Checkout
            </button>
            <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center">
              Shipping, taxes, and discount codes calculated at checkout.
            </p>
          </>
        )}
      </div>
    </div>

);
};
export default CartDrawer;

# IN CARTCONTENTS.JSX

import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
removeFromCart,
updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
const dispatch = useDispatch();

// Handle adding or subtracting to cart
const handleAddToCart = (productId, delta, quantity, size, color) => {
const newQuantity = quantity + delta;
if (newQuantity >= 1) {
dispatch(
updateCartItemQuantity({
productId,
quantity: newQuantity,
guestId,
userId,
size,
color,
})
);
}
};

const handleRemoveFromCart = (productId, size, color) => {
dispatch(removeFromCart({ productId, guestId, userId, size, color }));
};

return (
<div>
{cart.products.map((product, index) => (
<div
          key={index}
          className="flex items-start justify-between py-4 border-b border-gray-300"
        >
<div className="flex items-start">
<img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
<div>
<h3>{product.name}</h3>
<p className="text-sm text-gray-500">
size: {product.size} | color: {product.color}
</p>
<div className="flex items-center mt-2">
<button
onClick={() =>
handleAddToCart(
product.productId,
-1,
product.quantity,
product.size,
product.color
)
}
className="border rounded px-2 py-1 text-xl font-medium" > -
</button>
<span className="mx-4">{product.quantity}</span>
<button
onClick={() =>
handleAddToCart(
product.productId,
1,
product.quantity,
product.size,
product.color
)
}
className="border rounded px-2 py-1 text-xl font-medium" > +
</button>
</div>
</div>
</div>
<div>
<p>${product.price.toLocaleString()}</p>
<button
onClick={() =>
handleRemoveFromCart(
product.productId,
product.size,
product.color
)
} >
<RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600" />
</button>
</div>
</div>
))}
</div>
);
};

export default CartContents;

# IN NAVBAR.JSX

import { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineUser, HiBars3BottomRight } from "react-icons/hi2";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);
const [navDrawerOpen, setNavDrawerOpen] = useState(false);
const { cart } = useSelector((state) => state.cart);

const cartItemCount =
cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
0;

const toggleNavDrawer = () => {
setNavDrawerOpen(!navDrawerOpen);
};

const toggleCartDrawer = () => {
setDrawerOpen(!drawerOpen);
};

return (
<>
<nav className="container mx-auto flex items-center justify-between py-4 px-6">
{/_ Left - Logo _/}
<div>
<Link to="/" className="text-2xl font-medium">
Panda
</Link>
</div>
{/_ Center - Navigation Links _/}
<div className="hidden md:flex space-x-6">
<Link
            to="/collections/all?gender=Men"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Men
</Link>
<Link
            to="/collections/all?gender=Women"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Women
</Link>
<Link
            to="/collections/all?category=Top Wear"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Top Wear
</Link>
<Link
            to="/collections/all?category=Bottom Wear"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Bottom Wear
</Link>
<Link
            to="/collections/all?gender=Women"
            className="text-sm text-gray-700 hover:text-black font-medium uppercase"
          >
Threads
</Link>
</div>
{/_ Right - Icons _/}
<div className="flex items-center space-x-4">
<Link
            to="/admin"
            className="block bg-slate-700 px-4 py-2 text-sm text-white"
          >
Admin
</Link>
<Link to="/profile" className="hover:text-black">
<HiOutlineUser className="h-6 w-6 text-gray-700" />
</Link>

          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2.5 bg-slate-800 text-white text-xs rounded-full px-2 py-1">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              WoMen
            </Link>
            <Link
              to="/collections/all?category=Top Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="/collections/all?category=Bottom Wear"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>

);
};

export default Navbar;

# ADD REDUX ON SEARCHBAR.JSX

import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
fetchProductsByFilters,
setFilters,
} from "../../redux/slices/productSlice";

const SearchBar = () => {
const [searchTerm, setSearchTerm] = useState("");
const [isOpen, setIsOpen] = useState(false);
const dispatch = useDispatch();
const navigate = useNavigate();

const handleSearchToggle = () => {
setIsOpen(!isOpen);
};

const handleSearch = (e) => {
e.preventDefault();
dispatch(setFilters({ search: searchTerm }));
dispatch(fetchProductsByFilters({ search: searchTerm }));
navigate(`/collections/all?search=${searchTerm}`);
setIsOpen(false);
};

#

# ADD REDUX TO LOGIN.JSX

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/login.webp";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/slices/authSlice";
import { mergeCart } from "../redux/slices/cartSlice";

const Login = () => {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();

const { user, guestId } = useSelector((state) => state.auth);
const { cart } = useSelector((state) => state.cart);

// Get redirect parameter and check if it's checkout or something
const redirect = new URLSearchParams(location.search).get("redirect") || "/";
const isCheckoutRedirect = redirect.includes("checkout");

useEffect(() => {
if (user) {
console.log("User logged in, checking cart...");
if (cart?.products.length > 0 && guestId) {
dispatch(mergeCart({ guestId, user })).then(() => {
console.log("Cart merged, navigating...");
navigate(isCheckoutRedirect ? "/checkout" : "/");
});
} else {
console.log("No cart to merge, navigating...");
navigate(isCheckoutRedirect ? "/checkout" : "/");
}
}
}, [user, cart, guestId, navigate, isCheckoutRedirect, dispatch]);

const handleSubmit = (e) => {
e.preventDefault();
dispatch(loginUser({ email, password }));
};

return (
<div className="flex">
<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
<form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
<div className="flex justify-center mb-6">
<h2 className="text-xl font-medium">Panda</h2>
</div>
<h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
<p className="text-center mb-6">
Enter your username and password to Login
</p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Sign In
          </button>
          <p className="mt-6 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to={`/register?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500"
            >
              Register
            </Link>
          </p>
        </form>
      </div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={login}
            alt="Login to Account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>

);
};

export default Login;

# edit the reducer of authSlice.js

const authSlice = createSlice({
name: "auth",
initialState,
reducers: {
logout: (state) => {
state.user = null;
state.guestId = `guest_${new Date().getTime()}`;
localStorage.removeItem("userInfo");
localStorage.removeItem("userToken");
localStorage.setItem("guestId", state.guestId);
},
generateNewGuestId: (state) => {
state.guestId = `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", state.guestId);
},
},
extraReducers: (builder) => {
builder
.addCase(loginUser.pending, (state) => {
state.loading = true;
state.error = null;
})
.addCase(loginUser.fulfilled, (state, action) => {
state.loading = false;
state.user = action.payload;
state.error = null;
})
.addCase(loginUser.rejected, (state, action) => {
state.loading = false;
state.error = action.payload?.message || "Login failed";
})

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration failed";
      });

},
});

# ADD REDUX TO PROFILE.JSX

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyOrder from "./MyOrder";
import { useEffect } from "react";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";

const Profile = () => {
const { user } = useSelector((state) => state.auth);
const navigate = useNavigate();
const dispatch = useDispatch();

useEffect(() => {
if (!user) {
navigate("/login");
}
}, [user, navigate]);

const handleLogout = () => {
dispatch(logout());
dispatch(clearCart());
navigate("/login");
};

return (
<div className="min-h-screen flex flex-col">
<div className="flex-grow container mx-auto p-4 md:p-6">
<div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
{/_ Left Section _/}
<div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6">
<h1 className="text-2xl md:text-3xl font-bold mb-4">
{user?.name}
</h1>
<p className="text-lg text-gray-600 mb-4">{user?.email}</p>
<button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
            >
Logout
</button>
</div>
{/_ Right Section: Orders table _/}
<div className="w-full md:w-2/3 lg:w-3/4">
<MyOrder />
</div>
</div>
</div>
</div>
);
};

export default Profile;

# ADD REDUX TO REGISTER.JSX

import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import register from "../assets/register.webp";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import { mergeCart } from "../redux/slices/cartSlice";

const Register = () => {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();

const { user, guestId } = useSelector((state) => state.auth);
const { cart } = useSelector((state) => state.cart);

// Get redirect parameter and check if it's checkout or something
const redirect = new URLSearchParams(location.search).get("redirect") || "/";
const isCheckoutRedirect = redirect.includes("checkout");

useEffect(() => {
if (user) {
console.log("User logged in, checking cart...");
if (cart?.products.length > 0 && guestId) {
dispatch(mergeCart({ guestId, user })).then(() => {
console.log("Cart merged, navigating...");
navigate(isCheckoutRedirect ? "/checkout" : "/");
});
} else {
console.log("No cart to merge, navigating...");
navigate(isCheckoutRedirect ? "/checkout" : "/");
}
}
}, [user, cart, guestId, navigate, isCheckoutRedirect, dispatch]);

const handleSubmit = (e) => {
e.preventDefault();
dispatch(registerUser({ name, email, password }));
};

return (
<div className="flex">
<div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
<form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm"
        >
<div className="flex justify-center mb-6">
<h2 className="text-xl font-medium">Panda</h2>
</div>
<h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
<p className="text-center mb-6">Create Your Panda Account</p>
<div className="mb-4">
<label className="block text-sm font-semibold mb-2">Name</label>
<input
type="text"
value={name}
onChange={(e) => setName(e.target.value)}
className="w-full p-2 border rounded"
placeholder="Enter your Name"
/>
</div>
<div className="mb-4">
<label className="block text-sm font-semibold mb-2">Email</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
className="w-full p-2 border rounded"
placeholder="Enter your email address"
/>
</div>
<div className="mb-4">
<label className="block text-sm font-semibold mb-2">Password</label>
<input
type="password"
value={password}
onChange={(e) => setPassword(e.target.value)}
className="w-full p-2 border rounded"
placeholder="Enter your password"
/>
</div>
<button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-lg font-semibold hover:bg-gray-800 transition"
          >
Sign Up
</button>
<p className="mt-6 text-center text-sm">
Don't have an account?{" "}
<Link
to={`/login?redirect=${encodeURIComponent(redirect)}`}
className="text-blue-500" >
Login
</Link>
</p>
</form>
</div>

      <div className="hidden md:block w-1/2 bg-gray-800">
        <div className="h-full flex flex-col justify-center items-center">
          <img
            src={register}
            alt="Login to Account"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>

);
};

export default Register;

# ADD REDUX PAYPAL METHOD TO CHECKOUT.JSX

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PaypalButton from "./PaypalButton";
import axios from "axios";
import { createCheckout } from "../../redux/slices/checkoutSlice";

const Checkout = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const { cart, loading, error } = useSelector((state) => state.cart);
const { user } = useSelector((state) => state.auth);
const [checkoutId, setCheckoutId] = useState(null);

const [shippingAddress, setShippingAddress] = useState({
firstName: "",
lastName: "",
address: "",
city: "",
postalCode: "",
country: "",
phone: "",
});

// Ensure cart is loaded before proceeding
useEffect(() => {
if (!cart || !cart.products || cart.products.length === 0) {
navigate("/");
}
}, [cart, navigate]);

const handleCreateCheckout = async (e) => {
e.preventDefault();
if (cart && cart.products.length > 0) {
const res = await dispatch(
createCheckout({
checkoutItems: cart.products,
shippingAddress,
paymentMethod: "Paypal",
totalPrice: cart.totalPrice,
})
);
if (res.payload && res.payload.\_id) {
setCheckoutId(res.payload.\_id); // Set checkout ID if checkout was successful
}
}
};

const handlePaymentSuccess = async (details) => {
try {
const response = await axios.put(
`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/pay`,
{ paymentStatus: "paid", paymentDetails: details },
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);

      await handleFinalizeCheckout(checkoutId);
    } catch (error) {
      console.log(error);
    }

};

const handleFinalizeCheckout = async (checkoutId) => {
try {
const response = await axios.post(
`${
          import.meta.env.VITE_BACKEND_URL
        }/api/checkout/${checkoutId}/finalize`,
{},
{
headers: {
Authorization: `Bearer ${localStorage.getItem("userToken")}`,
},
}
);
navigate("/order-confirmation");
} catch (error) {
console.error(error);
}
};

if (loading) return <p>Loading cart ...</p>;
if (error) return <p>Error: {error}</p>;
if (!cart || !cart.products || cart.products.length === 0) {
return <p>Your cart is empty</p>;
}

return (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
{/_ Left Section _/}
<div className="bg-white rounded-lg p-6">
<h2 className="text-2xl uppercase mb-6">Checkout</h2>
<form onSubmit={handleCreateCheckout}>
<h3 className="text-lg mb-4">Contact Details</h3>
<div className="mb-4">
<label className="block text-gray-700">Email</label>
<input
type="email"
value={user ? user.email : ""}
className="w-full p-2 border rounded"
disabled
/>
</div>
<h3 className="text-lg mb-4">Delivery</h3>
<div className="mb-4 grid grid-cols-2 gap-4">
<div>
<label className="block text-gray-700">First Name</label>
<input
type="text"
value={shippingAddress.firstName}
onChange={(e) =>
setShippingAddress({
...shippingAddress,
firstName: e.target.value,
})
}
className="w-full p-2 border rounded"
required
/>
</div>

            <div>
              <label className="block text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              value={shippingAddress.address}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  address: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                value={shippingAddress.city}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    city: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">Postal Code</label>
              <input
                type="text"
                value={shippingAddress.postalCode}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    postalCode: e.target.value,
                  })
                }
                className="w-full p-2 border rounded"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              type="text"
              value={shippingAddress.country}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  country: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              value={shippingAddress.phone}
              onChange={(e) =>
                setShippingAddress({
                  ...shippingAddress,
                  phone: e.target.value,
                })
              }
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <div className="mt-6">
            {!checkoutId ? (
              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded cursor-pointer"
              >
                Continue to Payment
              </button>
            ) : (
              <div>
                <h3 className="text-lg mb-4">Pay with Paypal</h3>
                <PaypalButton
                  amount={cart.totalPrice}
                  onSuccess={handlePaymentSuccess}
                  onError={(err) => alert("Payment Failed. Please Try Again.")}
                />
              </div>
            )}
          </div>
        </form>
      </div>

      {/* Right Section */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-start justify-between py-2 border-b"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>

);
};
export default Checkout;

# IN PAYPALBUTTON.JSX ADD THIS

<PayPalButtons
style={{ layout: "vertical" }}
createOrder={(data, actions) => {
return actions.order.create({
purchase_units: [
{ amount: { value: parseFloat(amount).toFixed(2) } },
],
});
}}

PROBLEM 14:38 CHECKOUT NOT SAVE ON

#

# ADD REDUX TO ORDERCONFIRMATION.JSX

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

const OrderConfirmationPage = () => {
const navigate = useNavigate();
const dispatch = useDispatch();
const { checkout } = useSelector((state) => state.checkout);
// Redirect if no order found
if (!checkout) {
return (
<div className="text-center py-12">
<p className="text-gray-500 text-2xl">No order found.</p>
<button
onClick={() => navigate("/")}
className="bg-black mt-10 text-white cursor-pointer px-6 py-3 rounded-lg text-md font-medium tracking-wide hover:bg-gray-800 transition-all" >
Back to Home
</button>
</div>
);
}

// Clear the cart when the order is confirmed
useEffect(() => {
if (checkout && checkout.\_id) {
dispatch(clearCart());
localStorage.removeItem("cart"); // Move inside the if block
} else {
navigate("/my-order");
}
}, [checkout, dispatch, navigate]);

const calculateEstimatedDelivery = (createdAt) => {
if (!createdAt) return "N/A"; // Prevent error if createdAt is undefined
const orderDate = new Date(createdAt);
orderDate.setDate(orderDate.getDate() + 10); // Add 10 days to the order date
return orderDate.toLocaleDateString();
};

return (
<div className="max-w-3xl mx-auto px-6 py-12 bg-white">
<h1 className="text-4xl font-bold text-center text-green-600 tracking-wide">
Order Confirmed 🎉
</h1>
<p className="text-center text-gray-500 mt-2">
Thanks for shopping with us. Your order is on the way!
</p>

      <div className="mt-8 border border-gray-200 shadow-md p-6 rounded-xl">
        {/* Order Details */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Order ID:{" "}
              <span className="text-gray-600">{checkout?.id || "N/A"}</span>
            </h2>
            <p className="text-sm text-gray-500">
              Ordered on:{" "}
              {checkout?.createdAt
                ? new Date(checkout.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
          <p className="text-sm text-gray-700 font-medium">
            Estimated Delivery:{" "}
            <span className="text-green-600">
              {calculateEstimatedDelivery(checkout?.createdAt)}
            </span>
          </p>
        </div>

        {/* Ordered Items */}
        <div className="divide-y divide-gray-200">
          {checkout?.checkoutItems?.map((item) => (
            <div
              key={item.productId}
              className="flex items-center py-4 hover:bg-gray-50 transition-all duration-300 rounded-lg px-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg shadow"
              />
              <div className="ml-4 flex-1">
                <h4 className="text-md font-medium text-gray-800">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.color} | {item.size}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  ${item.price}
                </p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Shipping Info */}
        <div className="mt-8 flex justify-between gap-6">
          {/* Payment Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">Payment</h4>
            <p className="text-gray-500 mt-1">PayPal</p>
          </div>

          {/* Delivery Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">
              Shipping Address
            </h4>
            <p className="text-gray-500 mt-1">
              {checkout.shippingAddress.address},{" "}
              {checkout.shippingAddress.city},{" "}
              {checkout.shippingAddress.country}
            </p>
          </div>
        </div>

        {/* Back to Shopping Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => navigate("/")}
            className="bg-black text-white cursor-pointer px-6 py-3 rounded-lg text-sm font-medium tracking-wide hover:bg-gray-800 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>

);
};

export default OrderConfirmationPage;

# TYPO ON ORDERSLICE.JS

// Async Thunk to fetch user orders
export const fetchUserOrders = createAsyncThunk(
"orders/fetchUserOrders",
async (\_, { rejectWithValue }) => {
try {
const response = await axios.get(
`${import.meta.env.VITE_BACKEND_URL}/api/orders/my-orders`,
{

# ADD MYORDER.JSX

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserOrders } from "../redux/slices/orderSlice";

const MyOrder = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const { orders, loading, error } = useSelector((state) => state.orders);

useEffect(() => {
dispatch(fetchUserOrders());
}, [dispatch]);

const handleRowClick = (orderId) => {
navigate(`/order/${orderId}`);
};

if (loading) return <p>Loading ...</p>;
if (error) return <p>Error: {error}</p>;

return (
<div className="max-w-7xl mx-auto p-4 sm:p-6">
<h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      <div className="relative shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center textgra5">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

);
};

export default MyOrder;

# ADD REDUX IN ORDERDETAILSPAGE.JSX

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetails } from "../redux/slices/orderSlice";

const OrderDetailsPage = () => {
const { id } = useParams();
const dispatch = useDispatch();

const { orderDetails, loading, error } = useSelector((state) => state.orders);

useEffect(() => {
dispatch(fetchOrderDetails(id));
}, [dispatch, id]);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}...</p>;

return (
<div className="max-w-7xl mx-auto p-4 sm:p-6">
<h2 className="text-2xl md:text-3xl font-bold mb-6">Order Details</h2>
{!orderDetails ? (
<p>No Order details found</p>
) : (
<div className="p-4 sm:p-6 rounded-lg border">
{/_ Order Info _/}
<div className="flex flex-col sm:flex-row justify-between mb-8">
<div>
<h3 className="text-lg md:text-xl font-semibold">
Order ID: #{orderDetails.\_id}
</h3>
<p className="text-gray-600">
{new Date(orderDetails.createdAt).toLocaleDateString()}
</p>
</div>

            <div className="flex flex-col items-start sm:items-end mt-4 sm:mt-0">
              <span
                className={`${
                  orderDetails.isPaid
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`${
                  orderDetails.isDelivered
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-yellow-700"
                } px-3 py-1 rounded-full text-sm font-medium mb-2`}
              >
                {orderDetails.isDelivered ? "Delivered" : "Pending"}
              </span>
            </div>
          </div>

          {/* Customer, Payment, Shipping Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-semibold mb-2">Payment Info</h4>
              <p>Payment Method: {orderDetails.paymentMethod}</p>
              <p>Status: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2">Shipping Info</h4>
              <p>Shipping Method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* Product list */}
          <div className="overflow-x-auto">
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <table className="min-w-full text-gray-600 mb-4">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Unit Price</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b">
                    <td className="py-2 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 object-cover rounded-lg mr-4"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="py-2 px-4">${item.price}</td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link */}
          <Link to="/my-orders" className="text-blue-500 hover:underline">
            Back to My Orders
          </Link>
        </div>
      )}
    </div>

);
};

export default OrderDetailsPage;

# MYORDER.JSX

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserOrders } from "../redux/slices/orderSlice";

const MyOrder = () => {
const navigate = useNavigate();
const dispatch = useDispatch();

const { orders, loading, error } = useSelector((state) => state.orders);

useEffect(() => {
dispatch(fetchUserOrders());
}, [dispatch]);

const handleRowClick = (orderId) => {
navigate(`/order/${orderId}`);
};

if (loading) return <p>Loading ...</p>;
if (error) return <p>Error: {error}</p>;

return (
<div className="max-w-7xl mx-auto p-4 sm:p-6">
<h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>

      <div className="relative shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-100 text-xs uppercase text-gray-700">
            <tr>
              <th className="py-2 px-4 sm:py-3">Image</th>
              <th className="py-2 px-4 sm:py-3">Order ID</th>
              <th className="py-2 px-4 sm:py-3">Created</th>
              <th className="py-2 px-4 sm:py-3">Shipping Address</th>
              <th className="py-2 px-4 sm:py-3">Items</th>
              <th className="py-2 px-4 sm:py-3">Price</th>
              <th className="py-2 px-4 sm:py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  onClick={() => handleRowClick(order._id)}
                  className="border-b hover:border-gray-50 cursor-pointer"
                >
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <img
                      src={order.orderItems[0].image}
                      alt={order.orderItems[0].name}
                      className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg"
                    />
                  </td>

                  <td className="py-2 px-2 sm:py-4 sm:px-4 font-medium text-gray-900 whitespace-nowrap">
                    #{order._id}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {new Date(order.createdAt).toLocaleDateString()}{" "}
                    {new Date(order.createdAt).toLocaleTimeString()}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.shippingAddress
                      ? `${order.shippingAddress.city}, ${order.shippingAddress.country}`
                      : "N/A"}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    {order.orderItems.length}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    ${order.totalPrice}
                  </td>
                  <td className="py-2 px-2 sm:py-4 sm:px-4">
                    <span
                      className={`${
                        order.isPaid
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } px-2 py-1 rounded-full text-xs sm:text-sm font-medium`}
                    >
                      {order.isPaid ? "Paid" : "Pending"}
                    </span>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="py-4 px-4 text-center textgra5">
                  You have no orders
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

);
};

export default MyOrder;

# IN CHECKOUT.JS MODEL BACKEND ADD THIS

      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    size: String,
    color: String,

},
{ \_id: false }
);

# 14:46

# PROTECT THE ROUTE FOR ONLY ADMIN CAN ACCESS THE ADMIN BUTTON AND PAGE

# in src/components/Common/ProtectedRoute.jsx

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
const { user } = useSelector((state) => state.auth);

if (!user || (role && user.role !== role)) {
return <Navigate to="/login" replace />;
}

return children;
};

export default ProtectedRoute;

# then in App.jsx

import EditProductPage from "./components/Admin/EditProductPage";
import OrderManagement from "./components/Admin/OrderManagement";
import ProtectedRoute from "./components/Common/ProtectedRoute";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {

---

<Route
path="/admin"
element={
<ProtectedRoute role="admin">
<AdminLayout />
</ProtectedRoute>
} >
<Route index element={<AdminHomepage />} />

# then in Navbar.jsx

import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
const [drawerOpen, setDrawerOpen] = useState(false);
const [navDrawerOpen, setNavDrawerOpen] = useState(false);
const { cart } = useSelector((state) => state.cart);
const { user } = useSelector((state) => state.auth);

---

{/_ Right - Icons _/}
<div className="flex items-center space-x-4">
{user && user.role === "admin" && (
<Link
              to="/admin"
              className="block bg-slate-700 px-4 py-2 text-sm text-white"
            >
Admin
</Link>
)}
<Link to="/profile" className="hover:text-black">
