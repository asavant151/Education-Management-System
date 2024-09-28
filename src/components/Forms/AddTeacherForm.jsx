import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTeacher } from '../../redux/slices/teacherSlice';
import { useNavigate } from 'react-router-dom';

const AddTeacherForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [assignedCourses, setAssignedCourses] = useState([{ title: '', startDate: '', endDate: '' }]);
  const navigate = useNavigate();

  const handleCourseChange = (index, field, value) => {
    const updatedCourses = [...assignedCourses];
    updatedCourses[index][field] = value;
    setAssignedCourses(updatedCourses);
  };

  const handleAddCourse = () => {
    setAssignedCourses([...assignedCourses, { title: '', startDate: '', endDate: '' }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTeacher({ name, assignedCourses }));
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

          {assignedCourses.map((course, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700">Course Title</label>
              <input
                type="text"
                value={course.title}
                onChange={(e) => handleCourseChange(index, 'title', e.target.value)}
                className="border rounded w-full py-2 px-3 mb-2"
                required
              />
              <label className="block text-gray-700">Start Date</label>
              <input
                type="date"
                value={course.startDate}
                onChange={(e) => handleCourseChange(index, 'startDate', e.target.value)}
                className="border rounded w-full py-2 px-3 mb-2"
                required
              />
              <label className="block text-gray-700">End Date</label>
              <input
                type="date"
                value={course.endDate}
                onChange={(e) => handleCourseChange(index, 'endDate', e.target.value)}
                className="border rounded w-full py-2 px-3"
                required
              />
            </div>
          ))}
          <button type="button" onClick={handleAddCourse} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 mb-4">Add Another Course</button>
          
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Teacher</button>
          <button type="button" onClick={() => navigate('/admin')} className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 ml-2">Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddTeacherForm;
