import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Nav from "../elements/Nav";

const FinalScore = () => {
  const navigate = useNavigate();

  const { correctAnswers } = useSelector(
    (state) => state
  );
  const handleClick = () => {
    navigate("/leaderboard");
  };

  const filterEasy = correctAnswers.filter((answer) => {
    return answer[0] === "easy";
  });

  const filterMedium = correctAnswers.filter((answer) => {
    return answer[0] === "medium";
  });
  const filterHard = correctAnswers.filter((answer) => {
    return answer[0] === "hard";
  });
  var pointsEasy = 0;
  var pointsMedium = 0;
  var pointsHard = 0;
  filterEasy.forEach((item) => {
    pointsEasy = pointsEasy + item[1];
  });
  filterMedium.forEach((item) => {
    pointsMedium = pointsMedium + item[1];
  });
  filterHard.forEach((item) => {
    pointsHard = pointsHard + item[1];
  });

  return (
    <div className="trivia-box-outer">
      <div className="trivia-box">
        <div className="trivia-wrapper">
          <h1>Congratulations</h1>
          <div className="final-score">
            <ul className="final-score-correct-answers">
              {filterEasy.length > 0 ? (
                <li>
                  <span className="difficulty-total-answers">
                    {filterEasy.length}{" "}
                    <div className="difficulty-name">Easy:</div>
                  </span>

                  <span className="difficulty-total-score"> {pointsEasy} </span>
                </li>
              ) : (
                ""
              )}
              {filterMedium.length > 0 ? (
                <li>
                  <span className="difficulty-total-answers">
                    {filterMedium.length}{" "}
                    <div className="difficulty-name">Medium:</div>{" "}
                  </span>

                  <span className="difficulty-total-score">
                    {" "}
                    {pointsMedium}{" "}
                  </span>
                </li>
              ) : (
                ""
              )}{" "}
              {filterHard.length > 0 ? (
                <li>
                  <span className="difficulty-total-answers">
                    {filterHard.length}{" "}
                    <div className="difficulty-name">Hard:</div>
                  </span>

                  <span className="difficulty-total-score"> {pointsHard} </span>
                </li>
              ) : (
                ""
              )}
            </ul>
            <div className="final-score-total">
              Total Score{" "}
              <strong>{pointsEasy + pointsMedium + pointsHard}</strong>
            </div>
          </div>
          <button className="mt-20 btn btn--red" onClick={handleClick}>
            Check Leaderboard
          </button>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default FinalScore;
