import { createSlice } from '@reduxjs/toolkit';

const studentSlice = createSlice({
  name: 'students',
  initialState: {
    students: [],
  },
  reducers: {
    addStudent: (state, action) => {
      state.students.push(action.payload);
    },
    removeStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload.id);
    },
  },
});

export const { addStudent, removeStudent } = studentSlice.actions;
export default studentSlice.reducer;
