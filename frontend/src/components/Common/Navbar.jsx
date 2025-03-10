import { useCallback, useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import WhistlistIcon from "../../assets/icons/WhistlistIcon";
import Menu from "../../pages/Menu";
import CartDrawer from "../Layout/CartDrawer";
import AppHeader from "./AppHeader";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [scrolled, setScrolled] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const cartItemCount =
    cart?.products?.reduce((total, product) => total + product.quantity, 0) ||
    0;

  const handleScroll = useCallback(() => {
    const offset = window.scrollY;
    if (offset > 30) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }, [setScrolled]);

  useEffect(() => {
    setDidMount(true);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      setDidMount(false);
    };
  }, [handleScroll]);

  if (!didMount) {
    return null;
  }

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppHeader />
      <a
        href="#"
        className="whitespace-nowrap absolute z-50 left-4 opacity-90 rounded-md bg-white px-4 py-3 transform -translate-y-40 focus:translate-y-0 transition-all duration-300"
      >
        Skip to main content
      </a>
      {!scrolled && <TopNav />}

      <div>
        <div
          className={`${
            scrolled
              ? "bg-white sticky top-0 shadow-md mb-10 z-50 max-sm:h-16"
              : "bg-transparent"
          } w-full z-50 h-20 relative`}
        >
          <div className="app-max-width w-full z-50">
            <div className="flex justify-between px-14 max-sm:px-4">
              <nav className="container mx-auto flex items-center justify-between">
                {/* Hamburger Menu and Mobile Nav */}
                <div className="flex-1 lg:flex-0 lg:hidden">
                  <Menu />
                </div>

                {/* Left Nav */}
                <ul className="flex-0 lg:flex-1 flex ml-8 my-6 cursor-pointer">
                  {/* Center - Navigation Links */}
                  <li className="font-display mr-12 hidden lg:block whitespace-nowrap hover:text-gray500">
                    <Link to="/collections/all?gender=Men">Men</Link>
                  </li>
                  <li className="font-display mr-12 hidden lg:block whitespace-nowrap hover:text-gray500">
                    <Link to="/collections/all?gender=Women">Women</Link>
                  </li>
                  <li className="font-display mr-12 hidden lg:block whitespace-nowrap hover:text-gray500">
                    <Link to="/collections/all?category=Top Wear">
                      Accessories
                    </Link>
                  </li>
                  <li className="font-display mr-12 hidden lg:block whitespace-nowrap hover:text-gray500">
                    <Link to="/collections/all?category=Bottom Wear">
                      Threads
                    </Link>
                  </li>
                </ul>

                {/* Juan Logo */}
                <div className="flex-auto flex justify-center items-center hidden sm:flex">
                  <div className="w-86 h-auto">
                    <div>
                      <Link to="/">
                        <img
                          className="justify-center cursor-pointer "
                          src="/logo.svg"
                          alt="Picture of the author"
                          width={250}
                          height={80}
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right Nav */}
                <div className="flex lg:gap-10 items-center">
                  {/* Search */}
                  <div className="mr-4 max-sm:mt-2">
                    <SearchBar />
                  </div>

                  {user && user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="bg-gradient-to-br from-green-500 to-blue-600 hover:bg-gradient-to-bl transition-all duration-300 px-4 py-2 rounded-sm text-white font-semibold"
                    >
                      ADMIN
                    </Link>
                  )}
                  <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className="flex items-center gap-2 h-6 w-6 text-gray-700 hidden sm:block" />
                  </Link>

                  <button
                    type="button"
                    className="relative cursor-pointer hidden sm:block"
                    aria-label="Wishlist"
                    onClick={() => navigate("/wishlist")}
                  >
                    <WhistlistIcon className="" />
                  </button>

                  <button
                    onClick={toggleCartDrawer}
                    className="relative hover:text-black max-sm:mt-2"
                  >
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray500 cursor-pointer" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-2.5 bg-gray500 cursor-pointer text-white text-xs rounded-full px-[9px] py-1">
                        {cartItemCount}
                      </span>
                    )}
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <CartDrawer
            drawerOpen={drawerOpen}
            toggleCartDrawer={toggleCartDrawer}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
