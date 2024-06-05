import React from "react";
import { useNavigate } from "react-router-dom";

const BackBtn = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <button className="" onClick={handleBack}>
        {" "}
        <img src="/back.png" className=" size-3/4" alt="" />
      </button>
    </div>
  );
};

export default BackBtn;
