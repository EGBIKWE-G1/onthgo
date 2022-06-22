import React from "react";
import "./Loading.scss";

const Loading = ({ loading }) => {
  console.log('Hi I am loading bae')
  return (
    <>
      <div
        className={`loader-container ${!loading && 'hide'}`}

      >
        <div
          className="loader"
          style={{
            position: "fixed",
            left: "0px",
            top: " 0px",
            zIndex: "1065",
            width: " 100%",
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
            outline: 0,
          }}
        >
          <div className="loadingio-spinner-dual-ball-mtrnm0x4lpn">
            <div className="ldio-eu7ctsizb44">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Loading;