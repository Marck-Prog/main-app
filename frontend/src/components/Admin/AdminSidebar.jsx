import {
  FaBoxOpen,
  FaClipboardList,
  FaSignOutAlt,
  FaStore,
  FaUser,
} from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { clearCart } from "../../redux/slices/cartSlice";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Panda
        </Link>
      </div>
      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2 ">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray300 text-gray500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray300 hover:bg-gray500 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUser />
          <span>Users</span>
        </NavLink>
        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray300 text-gray500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray300 hover:bg-gray500 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBoxOpen />
          <span>Products</span>
        </NavLink>
        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray300 text-gray500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray300 hover:bg-gray500 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaClipboardList />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray300 text-gray500 py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray300 hover:bg-gray500 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaStore />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="bg-gradient-to-br from-green-500 to-blue-600 hover:bg-gradient-to-bl transition-all duration-300 px-4 py-2 rounded-sm text-white font-semibold cursor-pointer w-full"
        >
          <span className="flex items-center justify-center gap-3">
            <FaSignOutAlt />
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
