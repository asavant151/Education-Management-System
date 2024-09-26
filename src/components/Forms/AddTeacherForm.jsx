import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeacher } from '../../redux/slices/teacherSlice';
import { useNavigate } from 'react-router-dom';

const AddTeacherForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [assignedCourses, setAssignedCourses] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTeacher({ name, assignedCourses: assignedCourses.split(',').map(course => course.trim()) }));
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
    <div className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4">Add New Teacher</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Teacher Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Assigned Courses (comma separated)</label>
          <input
            type="text"
            value={assignedCourses}
            onChange={(e) => setAssignedCourses(e.target.value)}
            className="border rounded w-full py-2 px-3"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Teacher</button>
        <button type="button" onClick={() => navigate('/admin')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 ml-2">Cancel</button>
      </form>
    </div>
  </div>
  );
};

export default AddTeacherForm;
