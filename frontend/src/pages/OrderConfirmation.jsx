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
        <p className="text-gray500 text-2xl">No order found.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-gray900 mt-10 text-white cursor-pointer px-6 py-3 rounded-lg text-md font-medium tracking-wide hover:bg-gray-800 transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  // Clear the cart when the order is confirmed
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart"); // Move inside the if block
    } else {
      navigate("/my-orders");
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
      <h1 className="text-4xl font-bold text-center text-green tracking-wide">
        Order Confirmed 🎉
      </h1>
      <p className="text-center text-gray500 mt-2">
        Thanks for shopping with us. Your order is on the way!
      </p>

      <div className="mt-8 border border-gray200 shadow-md p-6 rounded-xl">
        {/* Order Details */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Order ID:{" "}
              <span className="text-gray-600">{checkout?.id || "N/A"}</span>
            </h2>
            <p className="text-sm text-gray500">
              Ordered on:{" "}
              {checkout?.createdAt
                ? new Date(checkout.createdAt).toLocaleDateString()
                : "N/A"}
            </p>
          </div>
          <p className="text-sm text-gray500 font-medium">
            Estimated Delivery:{" "}
            <span className="text-green-600">
              {calculateEstimatedDelivery(checkout?.createdAt)}
            </span>
          </p>
        </div>

        {/* Ordered Items */}
        <div className="divide-y divide-gray300 border-b border-t border-gray300">
          {checkout?.checkoutItems?.map((item) => (
            <div
              key={item.productId}
              className="flex items-center py-4 hover:bg-gray-50 transition-all duration-300 px-4"
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
                <p className="text-sm text-gray500">
                  {item.color} | {item.size}
                </p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold text-gray-900">
                  $ {item.price.toFixed(2)}
                </p>
                <p className="text-sm text-gray500">Qty: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment & Shipping Info */}
        <div className="mt-8 flex justify-between gap-6 ">
          {/* Payment Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">Payment</h4>
            <p className="text-gray500 mt-1">PayPal</p>
          </div>

          {/* Delivery Section */}
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-gray-800">
              Shipping Address
            </h4>
            <p className="text-gray500 mt-1">
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
            className="bg-gray900 text-white cursor-pointer px-6 py-3 rounded-lg text-sm font-medium tracking-wide hover:bg-gray-800 transition-all"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;
