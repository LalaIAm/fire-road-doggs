import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import SignUp from "./pages/Auth/SignUp";
import LogIn from "./pages/Auth/LogIn";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='auth/signup' element={<SignUp />} />
      <Route path='auth/login' element={<LogIn />} />
    </Routes>
  )
}

export default App