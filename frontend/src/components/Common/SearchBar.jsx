import React, { Fragment, useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
  useClose,
} from "@headlessui/react";
import {
  fetchProductsByFilters,
  setFilters,
} from "../../redux/slices/productSlice";
import Loading from "../../assets/icons/Loading";
import TextButton from "../../pages/TextButton";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [noResult, setNoResult] = useState(false);
  const [moreThanFour, setMoreThanFour] = useState(false);
  const [searchItems, setSearchItems] = useState([]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsFetching(true);

    dispatch(setFilters({ search: searchTerm }));
    const results = await dispatch(
      fetchProductsByFilters({ search: searchTerm })
    );

    setIsFetching(false);

    if (!results.payload || results.payload.length === 0) {
      setNoResult(true);
    } else {
      setSearchItems(results.payload);
      setMoreThanFour(results.payload.length > 4);
    }
    setSearchTerm("");
    navigate(`/collections/all?search=${searchTerm}`);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button onClick={handleSearchToggle} className="cursor-pointer">
        <HiMagnifyingGlass className="h-6 w-6 mt-1.5" />
      </button>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-y-auto"
          style={{ zIndex: 99999 }}
          static
          open={open}
          onClose={handleSearchToggle}
        >
          <div className="fixed inset-0 bg-gray500 opacity-50" />
          <div className="fixed inset-0 flex items-center justify-center">
            <TransitionChild
              enter="ease-out duration-500"
              enterFrom="-translate-y-40"
              enterTo="opacity-100 translate-y-0"
              leave="ease-in duration-500"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="-translate-y-90"
            >
              <DialogPanel className="fixed top-0 left-0 w-full h-1/2 bg-white shadow-xl transition-all">
                <div className="relative translate-y inline-block w-full pt-20 pb-12 overflow-hidden text-left align-middle transition-all transform">
                  <div className="app-width-full app-x-padding">
                    <div className="w-3/5 m-auto max-sm:w-full max-sm:px-4">
                      <div className="flex justify-end mb-8">
                        <button
                          type="button"
                          onClick={handleSearchToggle}
                          className="outline-none focus:outline-none text-2xl cursor-pointer"
                        >
                          &#10005;
                        </button>
                      </div>

                      <form
                        onSubmit={handleSearch}
                        className="mt-2 flex items-center"
                      >
                        {isFetching ? (
                          <Loading />
                        ) : (
                          <HiMagnifyingGlass size="24px" color="gray" />
                        )}
                        <input
                          type="search"
                          placeholder="Search Juan Tshirt..."
                          value={searchTerm}
                          onChange={(e) => {
                            setSearchTerm(e.target.value);
                            setNoResult(false);
                            setMoreThanFour(false);
                          }}
                          className="px-4 py-2 w-full focus:outline-none text-2xl"
                        />
                      </form>
                      <div className="border-t-2 border-gray300"></div>
                      <div className="flex justify-center mt-8 text-[20px] max-sm:text-[20px] max-sm:w-full ">
                        <Link
                          to="/collections/all"
                          onClick={() => setIsOpen(false)}
                        >
                          <TextButton value="View All" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default SearchBar;
