import React from "react";
import { setActiveTab } from "../redux/features/searchSlich";
import { useDispatch, useSelector } from "react-redux";

const Tabs = () => {
  const tabs = ["photo", "videos", "gif"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);



  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (elem, idx) {
        return (
       
          <button
            key={idx}
            className={`${(activeTab==elem?"bg-emerald-600":"bg-gray-600")} cursor-pointer active:scale-95  px-5 py-2 rounded uppercase text-white`}
            onClick={()=>{
                dispatch(setActiveTab(elem))
            }}
          >
            {elem}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
