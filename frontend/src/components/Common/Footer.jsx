import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiFacebook, FiInstagram, FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="border-t border-gray100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col font-display md:flex-row justify-between">
          {/* Shop links */}
          <div>
            <h3 className="text-gray-400 text-lg mb-3">Company</h3>
            <div className="flex flex-col">
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                About Us
              </a>
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Contact Us
              </a>
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Store Location
              </a>
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-gray-400 text-lg mb-3">Store</h3>
            <div className="flex flex-col">
              <Link
                href="/product-category/women"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Women's Top Wear
              </Link>
              <Link
                href="/product-category/men"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Men's Top Wear
              </Link>
              <Link
                href="/product-category/bags"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Accessories
              </Link>
              <Link
                href="/product-category/bags"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Threads
              </Link>
            </div>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-gray-400 text-lg mb-3">Help</h3>
            <div className="flex flex-col">
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Order Tracking
              </a>
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                FAQs
              </a>
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Privacy Policy
              </a>
              <a
                href="example"
                className="py-2 text-gray400 hover:text-gray500"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gray-400 text-lg mb-3">Keep In Touch</h3>
            <div className="flex flex-col text-gray400 ">
              <span className="py-2">
                Barangay San Juan
                <br />
                Dasmariñas, Cavite
                <br />
                Philippines
              </span>
              <span className="py-2">+95 95 096 051</span>
              <span className="py-2">
                Open All Days
                <br />
                9:00 AM ~ 7:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center pb-16">
        <h4 className="text-3xl mb-4">Newsletter</h4>
        <span className="px-6 text-center">
          Be the first to know about new arrivals, sales & promos!
        </span>
        <p className="font-medium mt-1 text-sm text-gray-600 mb-4">
          Sign up and get 10% off your first order.
        </p>
        <div className="px-6 flex w-full sm:w-auto flex-col sm:flex-row">
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-full text-sm border-t border-l border-b border-gray300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray500 transition-all"
              required
            />
            <button
              type="submit"
              className="bg-gray900 text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray500 transition-all cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="border py-2 text-md border-gray200 text-gray500 max-sm:py-0">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center sm:flex-row sm:justify-between">
          {/* Social Links Section */}
          <span className="flex items-center mt-2 sm:mt-0">
            <span className="hidden sm:block">Follow Us</span>
            <a
              href="https://www.facebook.com"
              aria-label="Facebook Page for Haru Fashion"
              className="ml-4 hover:text-gray400 duration-300"
            >
              <TbBrandMeta />
            </a>
            <a
              href="https://www.instagram.com"
              aria-label="Instagram Account for Haru Fashion"
              className="ml-4 hover:text-gray400 duration-300"
            >
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              aria-label="Twitter Account for Haru Fashion"
              className="ml-4 hover:text-gray400 duration-300"
            >
              <RiTwitterXFill />
            </a>
          </span>

          {/* Copyright Section */}
          <span className="text-center sm:text-left max-sm:mt-2">
            &copy; {new Date().getFullYear()}. Juan Graphico. All Rights
            Reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
