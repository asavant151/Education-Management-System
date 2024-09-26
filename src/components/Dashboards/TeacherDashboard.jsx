import React from 'react';

export const TeacherDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>

        {/* Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Assigned Courses</h2>
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
                  <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">Manage Content</button>
                </td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>

        {/* Assignments Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Assignments</h2>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4">Upload New Assignment</button>
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Assignment Title</th>
                <th className="p-3 text-left">Due Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Sample row */}
              <tr className="border-b">
                <td className="p-3">React Hooks Assignment</td>
                <td className="p-3">15/10/2024</td>
                <td className="p-3 text-right">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                </td>
              </tr>
              {/* Add more rows */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
