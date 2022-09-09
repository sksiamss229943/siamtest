import React from "react";
import { isMobile } from "react-device-detect";

function Search_result({name}) {
    let img = `https://source.unsplash.com/600x400/?${name}`
  return (
    <>
      <div className="w-100 text-center px-3">
        <img style={{width: (isMobile)?"100%":"auto"}} className="rounded mt-2 shadow" src={img} />
      </div>
    </>
  );
}

export default Search_result;