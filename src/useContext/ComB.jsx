import React, { useContext } from "react";
import { Full_name } from "../App";

function ComB() {
  const { f_name, l_name } = useContext(Full_name);
  return (
    <>
      <h1>
        {f_name} {l_name}
      </h1>
    </>
  );
}

export default ComB;
