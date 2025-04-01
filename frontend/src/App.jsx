import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import ExamResults from "./ExamResults";
import Dashboard from "./Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExamResults />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;