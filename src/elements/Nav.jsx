import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const goHome = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const goLead = (e) => {
    e.preventDefault();
    navigate("/leaderboard");
  };
  return (
    <nav className="trivia-nav">
      {location.pathname !== "/" ? (
        <button onClick={goHome} className="home-icon"></button>
      ) : (
        ""
      )}
      <button onClick={goLead} className="leaderboard-icon"></button>
    </nav>
  );
};

export default Nav;
