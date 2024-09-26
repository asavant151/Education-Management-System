import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addCourse } from "../../redux/slices/courseSlice";

export const CourseForm = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      startDate: "",
      endDate: "",
      assignedTeacher: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Course title is required"),
      description: Yup.string().required("Description is required"),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().required("End date is required"),
      assignedTeacher: Yup.string().required("Assign a teacher"),
    }),
    onSubmit: (values) => {
      const newCourse = { id: Date.now(), ...values };
      dispatch(addCourse(newCourse));
      formik.resetForm();
      console.log("Course Created: ", values);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-gray-700">
        Create New Course
      </h2>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-600">Title</label>
        <input
          type="text"
          name="title"
          onChange={formik.handleChange}
          value={formik.values.title}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.errors.title && (
          <div className="text-red-500 mt-1">{formik.errors.title}</div>
        )}
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-600">Description</label>
        <input
          type="text"
          name="description"
          onChange={formik.handleChange}
          value={formik.values.description}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.errors.description && (
          <div className="text-red-500 mt-1">{formik.errors.description}</div>
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <label className="mb-2 font-semibold text-gray-600">Start Date</label>
          <input
            type="date"
            name="startDate"
            onChange={formik.handleChange}
            value={formik.values.startDate}
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.startDate && (
            <div className="text-red-500 mt-1">{formik.errors.startDate}</div>
          )}
        </div>

        <div className="flex-1">
          <label className="mb-2 font-semibold text-gray-600">End Date</label>
          <input
            type="date"
            name="endDate"
            onChange={formik.handleChange}
            value={formik.values.endDate}
            className="border border-gray-300 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.errors.endDate && (
            <div className="text-red-500 mt-1">{formik.errors.endDate}</div>
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <label className="mb-2 font-semibold text-gray-600">
          Assigned Teacher
        </label>
        <input
          type="text"
          name="assignedTeacher"
          onChange={formik.handleChange}
          value={formik.values.assignedTeacher}
          className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {formik.errors.assignedTeacher && (
          <div className="text-red-500 mt-1">
            {formik.errors.assignedTeacher}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Create Course
      </button>
    </form>
  );
};
