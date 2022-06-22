import React from "react";
import Lottie from "react-lottie";
import * as success from "../success.json";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: success.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Animatedimage() {
  return (
    <>
      <Lottie options={defaultOptions} height={150} width={150} />
    </>
  );
}

export default Animatedimage;
