const Note = ({ noteTitle }) => {
  return (
    <div className="">
      <img
        src="/note.png"
        alt=""
        className="fixed top-[10%] left-[50%] size-2/6"
      />
      <div className=" text-[#11AEC6] text-3xl font-bold fixed top-[18%] left-[55%]">
        <pre>{noteTitle}</pre>
      </div>
    </div>
  );
};

export default Note;
