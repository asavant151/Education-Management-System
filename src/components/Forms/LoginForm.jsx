import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useAuth } from "../../context/AuthProvider";

export const LoginForm = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters long")
        .required("Password is required"),
    }),
    onSubmit: (values) => {
      const userRole =
        values.email === "admin@example.com"
          ? "Admin"
          : values.email === "teacher@example.com"
          ? "Teacher"
          : values.email === "student@example.com"
          ? "Student"
          : "";

      if (userRole) {
        const userData = { email: values.email, role: userRole };
        setUser(userData);
        navigate(`/${userRole.toLowerCase()}`);
      } else {
        alert("User not recognized");
      }
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={`mt-1 p-3 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                formik.errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
            />
            {formik.errors.email ? (
              <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
            ) : null}
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={`mt-1 p-3 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                formik.errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
            />
            {formik.errors.password ? (
              <p className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            <a href="#" className="text-indigo-600 hover:underline">
              Forgot Password?
            </a>
          </p>
          <div className="flex items-center flex-col">
          <p className="text-sm text-gray-600 mt-4">
            Admin :- admin@example.com
          </p>
          <p className="text-sm text-gray-600 mt-3">
            Teacher :- teacher@example.com
          </p>
          <p className="text-sm text-gray-600 mt-3 mb-4">
          Student :- student@example.com
          </p>
          </div>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="#" className="text-indigo-600 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
