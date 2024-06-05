const Buttons = ({ buttonTxt, onClick }) => {
  return (
    <div className="fixed bottom-[10%] right-[10%] w-[200px] h-[60px] hover:scale-10">
      {/* <div className="fixed bottom-[10%] right-[10%] p-1 rounded-2xl bg-[#FFD540]  hover:scale-10"> */}
      {/* <div className=" p-0  rounded-2xl bg-[#e8b90e]"> */}
      <button
        onClick={onClick}
        className="fixed bottom-[10%] z-10 right-[10%] w-[200px] h-[60px] size-80  text-3xl font-bold  text-white  rounded "
      >
        {buttonTxt}
        <img
          src="/button.png"
          className="relative -top-[48px] -right-3 -z-10"
          alt=""
        />
      </button>
 
    </div>
  );
};

export default Buttons;
