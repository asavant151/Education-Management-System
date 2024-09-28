import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EditCourseForm from '../Forms/EditCourseForm';
import DeleteConfirmationModal from '../Forms/DeleteConfirmationModal';
import { deleteCourse } from '../../redux/slices/courseSlice';
import { removeTeacher } from '../../redux/slices/teacherSlice';
import { removeStudent } from '../../redux/slices/studentSlice';

export const AdminDashboard = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);
  const teachers = useSelector((state) => state.teachers.teachers);
  const students = useSelector((state) => state.students.students);
  const navigate = useNavigate();

  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [currentCourse, setCurrentCourse] = useState(null);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const handleEdit = (course) => {
    setCurrentCourse(course);
    setEditModalOpen(true);
  };

  const handleDelete = () => {
    dispatch(deleteCourse({ id: currentCourse.id }));
    setDeleteModalOpen(false);
  };

  const openDeleteModal = (course) => {
    setCurrentCourse(course);
    setDeleteModalOpen(true);
  };

  const courseNavigate = () => {
    navigate('/create-course');
  }

  const AddTeacherNavigate = () => {
    navigate('/add-teacher');
  }

  const viewTeacherDashboard = (teacherId) => {
    navigate(`/teacher/${teacherId}`);
  };

  const handleEnrollNavigate = () => {
    navigate('/enroll-student');
  };

  const handleRemoveTeacher = (id) => {
    dispatch(removeTeacher({ id }));
  };

  const handleRemoveStudent = (id) => {
    dispatch(removeStudent({ id }));
  };
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

        {/* Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Courses</h2>
          <button onClick={courseNavigate} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4">Create New Course</button>
          {courses.length === 0 ? (
            <p className="text-gray-500">No courses available.</p>
          ) : (
            <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left">Course Title</th>
                  <th className="p-3 text-left">Start Date</th>
                  <th className="p-3 text-left">End Date</th>
                  <th className="p-3 text-left">Assigned Teacher</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b">
                    <td className="p-3">{course.title}</td>
                    <td className="p-3">{new Date(course.startDate).toLocaleDateString()}</td>
                    <td className="p-3">{new Date(course.endDate).toLocaleDateString()}</td>
                    <td className="p-3">{course.assignedTeacher}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => handleEdit(course)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">Edit</button>
                      <button onClick={() => openDeleteModal(course)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {isEditModalOpen && (
          <EditCourseForm course={currentCourse} onClose={() => setEditModalOpen(false)} />
        )}

        {isDeleteModalOpen && (
          <DeleteConfirmationModal
            course={currentCourse}
            onDelete={handleDelete}
            onClose={() => setDeleteModalOpen(false)}
          />
        )}

        {/* Students Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Students</h2>
          <button onClick={handleEnrollNavigate} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4">Enroll New Student</button>
          {students.length === 0 ? (
            <p className="text-gray-500">No students enrolled.</p>
          ) : (
            <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left">Student Name</th>
                  <th className="p-3 text-left">Enrolled Courses</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b">
                    <td className="p-3">{student.name}</td>
                    <td className="p-3">{student.enrolledCourses.join(', ')}</td>
                    <td className="p-3 text-right">
                      <button className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">View</button>
                      <button onClick={() => handleRemoveStudent(student.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Teachers Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Manage Teachers</h2>
          <button onClick={AddTeacherNavigate} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4">Add New Teacher</button>
          {teachers.length === 0 ? (
            <p className="text-gray-500">No teachers found.</p>
          ) : (
            <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-3 text-left">Teacher Name</th>
                  <th className="p-3 text-left">Assigned Courses</th>
                  <th className="p-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{teacher.name}</td>
                    <td className="p-3">{teacher.assignedCourses.map(course => course.title).join(', ')}</td>
                    <td className="p-3 text-right">
                      <button onClick={() => viewTeacherDashboard(teacher.id)} className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2">View</button>
                      <button onClick={() => handleRemoveTeacher(teacher.id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};
