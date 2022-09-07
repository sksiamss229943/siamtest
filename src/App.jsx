import React, { useState } from "react";

function App() {
  const [inputData, setInputData] = useState("");
  const [data, setData] = useState([]);
  const [isFill, setIsFill] = useState(false);
  return (
    <>
      <div className="container mt-2 d-flex flex-column align-items-center">
        <h4 className="my-3">Enter your tasks: </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-100 d-flex flex-column align-items-center"
        >
          <input
            type="text"
            onChange={(e) => {
              setInputData(e.target.value);
            }}
            value={inputData}
            className="form-control w-75 shadow-sm"
            placeholder="Tasks goes here..."
          />
          <input
            type="submit"
            value="SUBMIT"
            className="btn fw-bold btn-primary w-75 my-3 shadow-sm"
            onClick={() => {
              if (inputData == "") {
                return;
              } else {
                setData([inputData, ...data]);
                setInputData("");
                setIsFill(true);
              }
            }}
          />
          <hr />
          <div className="todos w-75">
            {!isFill && (
              <h5 className="bg-light fw-bold text-center p-3 px-4 rounded shadow-sm">
                Please add some todos...
              </h5>
            )}
            {data.map((e, i) => (
              <h5 key={i} className="bg-light p-3 my-3 px-4 rounded shadow-sm">
                {e}
              </h5>
            ))}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;