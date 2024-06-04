import Monkey from "../components/Monkey";
import Note from "../components/Note";
import Buttons from "../components/Button";
import { useNavigate } from "react-router-dom";

const Page1 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/next");
  };
  return (
    <>
      <Monkey />
      <Note noteTitle={"Welcome Kiddo !"} />
      <Buttons onClick={handleClick} buttonTxt={"START"} />
    </>
  );
};

export default Page1;
