import { useSelector } from "react-redux";
import Nav from "../elements/Nav";

const LeaderBoard = () => {

  const { topscorers } = useSelector((state) => state);

  topscorers.sort((a, b) => (a.points < b.points ? 1 : -1));
  const slicedArray = topscorers.slice(0, 5);
    
  return (
    <div className="trivia-box-outer">
      <div className="trivia-box">
        <div className="trivia-wrapper">
          <h1>Top Scorers</h1>
          <ul className="trivia-list top-scores">
            {slicedArray.map((user) => (
              <li key={user.username + user.points} className="top-score-item">
                <span className="top-score-item-username">
                  {user.username}:
                </span>
                <span className="top-score-item-points">{user.points}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default LeaderBoard;
