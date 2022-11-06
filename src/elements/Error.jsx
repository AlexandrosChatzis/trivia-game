import Nav from "./Nav";

const Error = () => {
  return (
    <div className="trivia-box-outer">
      <div className="trivia-box">
        <div className="trivia-wrapper">
            <h1 className="error-message">Something went wrong</h1>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Error;
