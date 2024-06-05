import React from "react";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";
import Monkey from "../components/Monkey";
import Note from "../components/Note";
import ProgressBar from "../components/Progressbar";
import BackBtn from "../components/BackBtn";

const Page3 = () => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/page4");
  };
  return (
    <>
      <BackBtn />
      <ProgressBar />
      <Monkey />
      <Note noteTitle={"Can you help me get \n some ? 🤔"} />
      <Buttons onClick={handleBtn} buttonTxt={"YES"} />
    </>
  );
};

export default Page3;
