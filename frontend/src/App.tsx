import './App.css'
import LoginForm from './components/LoginForm'
import DashBoard from './components/DashBoard'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'
import SignupForm from './components/SignupForm'
function App() {
  return (
    <Routes>
      <Route path="/" element={<RequireAuth loginPath='/login'><DashBoard /></RequireAuth>} />
      <Route path="/login" element={<LoginForm />} />
      <Route path='/signup' element={<SignupForm />} />
    </Routes>
  )

}

export default App