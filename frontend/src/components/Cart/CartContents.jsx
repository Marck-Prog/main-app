import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slices/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  // Handle adding or subtracting to cart
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <div>
      {cart.products.map((product, index) => (
        <div
          key={product.productId}
          className="flex items-start justify-between py-4 px-4 border-b border-gray300"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover"
            />
            <div className="midPart mx-4 flex-grow">
              <h3 className="break-words">{product.name}</h3>
              <p className="text-sm text-gray500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center gap-4 mt-4">
                {/* Quantity Controller */}
                <div className="plusOrMinus w-[100px] flex-shrink-0 flex border border-gray300 divide-x-2 divide-gray300">
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        -1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                  >
                    -
                  </button>
                  <span className="h-full w-12 flex justify-center items-center pointer-events-none">
                    {product.quantity}
                  </span>
                  <button
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className="h-full w-12 flex justify-center items-center cursor-pointer hover:bg-gray500 hover:text-gray100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button
              onClick={() =>
                handleRemoveFromCart(
                  product.productId,
                  product.size,
                  product.color
                )
              }
            >
              <RiDeleteBin3Line className="h-6 w-6 mt-2 max-sm:mt-0 cursor-pointer hover:text-red duration-300" />
            </button>
            <p className="mt-6 max-sm:mt-14">
              {/* $ {product.price * product.quantity.toLocaleString()} */}$
              {Number(
                (product.price * product.quantity).toFixed(2)
              ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContents;
