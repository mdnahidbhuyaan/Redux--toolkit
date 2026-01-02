import React from "react";
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
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }} className="flex p-10 gap-5 bg-indigo-400">
        <input
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
        }}
        required
          className="w-full px-4 py-2 text-xl rounded-full outline-none border-gray-300 border-2"
          type="text"
          placeholder="Search Anything..."
        />
        <button className="active:scale-95 text-white  bg-cyan-400 cursor-pointer px-4 py-2 text-xl rounded-lg outline-none border-gray-300 border-2">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
