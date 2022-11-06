import Nav from "../elements/Nav";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { handleUsernameChange } from "../redux/actions";

const Welcome = () => {
  const { username } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(handleUsernameChange(""));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim().length > 0) {
      navigate("/questions");
    } else {
      alert("Please fill up username to continue.");
    }
  };

  return (
    <div className="trivia-box-outer">
      <div className="trivia-box">
        <div className="trivia-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="welcome-screen">
              <h1 className="welcome-screen-title">Welcome to Trivia World</h1>
              <div className="welcome-screen-text">
                The rules are very straight forward.
              </div>
              <div className="welcome-screen-rules">
                <span className="welcome-screen-rules-head">Answer the</span>
                <ul className="welcome-screen-rules-list trivia-list">
                  <li>questions</li>
                  <li>questions correctly</li>
                  <li>questions fast</li>
                </ul>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  onChange={(e) =>
                    dispatch(handleUsernameChange(e.target.value))
                  }
                />
              </div>
              <button className="welcome-screen-btn btn btn-red" type="submit">
                Start
              </button>
            </div>
          </form>
        </div>
      </div>

      <Nav />
    </div>
  );
};

export default Welcome;
