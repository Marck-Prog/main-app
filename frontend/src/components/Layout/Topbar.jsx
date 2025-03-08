import { useState } from "react";
import { NavLink } from "react-router-dom";
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram, IoIosArrowDown } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const MyLink = ({ href, children, active }) => {
  return (
    <NavLink
      to={href}
      className={`py-2 px-4 text-center ${
        active ? "bg-gray200 text-gray500" : "bg-white text-gray500"
      }`}
    >
      {children}
    </NavLink>
  );
};

const Topbar = () => {
  const [locale, setLocale] = useState("en");
  const [currency, setCurrency] = useState("usd");

  return (
    <div className="bg-gray500 text-gray100 hidden lg:block text-center">
      <div className="flex justify-between app-max-width">
        {/* Left Section - Social Media & Links */}
        <ul className="flex ml-8">
          <li className="text-xs my-2 mr-4 hover:text-gray-300">
            <a
              href="#"
              aria-label="Juan Fashion Facebook Page"
              className="hover:text-gray300"
            >
              <TbBrandMeta className="h-5 w-5 mt-0.5" />
            </a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray-300">
            <a
              href="#"
              aria-label="Juan Fashion Facebook Page"
              className="hover:text-gray300"
            >
              <IoLogoInstagram className="h-5 w-5 mt-0.5" />
            </a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray-300">
            <a
              href="#"
              aria-label="Juan Fashion Facebook Page"
              className="hover:text-gray300"
            >
              <RiTwitterXLine className="h-5 w-5 mt-0.5" />
            </a>
          </li>

          <li className="text-xs my-2 mx-2 hover:text-gray300 py-1">
            <a href="#">About Us</a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray300 py-1">
            <a href="#">Our Policy</a>
          </li>
        </ul>
        {/* Language & Currency Dropdowns */}
        <ul className="flex text-xs my-2 text-center gap-4 py-1">
          <li className="hover:text-gray300 cursor-pointer">
            {/* Language Dropdown */}
            <Menu>
              <MenuButton className="flex cursor-pointer gap-1">
                {locale === "en" ? "Eng" : "frs"}
                <IoIosArrowDown className="mt-0.5" />
              </MenuButton>
              <MenuItems className="flex flex-col w-20 absolute right-25 p-1 border border-gray200 bg-white mt-3 outline-none z-99">
                <MenuItem>
                  <div className="bg-gray-100 text-gray500 text-center focus:outline-none">
                    <p
                      className="hover:bg-gray300 hover:text-white p-1"
                      onClick={() => setLocale("en")}
                    >
                      English
                    </p>
                    <p
                      className="hover:bg-gray300 hover:text-white p-1"
                      onClick={() => setLocale("fr")}
                    >
                      Francis
                    </p>
                  </div>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
          <li>
            {/* Currency Dropdown */}
            <Menu>
              <MenuButton className="flex text-center cursor-pointer gap-1">
                {currency === "usd" ? "USD" : "PHP"}
                <IoIosArrowDown className="mt-0.5" />
              </MenuButton>
              <MenuItems className="flex flex-col w-20 cursor-pointer absolute p-1 right-10 border border-gray200 bg-white mt-3 outline-none z-99">
                <MenuItem>
                  <div className="bg-gray-100 text-gray500 text-center focus:outline-none">
                    <p
                      className="hover:bg-gray300 hover:text-white p-1"
                      onClick={() => setCurrency("usd")}
                    >
                      USD
                    </p>
                    <p
                      className="hover:bg-gray300 hover:text-white p-1"
                      onClick={() => setCurrency("php")}
                    >
                      PHP
                    </p>
                  </div>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
