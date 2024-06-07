import React from "react";
import ProgressBar from "../components/Progressbar";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";
import Monkey from "../components/Monkey";
import Note from "../components/Note";
import BackBtn from "../components/BackBtn";

const Page4 = () => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/page5");
  };
  return (
    <>
      <BackBtn />
      <ProgressBar />

      <Buttons buttonTxt={"PLAY"} onClick={handleBtn} />
    </>
  );
};

export default Page4;
