import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../../redux/slices/studentSlice';
import { useNavigate } from 'react-router-dom';

const EnrollStudentForm = () => {
  const [studentName, setStudentName] = useState('');
  const [enrolledCourses, setEnrolledCourses] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addStudent({ id: Date.now(), name: studentName, enrolledCourses: enrolledCourses.split(', ') }));
    setStudentName('');
    setEnrolledCourses('');
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6">Enroll New Student</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
              Student Name
            </label>
            <input
              type="text"
              id="studentName"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Enter student name"
            />
          </div>

          <div>
            <label htmlFor="enrolledCourses" className="block text-sm font-medium text-gray-700">
              Enrolled Courses (comma separated)
            </label>
            <input
              type="text"
              id="enrolledCourses"
              value={enrolledCourses}
              onChange={(e) => setEnrolledCourses(e.target.value)}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="e.g., Math, Science, History"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Enroll Student
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollStudentForm;
