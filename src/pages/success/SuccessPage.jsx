import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Animatedimage from "../../components/AnimatedImage";
// import { OperationType } from "../../Constant/OperationType";

import "./Success.scss";

const SuccessPage = () => {
  // const operationType = useSelector(state => state.operation.type);

  return (
    <div className="container">
      <div className="success-container">
        <div className="success-wrapper m-auto text-center">
          <Animatedimage style={{ width: "20%" }} />
          {/* <img src="/assets/image/success.gif" style={{ width: "40%" }} /> */}
          <h2 className="fw-bolder">Transaction Successful ! </h2>
          <br />
          <p className="my-3">
            Your Ffight has been successfully booked. A notification has been
            sent to your inbox.{" "}
          </p>
          <hr />
          <br />
          <div className="d-lg-flex justify-content-around align-items-center">
            {/* <button
              className="btn-outline-search btn mb-3"
              download="Flight booking transaction details.pdf"
              href
            >
              Download Receipt
            </button> */}
            <Link to="/">
              <button
                className="btn-search mb-3"
                style={{ padding: ".35rem 3.5rem" }}
              >
                Continue
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
