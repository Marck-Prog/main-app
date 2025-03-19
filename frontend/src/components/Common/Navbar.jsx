import { useCallback, useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { HiOutlineUser } from "react-icons/hi2";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { mainCategory } from "../../data/category/mainCategory";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import WhistlistIcon from "../../assets/icons/WhistlistIcon";
import Menu from "../../pages/Menu";
import CartDrawer from "../Layout/CartDrawer";
import AppHeader from "./AppHeader";
import SearchBar from "./SearchBar";
import TopNav from "./TopNav";
import CategorySheet from "./CategorySheet";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [scrolled, setScrolled] = useState(false);
  const [didMount, setDidMount] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("men");
  const [showCategorySheet, setShowCategorySheet] = useState(false);
  const navigate = useNavigate();
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
              ? "bg-white sticky top-0 shadow-md mb-10 z-50"
              : showCategorySheet
              ? "bg-white duration-500"
              : "bg-white/20 backdrop-blur-none"
          } w-full z-50 relative`}
        >
          <div className="app-max-width w-full z-50">
            <div className="flex justify-between lg:px-14 max-sm:px-3 max-lg:px-10">
              <nav className="flex w-full items-center justify-between">
                {/* Hamburger Menu and Mobile Nav */}
                <div className="flex lg:flex-0 lg:hidden py-4">
                  <Menu />
                  <button
                    type="button"
                    className="relative cursor-pointer xs:ml-4 xs:mb-1"
                    aria-label="Wishlist"
                    onClick={() => navigate("#")}
                  >
                    <WhistlistIcon className="" />
                  </button>
                </div>
                <div className="xs:ml-3 md:max-xl:ml-10">
                  <Link to="/" className="">
                    <img
                      src="/logo.svg"
                      alt="Logo"
                      className="md:hidden"
                      width={150}
                      height={70}
                    />
                  </Link>
                </div>

                {/* Juan Logo */}
                <div className="flex-auto flex justify-center items-center hidden sm:flex md:max-xl:ml-24">
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

                {/* Left Nav */}
                <ul className="flex-0 lg:flex-1 flex my-6 cursor-pointer">
                  {/* Home Link */}
                  <li className="font-display mr-12 hidden lg:block whitespace-nowrap hover:text-gray-400">
                    <Link to="/">Home</Link>
                  </li>
                  {/* Center - Navigation Links */}
                  {mainCategory.map((item) => (
                    <li
                      key={item.categoryId}
                      onMouseEnter={() => {
                        setShowCategorySheet(true);
                        setSelectedCategory(item.categoryId);
                      }}
                      onMouseLeave={() => {
                        // setShowCategorySheet(false);
                      }}
                      className="font-display mr-12 hidden lg:block whitespace-nowrap hover:text-gray-400 group"
                    >
                      <Link to={item.link}>{item.name}</Link>
                      <ArrowDropUpIcon className="transition-transform duration-1000 ease-in-out transform rotate-180 group-hover:rotate-0 inline-block" />
                    </li>
                  ))}
                </ul>

                {/* Right Nav */}
                <div className="flex lg:gap-10 items-center">
                  {/* Search */}
                  <div className="md:max-xl:mr-6">
                    <SearchBar />
                  </div>

                  <Link to="/profile" className="hover:text-gray900">
                    <HiOutlineUser className="flex items-center gap-2 h-6 w-6 md:max-xl:mr-6 text-gray900 sm:block  xs:max-md:hidden" />
                  </Link>

                  <button
                    type="button"
                    className="relative cursor-pointer hidden sm:block md:max-xl:hidden"
                    aria-label="Wishlist"
                    onClick={() => navigate("#")}
                  >
                    <WhistlistIcon className="" />
                  </button>

                  <button
                    onClick={toggleCartDrawer}
                    className="relative hover:text-gray900"
                  >
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray500 cursor-pointer max-sm:ml-3" />
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

          {showCategorySheet && (
            <div
              onMouseEnter={() => setShowCategorySheet(true)}
              onMouseLeave={() => setShowCategorySheet(false)}
              className="categorySheet absolute top-[4.41rem] left-0 right-0"
            >
              <CategorySheet selectedCategory={selectedCategory} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
