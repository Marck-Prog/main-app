import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import React, { useState } from "react";
import { IoIosArrowDown, IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const MyLink = ({ href, locale, children, active }) => {
  return (
    <NavLink
      to={href}
      className={`px-4 text-center ${
        active ? "bg-gray200 text-gray500" : "bg-white text-gray500"
      }`}
    >
      {children}
    </NavLink>
  );
};

const TopNav = () => {
  const [locale, setLocale] = useState("en");
  const [currency, setCurrency] = useState("usd");

  const handleLocaleChange = (newLocale) => {
    setLocale(newLocale);
  };

  const handleCurrencyChange = (newCurrency) => {
    setCurrency(newCurrency);
  };

  return (
    <div className="bg-gray500 text-gray100 hidden lg:block text-center px-20">
      <div className="flex justify-between app-max-width">
        {/* Left Section - Social Media & Links */}
        <ul className="flex ml-8">
          <li className="text-xs my-1 mr-2 mt-1.5 hover:text-gray300">
            <a href="#" aria-label="Haru Fashion Facebook Page">
              <TbBrandMeta className="h-4 w-5 mt-0.5" />
            </a>
          </li>
          <li className="text-xs my-1 mr-2 mt-1.5 hover:text-gray300">
            <a href="#" aria-label="Haru Fashion Instagram Account">
              <IoLogoInstagram className="h-4 w-5 mt-0.5" />
            </a>
          </li>
          <li className="text-xs my-1 mr-2 mt-1.5 hover:text-gray300">
            <a href="#" aria-label="Haru Fashion Instagram Account">
              <RiTwitterXLine className="h-4 w-5 mt-0.5" />
            </a>
          </li>
          <li className="text-xs my-2 mx-2 hover:text-gray300 text-center">
            <a href="#">About Us</a>
          </li>
          <li className="text-xs my-2 mr-4 hover:text-gray300 text-center">
            <a href="#">Our Policy</a>
          </li>
        </ul>

        {/* Language & Currency Dropdowns */}
        <ul className="flex text-xs text-center gap-4 my-2">
          <li className="">
            <Menu>
              <MenuButton className="flex hover:text-gray300 cursor-pointer">
                {locale === "en" ? "Eng" : "frs"}
                <IoIosArrowDown className="mt-0.5 ml-1" />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-2 outline-none z-99"
              >
                <MenuItem>
                  <a
                    href=""
                    className="text-gray500 text-center focus:outline-none "
                  >
                    <p className="hover:bg-gray300 hover:text-white">English</p>
                    <p className="hover:bg-gray300 hover:text-white">Francis</p>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
          <li>
            <Menu>
              <MenuButton className="flex hover:text-gray300 cursor-pointer">
                {currency === "usd" ? "USD" : "PHP"}
                <IoIosArrowDown className="mt-0.5 ml-1" />
              </MenuButton>
              <MenuItems
                transition
                anchor="bottom end"
                className="flex flex-col w-20 right-0 absolute p-1 border border-gray200 bg-white mt-2 outline-none z-99"
              >
                <MenuItem>
                  <a
                    href=""
                    className="text-gray500 text-center focus:outline-none"
                  >
                    <p className="hover:bg-gray300 hover:text-white">USD</p>
                    <p className="hover:bg-gray300 hover:text-white">PHP</p>
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;
