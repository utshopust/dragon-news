import React, { use, useState } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";
import { UserIcon } from "lucide-react";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => alert("Logout successfully"))
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full sticky top-0 z-50 bg-white shadow-sm ">
      {/* Main Container */}
      <div className="px-4 py-3 flex justify-between items-center">
        {/* User Email */}
        <div className="text-sm px-3 py-1 bg-gray-100 border border-gray-200 rounded-lg text-gray-700">
          {user && user.displayName}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/career"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                : "hover:text-blue-600 transition"
            }
          >
            Career
          </NavLink>
        </div>

        {/* Desktop Login / Logout */}
        <div className="hidden md:flex items-center gap-3">
          <img src={`${user? user.photoURL: UserIcon}`} alt="" className="w-8 h-8 rounded-full" />
          {user ? (
            <button onClick={handleLogOut} className="btn btn-primary px-10">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary px-10">
              Login
            </Link>
          )}
          
        </div>
        

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg
            className="w-7 h-7 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-4 pb-4 text-gray-700 font-medium">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
            }
          >
            About
          </NavLink>

          <NavLink
            to="/career"
            onClick={() => setOpen(false)}
            className={({ isActive }) =>
              isActive ? "text-blue-600 border-b-2 border-blue-600 pb-1" : ""
            }
          >
            Career
          </NavLink>

          <div className="flex items-center gap-3 mt-3">
            <img src={userIcon} className="w-8 h-8" />

            {user ? (
              <button onClick={handleLogOut} className="btn btn-primary px-10">
                Logout
              </button>
            ) : (
              <Link
                to="/auth/login"
                className="btn btn-primary px-10"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
