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
        assignedCourses: action.payload.assignedCourses.map(course => ({
          title: course.title,
          startDate: course.startDate,
          endDate: course.endDate,
        })),
        assignments: [],
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

    addAssignment: (state, action) => {
      const { teacherId, newAssignment } = action.payload;
      const teacher = state.teachers.find((t) => t.id.toString() === teacherId);
      if (teacher) {
        const assignmentWithId = { id: Date.now(), teacherId, ...newAssignment };
        teacher.assignments.push(assignmentWithId);
      }
    },

    updateAssignment: (state, action) => {
      const { teacherId, assignmentId, updatedAssignment } = action.payload;
      const teacher = state.teachers.find(t => t.id.toString() === teacherId);
      if (teacher) {
        const assignment = teacher.assignments.find(a => a.id === assignmentId);
        if (assignment) {
          assignment.title = updatedAssignment.title;
          assignment.dueDate = updatedAssignment.dueDate;
        }
      }
    },

    removeAssignment: (state, action) => {
      const { teacherId, assignmentId } = action.payload;
      const teacher = state.teachers.find((t) => t.id.toString() === teacherId);
      if (teacher) {
        teacher.assignments = teacher.assignments.filter(a => a.id !== assignmentId);
      }
    },
  },
});

export const { addTeacher, removeTeacher, updateTeacherCourses, addAssignment, updateAssignment, removeAssignment } = teacherSlice.actions;

export default teacherSlice.reducer;