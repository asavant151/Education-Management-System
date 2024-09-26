import React from 'react';

export const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

        {/* Enrolled Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Enrolled Courses</h2>
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Course Title</th>
                <th className="p-3 text-left">Start Date</th>
                <th className="p-3 text-left">End Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row */}
              <tr className="border-b">
                <td className="p-3">React Basics</td>
                <td className="p-3">01/10/2024</td>
                <td className="p-3">01/12/2024</td>
                <td className="p-3 text-right">
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">View Course</button>
                </td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>

        {/* Assignments Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Assignments</h2>
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Assignment Title</th>
                <th className="p-3 text-left">Due Date</th>
                <th className="p-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row */}
              <tr className="border-b">
                <td className="p-3">React Hooks Assignment</td>
                <td className="p-3">15/10/2024</td>
                <td className="p-3">Pending</td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>

        {/* Grades Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Grades</h2>
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Course Title</th>
                <th className="p-3 text-left">Grade</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row */}
              <tr className="border-b">
                <td className="p-3">React Basics</td>
                <td className="p-3">A</td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
