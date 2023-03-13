import React from "react";
import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <div>
      <ReactLoading type="spokes" color="#0000FF" height={100} width={50} />
    </div>
  );
};

export default LoadingPage;
