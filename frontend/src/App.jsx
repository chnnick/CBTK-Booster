import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import JoinSuccessPage from "../pages/JoinSuccessPage";

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/joined" element={<JoinSuccessPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </>
  )
}

export default App
