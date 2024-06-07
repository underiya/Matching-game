import { useEffect, useState } from "react";
import Card from "../components/Card";
import ProgressBar from "../components/Progressbar";
import Buttons from "../components/Button";
import BackBtn from "../components/BackBtn";
import { useNavigate } from "react-router-dom";

const Page5 = () => {
  const navigate = useNavigate();
  const [list1, setList1] = useState(["A", "B", "C", "M", "P", "O"]);
  const [list2, setList2] = useState([
    { image: "/apple.png", name: "Apple" },
    { image: "/banana.png", name: "Banana" },
    { image: "carrot.png", name: "Carrot" },
    { image: "/mango.png", name: "Mango" },
    { image: "/pineapple.png", name: "Pineapple" },
    { image: "/orange.png", name: "Orange" },
  ]);

  const [flippedCards, setFlippedCards] = useState([]);
  const [result, setResult] = useState(null);

  const [visibility, setVisibility] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
  ]);

  const updateVisibility = (index) => {
    setVisibility((prevArray) => {
      const newArray = [...prevArray]; // Create a shallow copy of the array
      newArray[index] = false; // Update the value at index 3
      return newArray; // Return the new array
    });
  };
  const [progress, setProgressBarValue] = useState(30);

  const handleProgressUpdate = () => {
    const val = Math.min(progress + 12, 100);
    setProgressBarValue(val);
  };

  const handleCardClick = (index) => {
    if (flippedCards.length < 2) {
      setFlippedCards((prev) => [...prev, index]);
    }
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstIndex, secondIndex] = flippedCards;
      const firstCharList1 = list1[firstIndex];
      const firstCharList2 = list2[secondIndex].name[0];

      if (firstCharList1 === firstCharList2) {
        setResult(true);
        handleProgressUpdate();
        updateVisibility(firstIndex);
      } else {
        setResult(false);
      }

      setTimeout(() => {
        setFlippedCards([]);
        setResult(null);
      }, 1000);
    }
  }, [flippedCards, list1, list2]);
  console.log(flippedCards);
  useEffect(() => {
    if (progress >= 100) {
      navigate("/page6");
    }
  }, [progress]);

  return (
    <>
      <BackBtn />
      <ProgressBar progress={progress} />
      {/* <Buttons onClick={handleBtn} buttonTxt={"NEXT"} /> */}
      <div className="flex justify-between px-16 pt-16">
        <div className=" grid grid-cols-3 gap-2">
          {list2.map((s, i) => {
            return (
              <Card
                fruit={s.image}
                key={i}
                bgcolor={"red"}
                flipped={flippedCards.includes(i)}
                onClick={handleCardClick}
                matched={flippedCards[0] == flippedCards[1]}
                index={i}
                show={visibility[i]}
              />
            );
          })}
        </div>
        <div className=" grid grid-cols-3 gap-2">
          {list1.map((s, i) => {
            return (
              <Card
                key={i}
                bgcolor={"#4BB1D3"}
                initialChar={s}
                flipped={flippedCards.includes(i)}
                onClick={handleCardClick}
                index={i}
                show={visibility[i]}
              />
            );
          })}
        </div>
      </div>
      {result ? (
        <div className=" text-center text-red-500 font-extrabold">
          CARD MATCHED !
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Page5;
