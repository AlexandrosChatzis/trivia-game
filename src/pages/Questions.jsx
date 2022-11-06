import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import Spinner from "../elements/Spinner";
import { decode } from "html-entities";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  handleScoreChange,
  handleCorrectAnswers,
} from "../redux/actions";
import Nav from "../elements/Nav";
import Error from "../elements/Error";

const randomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};
const Questions = () => {
  const navigate = useNavigate();

  const { score, username, topscorers, correctAnswers } = useSelector(
    (state) => state
  );
  if (!username) {
    navigate("/");
  }
  const dispatch = useDispatch();

  const { response, error, loading } = useAxios({
    requests: [
      "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple",
      "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple",
      "https://opentdb.com/api.php?amount=5&difficulty=hard&type=multiple",
    ],
  });

  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [timer, setTimer] = useState(10);
  const [startTimer, setStartTimer] = useState(false);

  useEffect(() => {
    if (response?.length) {
      const question = response[questionIndex];
      let answers = [...question.incorrect_answers];
      answers.splice(
        randomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setAnswers(answers);
    }
  }, [response, questionIndex]);

  useEffect(() => {
    if (!loading) {
      setStartTimer(true);
      setTimer(10);
    }
  }, [loading]);

  useEffect(() => {
    if (startTimer) {
      timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
    }
  }, [timer, startTimer]);
  
  if (loading) {
    return <Spinner />;
  }
  if (error) {
    return <Error />;
  }
  
  const handleAnswer = (e) => {
    setStartTimer(false);
    const timeNeeded = timer;
    var timerCountDom = document.querySelector(".timer-count");
    var timerNeededDom = document.querySelector(".timer-needed");

    timerCountDom.classList.toggle("d-none");
    timerNeededDom.classList.toggle("d-none");
    timerNeededDom.textContent = timeNeeded;

    var buttons = document.querySelectorAll(".question-answer");
    var buttonsArray = [...buttons];

    const question = response[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      e.target.classList.add("correct");

      setTimeout(() => {
        e.target.classList.remove("correct");
      }, 2000);
      switch (question.difficulty) {
        case "easy":
          var points = 15;
          break;
        case "medium":
          var points = 18;
          break;
        case "hard":
          var points = 25;
          break;
        default:
          break;
      }
      if (timeNeeded > 0) {
        var points = points * timeNeeded;
      }
      dispatch(
        handleCorrectAnswers([...correctAnswers, [question.difficulty, points]])
      );
      dispatch(handleScoreChange(score + points));
    } else {
      e.target.classList.add("wrong");

      buttonsArray.forEach((e) => {
        if (e.textContent === question.correct_answer) {
          e.classList.add("correct");
          setTimeout(() => {
            e.classList.remove("correct");
          }, 2000);
        }
      });
      setTimeout(() => {
        e.target.classList.remove("wrong");
      }, 2000);
    }

    // disable buttons after answer
    buttonsArray.forEach((e) => {
      e.disabled = true;

      setTimeout(() => {
        e.disabled = false;
      }, 2000);
    });

    setTimeout(() => {
      if (questionIndex + 1 < response.length) {
        setQuestionIndex(questionIndex + 1);
        setTimer(10);
        setStartTimer(true);
        timerCountDom.classList.toggle("d-none");
        timerNeededDom.classList.toggle("d-none");
      } else {
    
        navigate("/finalscore");
      }
    }, 2000);
  };

  return (
    <div className="trivia-box-outer">
      <div className="trivia-box">
        <div className="trivia-wrapper">
          <div className="question">
            <div className="question-timer">
              <span className="timer-wrapper">
                <div
                  style={{
                    backgroundColor:
                      timer > 7
                        ? "var(--green)"
                        : timer <= 7 && timer > 4
                        ? "var(--orange)"
                        : "var(--warning)",
                  }}
                  className="timer-circle"
                ></div>
                <span className="timer-count">{timer}</span>
                <span className="timer-needed d-none"></span>
              </span>
            </div>
            <h2 className="question-category">
              Category <span>{decode(response[questionIndex].category)}</span>
            </h2>
            <div className="question-index">
              Question Number {questionIndex + 1} of {response.length}
            </div>
            <div className="question-text">
              {decode(response[questionIndex].question)}
            </div>
            <div className="row gap-10">
              {answers.map((answer, id) => (
                <div className="col-md-12 col-6" key={id}>
                  <button
                    onClick={handleAnswer}
                    className="question-answer btn btn-full"
                  >
                    {decode(answer)}
                  </button>
                </div>
              ))}
            </div>
            <div className="total-score">Score: {score}</div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Questions;
