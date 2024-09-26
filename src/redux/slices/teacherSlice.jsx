import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teachers: [],
};

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      const newTeacher = {
        id: Date.now(), 
        name: action.payload.name,
        assignedCourses: action.payload.assignedCourses,
      };
      state.teachers.push(newTeacher);
    },

    removeTeacher: (state, action) => {
      state.teachers = state.teachers.filter(teacher => teacher.id !== action.payload.id);
    },

    updateTeacherCourses: (state, action) => {
      const { id, assignedCourses } = action.payload;
      const teacher = state.teachers.find(teacher => teacher.id === id);
      if (teacher) {
        teacher.assignedCourses = assignedCourses;
      }
    },
  },
});

export const { addTeacher, removeTeacher, updateTeacherCourses } = teacherSlice.actions;

export default teacherSlice.reducer;
