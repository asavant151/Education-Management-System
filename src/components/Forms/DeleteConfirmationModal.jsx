import React from 'react';

const DeleteConfirmationModal = ({ course, onDelete, onClose }) => {
    console.log("course==>", course);
    
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-md w-full max-w-md">
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete the course: <strong>{course?.title}</strong>?</p>
        <div className="flex justify-end mt-4">
          <button type="button" onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2">Cancel</button>
          <button type="button" onClick={() => onDelete(course)} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
