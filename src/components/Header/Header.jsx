import React, { useState } from "react";
import LogoImg from "../../../public/assets/images/education-management-system-high-resolution-logo-transparent.png";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogin = () => {
    const fakeUser = { name: "User" };
    dispatch(setUser(fakeUser));
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(clearUser());
  };

  return (
    <header className="bg-blue-500 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-blue-200">
          <img src={LogoImg} alt="logo" width={180} draggable="false" />
          </a>
        </div>

        <div className="hidden md:flex space-x-6 md:items-center">
          <a href="/admin" className="block text-white hover:text-blue-200">
            Admin
          </a>
          <a href="/teacher" className="block text-white hover:text-blue-200">
            Teacher
          </a>
          <a href="/student" className="block text-white hover:text-blue-200">
            Student
          </a>
          <a href="/create-course" className="hover:text-blue-200">
            Courses
          </a>
          {user ? (
            <button
              onClick={handleLogout}
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-red-500 transition duration-200"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className="bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-green-500 transition duration-200"
            >
              Login
            </button>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white hover:text-blue-200 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-500">
          <div className="space-y-4 px-4 py-4">
            <a href="/admin" className="block text-white hover:text-blue-200">
              Admin
            </a>
            <a href="/teacher" className="block text-white hover:text-blue-200">
              Teacher
            </a>
            <a href="/student" className="block text-white hover:text-blue-200">
              Student
            </a>
            <a
              href="/create-course"
              className="block text-white hover:text-blue-200"
            >
              Courses
            </a>
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-red-500 transition duration-200"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={handleLogin}
                className="bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-md hover:bg-green-500 transition duration-200"
              >
                Login
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
