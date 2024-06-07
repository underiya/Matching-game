import { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [progressBarValue, setProgressBarValue] = useState(progress || 30);
  useEffect(() => {
    setProgressBarValue(progress);
  }, [progress]);

  return (
    <>
      <div className="bg-white  fixed left-48 top-10 h-5 w-[70%] ">
        <div
          className={`bg-yellow-300 h-full  striped-background `}
          style={{ width: `${progressBarValue}%` }}
        >
          {/* <img
            className=" w-20  -rotate-[20deg]  relative  -right-[190%] -top-[205%]"
            src="/banana.png"
            alt="banana"
          /> */}
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
