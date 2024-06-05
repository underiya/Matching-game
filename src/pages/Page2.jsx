import Monkey from "../components/Monkey";
import Note from "../components/Note";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";
import BackBtn from "../components/BackBtn";

const Page2 = () => {
  const navigate = useNavigate();

  const handleBtn = () => {
    navigate("/page3");
  };
  return (
    <>
      <BackBtn />
      <Monkey />
      <Note noteTitle={"Hi , I am Mizo ! \n and I love banana"} />
      <Buttons onClick={handleBtn} buttonTxt={"NEXT"} />
    </>
  );
};

export default Page2;
