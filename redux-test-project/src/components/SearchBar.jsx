import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlich";
const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();


  const submitHandler = (e)=>{
    e.preventDefault();
    dispatch(setQuery(text))
    setText("");
  }
  return (

    
    <div className="">
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex p-6 gap-5 bg-zinc-950 shadow-lg px-10 ">
        <input
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
        }}
        required
          className="w-full px-4 py-2 text-xl rounded-full outline-none border-gray-300 border-2 text-white"
          type="text"
          placeholder="Search Anything..."
        />
        <button className="active:scale-95 text-white  bg-cyan-400 cursor-pointer px-4 py-2 text-xl rounded-sm outline-none">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
