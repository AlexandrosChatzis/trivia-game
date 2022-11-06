import Nav from "./Nav";

const Spinner = () => {
  return (
    <div className="trivia-box-outer">
      <div className="trivia-box">
        <div className="trivia-wrapper">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};

export default Spinner;
