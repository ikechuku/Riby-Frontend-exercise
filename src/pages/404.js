import React from "react";
import { Link, useHistory } from "react-router-dom";
// import "./style.scss";

const App = () => {
  let history = useHistory();
  return (
    <div>
      {/* <LogoWithLabel /> */}
      <div className=" mt-10 w-full  ">
        <h1 className=" font-bold text-6xl lg:text-8xl text-gray-300 text-center pt-8 mb-0 ">
          404
        </h1>
        <div className="face">
          <div className="band">
            <div className="red"></div>
            <div className="white"></div>
            <div className="blue"></div>
          </div>
          <div className="eyes"></div>
          <div className="dimples"></div>
          <div className="mouth"></div>
        </div>

        <h1 className="font-bold text-gray-400 text-4xl text-center mt-8 my-5">
          Oops! Page Not Found
        </h1>
        <div className="text-center py-12 font-sans">
          <Link className="btn" to="/">
            Home
          </Link>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <Link>
            <span className="btn" onClick={() => history.goBack()}>
              Go Back
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
