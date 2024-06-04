const Note = ({ noteTitle }) => {
  return (
    <div className="">
      <img src="/note.png" alt="" className="fixed top-[5%] left-[50%]" />
      <div className=" text-[#11AEC6] text-4xl font-bold fixed top-[15%] left-[60%]">
        <pre>{noteTitle}</pre>
      </div>
    </div>
  );
};

export default Note;
