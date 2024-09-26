import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  courses: [],
};

const courseSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(course => course.id !== action.payload.id);
    },
    updateCourse: (state, action) => {
      const index = state.courses.findIndex(course => course.id === action.payload.id);
      if (index !== -1) {
        state.courses[index] = action.payload;
      }
    },
  },
});

export const { addCourse, deleteCourse, updateCourse } = courseSlice.actions;
export default courseSlice.reducer;
