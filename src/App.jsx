import React from "react";
import data from "./apis/data";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="m-3">
        <div className="row">
          {data.map((e) => (
            <>
              <div className="col-3 my-3">
                <Card data={e} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;