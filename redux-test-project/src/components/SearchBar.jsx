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
      }} className="flex p-6 gap-5 px-10 shadow-2xl ">
        <input
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
        }}
        required
          className="w-full px-4 py-2 text-xl rounded-full outline-none bg-gray-950 text-white "
          type="text"
          placeholder="Search Anything..."
        />
        <button className="cursor-pointer active:scale-95  px-4 py-2 text-xl rounded-sm outline-none bg-cyan-600 text-white shadow-2xl">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
