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
            🟣 Worldwide shipping! 🌏{" "}
            <span className="hidden md:block">
              60-day free returns Pay later with Afterpay or Klarna 🟣 💸
              Made-to-order
            </span>
            sustainably 🟣
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
