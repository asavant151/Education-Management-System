import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import EditAssignmentForm from "../Forms/EditAssignmentForm";
import DeleteTeacherConfirmationModal from "../Forms/DeleteTeacherConfirmationModal";

export const TeacherDashboard = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [assignmentToDelete, setAssignmentToDelete] = useState(null);

  const { teacherId } = useParams();
  const navigate = useNavigate();
  const teacher = useSelector((state) =>
    state.teachers.teachers.find((t) => t.id.toString() === teacherId)
  );

  const handleEditAssignmentClick = (assignment) => {
    console.log("assignment===>", assignment);
    
    setIsEditModalOpen(true);
    setSelectedAssignment(assignment);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedAssignment(null);
  };

  const handleDeleteAssignmentClick = (assignment) => {
    setAssignmentToDelete(assignment);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setAssignmentToDelete(null);
  };

  const handleUploadAssignmentClick = () => {
    navigate(`/teachers/${teacherId}/new-assignment`);
  };

  if (!teacher) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6">Teacher Dashboard</h1>
          <p className="text-red-500">
            Teacher not found. Please check the ID or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">
          Teacher Dashboard - {teacher.name}
        </h1>

        {/* Courses Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Assigned Courses</h2>
          {teacher.assignedCourses.length > 0 ? (
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
                {teacher.assignedCourses.map((course, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{course.title}</td>
                    <td className="p-3">{course.startDate || "N/A"}</td>
                    <td className="p-3">{course.endDate || "N/A"}</td>
                    <td className="p-3 text-right">
                      <button className="bg-indigo-600 text-white px-3 py-1 rounded-md hover:bg-indigo-700">
                        Manage Content
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-gray-500">No courses assigned yet.</p>
          )}
        </div>

        {isEditModalOpen && (
          <EditAssignmentForm
            assignment={selectedAssignment}
            onClose={handleCloseEditModal}
          />
        )}

        {/* Delete Confirmation Modal */}
        {isDeleteModalOpen && (
          <DeleteTeacherConfirmationModal
            assignment={assignmentToDelete}
            onClose={handleCloseDeleteModal}
          />
        )}

        {/* Assignments Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Upload Assignments</h2>
          <button
            onClick={handleUploadAssignmentClick}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 mb-4"
          >
            Upload New Assignment
          </button>
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-50">
                <th className="p-3 text-left">Assignment Title</th>
                <th className="p-3 text-left">Due Date</th>
                <th className="p-3 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {teacher.assignments && teacher.assignments.length > 0 ? (
                teacher?.assignments?.map((assignment, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{assignment.title}</td>
                    <td className="p-3">{assignment.dueDate}</td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => handleEditAssignmentClick(assignment)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 mr-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteAssignmentClick(assignment)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-3 text-center text-gray-500">
                    No assignments available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
