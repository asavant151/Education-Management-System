import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { AdminDashboard } from "./components/Dashboards/AdminDashboard";
import { TeacherDashboard } from "./components/Dashboards/TeacherDashboard";
import { StudentDashboard } from "./components/Dashboards/StudentDashboard";
import { CourseForm } from "./components/Forms/CourseForm";
import { useAuth } from "./context/AuthProvider";
import { LoginForm } from "./components/Forms/LoginForm";
import Layout from "./components/Layout/Layout";
import AddTeacherForm from "./components/Forms/AddTeacherForm";
import EnrollStudentForm from "./components/Forms/EnrollStudentForm";

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { user } = useAuth();
  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/login" />;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Layout />}>
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/teacher"
            element={
              <ProtectedRoute allowedRoles={["Teacher"]}>
                <TeacherDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/student"
            element={
              <ProtectedRoute allowedRoles={["Student"]}>
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/create-course"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <CourseForm />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-teacher"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <AddTeacherForm />
              </ProtectedRoute>
            }
          />

<Route
            path="/enroll-student"
            element={
              <ProtectedRoute allowedRoles={["Admin"]}>
                <EnrollStudentForm />
              </ProtectedRoute>
            }
          />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
