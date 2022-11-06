import Welcome from "./pages/Welcome";
import Questions from "./pages/Questions";
import FinalScore from "./pages/FinalScore";
import LeaderBoard from "./pages/LeaderBoard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/finalscore" element={<FinalScore />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
