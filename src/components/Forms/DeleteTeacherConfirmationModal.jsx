import React from 'react';
import { useDispatch } from 'react-redux';
import { removeAssignment } from '../../redux/slices/teacherSlice';

const DeleteTeacherConfirmationModal = ({ assignment, onClose }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeAssignment({ teacherId: assignment.teacherId, assignmentId: assignment.id }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-6">
        <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
        <p className="mb-6">Are you sure you want to delete the assignment "<span className="font-semibold">{assignment.title}</span>"?</p>
        <div className="flex justify-end">
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 mr-2"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteTeacherConfirmationModal;
