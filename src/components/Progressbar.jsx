import { useState } from "react";

const ProgressBar = () => {
  const [progressBarValue, setProgressBarValue] = useState(30); // Initial progress value (optional default to 0)

  const handleProgressUpdate = () => {
    // Update progress value (logic depends on your application)
    const val = Math.min(progressBarValue + 10, 100);
    console.log("clicked", val);
    setProgressBarValue(val); // Increase by 10%, capped at 100
  };

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
