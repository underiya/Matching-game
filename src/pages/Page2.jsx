import Monkey from "../components/Monkey";
import Note from "../components/Note";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button className="" onClick={handleBack}>
        {" "}
        <img src="/back.png" alt="" />
      </button>

      <Monkey />
      <Note noteTitle={"Hi , I am Mizo ! \n and I love banana"} />
      <Buttons buttonTxt={"NEXT"} />
    </>
  );
};

export default Page2;
