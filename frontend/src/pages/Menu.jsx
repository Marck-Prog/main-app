import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { IoMdMenu } from "react-icons/io";
import { IoIosArrowDown, IoLogoInstagram } from "react-icons/io";
import {
  RiFacebookBoxFill,
  RiFacebookBoxLine,
  RiFacebookFill,
  RiTwitterXLine,
} from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Menu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const closeModal = () => {
    setOpen(false);
  };

  const openModal = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    navigate(`/search?q=${searchValue}`);
  };

  return (
    <>
      <div className="relative flex justify-between sm:justify-start items-center w-full">
        <button
          type="button"
          onClick={openModal}
          className="focus:outline-none"
        >
          <IoMdMenu className="h-7 w-7 mb-1 text-gray500 cursor-pointer" />
        </button>
      </div>

      <Transition show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={closeModal}
        >
          <div className="min-h-screen">
            <TransitionChild as={Fragment}>
              <DialogPanel className="fixed inset-0 bg-gray500 opacity-50" />
            </TransitionChild>
            <TransitionChild
              as={Fragment}
              enter="ease-linear duration-600"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-linear duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative opacity-95 overflow-y-auto inline-block h-screen w-full max-w-md bg-white shadow-xl">
                <div className="flex justify-between items-center p-6 pb-0">
                  <div className="cursor-pointer" onClick={() => navigate("/")}>
                    <img src="/logo.svg" alt="Logo" width={150} height={70} />
                  </div>
                  <button
                    type="button"
                    className="text-3xl sm:text-2xl"
                    onClick={closeModal}
                  >
                    &#10005;
                  </button>
                </div>

                <div className="my-6 px-6 flex flex-col">
                  <div
                    className="w-full text-xl py-2 hover:bg-gray100 cursor-pointer"
                    onClick={() => {
                      closeModal();
                      navigate("/collections/all?gender=Men");
                    }}
                  >
                    Menu
                  </div>
                  <div
                    className="w-full text-xl py-2 hover:bg-gray100 cursor-pointer"
                    onClick={() => {
                      closeModal();
                      navigate("/collections/all?gender=Women");
                    }}
                  >
                    Women
                  </div>
                  <div
                    className="w-full text-xl py-2 hover:bg-gray100 cursor-pointer"
                    onClick={() => {
                      closeModal();
                      navigate("/collections/all?category=Top Wear");
                    }}
                  >
                    Accessories
                  </div>
                  <div
                    className="w-full text-xl py-2 hover:bg-gray100 cursor-pointer"
                    onClick={() => {
                      closeModal();
                      navigate("/collections/all?category=Bottom Wear");
                    }}
                  >
                    Threads
                  </div>

                  <hr className="border border-gray300 w-full mt-2" />
                  <div className="w-full text-xl py-2 my-3 flex justify-between hover:bg-gray100 cursor-pointer">
                    <button onClick={() => navigate("/login")}>Login</button>
                  </div>
                  <hr className="border border-gray300 w-full" />
                  <div
                    className="text-xl py-2 my-3 w-full flex justify-between cursor-pointer"
                    onClick={() => navigate("/wishlist")}
                  >
                    <span>Wishlist</span>
                    <div className="relative">
                      {/* <WhistlistIcon /> */}wishlist
                      <span className="absolute text-xs -top-0 -left-7 bg-red text-gray100 py-1 px-2 rounded-full">
                        3
                      </span>
                    </div>
                  </div>
                  <hr className="border border-gray300 w-full" />

                  <div className="flex my-10 space-x-6 justify-center">
                    <a
                      href="#"
                      className="text-gray400 flex justify-center rounded-md active:bg-gray300"
                      aria-label="Facebook"
                    >
                      <TbBrandMeta />
                    </a>
                    <a
                      href="#"
                      className="text-gray400 flex justify-center rounded-md active:bg-gray300"
                      aria-label="Facebook"
                    >
                      <IoLogoInstagram />
                    </a>
                    <a
                      href="#"
                      className="text-gray400 flex justify-center rounded-md active:bg-gray300"
                      aria-label="Instagram"
                    >
                      <RiTwitterXLine />
                    </a>
                  </div>
                </div>
              </div>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Menu;
