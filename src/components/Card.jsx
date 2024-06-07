import { useState } from "react";

const Card = ({
  fruit,
  bgcolor,
  initialChar,
  flipped,
  onClick,
  index,
  show,
}) => {
  const [color, setColor] = useState(bgcolor || "red");
  const [disabled, setDisable] = useState(false);
  const [flip, setFlip] = useState(!flipped);

  const handleFlip = () => {
    setFlip(!flip);
    onClick(index);
  };

  return (
    <div
      className={`w-32 h-48  opacity-75 rounded-lg overflow-hidden relative`}
      style={{
        backgroundColor: color,
        visibility: !show ? "hidden" : "visible",
      }}
      onClick={handleFlip}
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {flip ? (
          <div className="heart before:bg-red-700 after:bg-red-700"></div>
        ) : color == "red" ? (
          <img src={fruit} alt="" />
        ) : (
          <div className=" font-bold text-white">{initialChar}</div>
        )}
      </div>
    </div>
  );
};

export default Card;
