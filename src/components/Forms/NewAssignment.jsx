import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addAssignment } from '../../redux/slices/teacherSlice';

const NewAssignment = () => {
  const { teacherId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const teacher = useSelector((state) =>
    state.teachers.teachers.find((t) => t.id.toString() === teacherId)
  );

  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newAssignment = {
      title,
      dueDate,
    };

    // Dispatch the action to add the assignment
    dispatch(addAssignment({ teacherId, newAssignment }));
    navigate(`/teachers/${teacherId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">New Assignment for {teacher?.name}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Assignment Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Due Date</label>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
            >
              Add Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewAssignment;
