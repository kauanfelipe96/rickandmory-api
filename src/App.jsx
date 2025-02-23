import { Routes, Route } from "react-router";
import Login from './pages/Login.jsx'
import Home from './pages/Home.jsx'
import NewUser from "./pages/NewUser.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/novaconta" element={<NewUser />} />
      </Routes>
    </>
  )
}

export default App
