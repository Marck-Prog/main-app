import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyOrder from "./MyOrder";
import { useEffect } from "react";
import { logout } from "../redux/slices/authSlice";
import { clearCart } from "../redux/slices/cartSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="flex-grow container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
          {/* Left Section */}
          <div className="w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6 bg-gray100">
            <div className="flex gap-8 py-2">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                {user?.name}
              </h1>
              <div className="mt-2">
                {user && user.role === "admin" && (
                  <Link
                    to="/admin"
                    className="bg-gradient-to-br from-green-500 to-blue-600 hover:bg-gradient-to-bl transition-all duration-300 px-4 py-2 rounded-sm text-white"
                  >
                    ADMIN
                  </Link>
                )}
              </div>
            </div>
            <p className="text-lg text-gray600 mb-4">{user?.email}</p>
            <button
              onClick={handleLogout}
              className="w-full bg-gray900 cursor-pointer text-white py-2 px-4 rounded hover:bg-gray500"
            >
              Logout
            </button>
          </div>
          {/* Right Section: Orders table */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrder />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
