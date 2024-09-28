import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateAssignment } from '../../redux/slices/teacherSlice';

const EditAssignmentForm = ({ assignment, onClose }) => {
    console.log("assignment-2======>", assignment);
    
  const dispatch = useDispatch();
  const [title, setTitle] = useState(assignment.title);
  const [dueDate, setDueDate] = useState(assignment.dueDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAssignment({ teacherId: assignment.teacherId, assignmentId: assignment.id, updatedAssignment: { title, dueDate } }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Edit Assignment</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Assignment Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Assignment Title"
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dueDate" className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              id="dueDate"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-200"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditAssignmentForm;
