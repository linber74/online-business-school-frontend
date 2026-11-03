import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import StudentInfo from './pages/StudentInfo'
import ProtecteRoute from './components/ProdecteRoute'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <ProtecteRoute>
              <Dashboard />
            </ProtecteRoute>
          }
        />
        <Route
          path="/student-info"
          element={
            <ProtecteRoute>
              <StudentInfo />
            </ProtecteRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App
