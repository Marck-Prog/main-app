import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const userId = user ? user._id : null;

  const handleCheckout = () => {
    toggleCartDrawer();
    if (!user) {
      navigate("/login?redirect=checkout");
    } else {
      navigate("/checkout");
    }
  };

  return (
    <>
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-gray400 opacity-50 z-40"
          onClick={toggleCartDrawer}
        />
      )}

      <div
        className={`fixed top-0 right-0 w-3/4 max-sm:w-full md:w-[30rem] h-full min-h-screen bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
          drawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart contents with scrollable area */}
        <div
          style={{ height: "100vh" }}
          className="overflow-y-auto relative inline-block h-screen w-full text-left align-middle transition-all transform"
        >
          <div className="bg-lightgreen flex justify-between items-center p-4">
            <h3 className="text-xl">Your Cart</h3>
            {/* Close Button */}
            <div className="flex justify-end max-sm:p-0">
              <button
                type="button"
                className="outline-none focus:outline-none text-3xl sm:text-2xl cursor-pointer"
                onClick={toggleCartDrawer}
              >
                &#10005;
              </button>
            </div>
          </div>
          {cart && cart?.products?.length > 0 ? (
            <CartContents cart={cart} userId={userId} guestId={guestId} />
          ) : (
            <div className="">
              <img
                src="/bg-img/empty-cart.webp"
                className="p-20 max-sm:p-10"
                alt="Empty Cart"
              />
            </div>
          )}
        </div>

        {/* Checkout button fixed at the bottom */}
        <div className="btnContainer mt-4 px-4 w-full flex flex-col">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{cart.totalPrice?.toFixed(2)}</span>
          </div>
          {(cart && cart?.products?.length > 0 && (
            <>
              <button
                onClick={handleCheckout}
                className="w-full bg-gray900 text-white py-3 rounded-sm font-semibold hover:bg-gray500 transition cursor-pointer"
              >
                Checkout
              </button>
            </>
          )) || (
            <Link to="/collections/all">
              <button
                onClick={toggleCartDrawer}
                className="w-full bg-gray900 text-white py-3 rounded-sm font-semibold hover:bg-gray500 transition cursor-pointer"
              >
                Go to Shop
              </button>
            </Link>
          )}
          <p className="text-sm tracking-tighter text-gray500 mt-2 text-center">
            Shipping, taxes, and discount codes calculated at checkout.
          </p>
        </div>
      </div>
    </>
  );
};
export default CartDrawer;
