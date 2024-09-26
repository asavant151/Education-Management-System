import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">MyEducationApp</h3>
            <p>Your trusted platform for online learning.</p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/admin" className="hover:text-gray-400">Admin</a></li>
              <li><a href="/teacher" className="hover:text-gray-400">Teacher</a></li>
              <li><a href="/students" className="hover:text-gray-400">Students</a></li>
              <li><a href="/create-course" className="hover:text-gray-400">Courses</a></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="space-x-4">
              <a href="#" className="hover:text-gray-400">Facebook</a>
              <a href="#" className="hover:text-gray-400">Twitter</a>
              <a href="#" className="hover:text-gray-400">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Education Management System. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
