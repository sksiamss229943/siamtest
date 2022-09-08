import React, { useState } from "react";
import Tasks from "./components/Tasks";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [data, setData] = useState([]);
  const onDelete = (e) => {
    setData((oldData) => {
      return oldData.filter((c,i)=>{
        return i!==e;
      })
    });
  };
  return (
    <>
      <div className="w-100 bg-warning py-4 mb-4 text-center text-white shadow">
        <h3>SiamKeep</h3>
      </div>
      <form
        className="w-100 text-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          className="form-control title w-50 mx-auto my-2 shadow-sm"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <input
          className="form-control w-50 mx-auto my-2 shadow-sm"
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />
        <input
          type="submit"
          className="w-50 btn my-2 btn-warning shadow-sm text-white fw-bold"
          onClick={() => {
            if (title == "" && desc == "") {
              return;
            } else {
              setData([{ title: title, desc: desc }, ...data]);
              setTitle("");
              setDesc("");
              document.querySelector(".title").focus();
            }
          }}
        />
      </form>
      <div className="container w-100 p-4 mt-2">
        <div className="row">
          {!data == [] &&
            data.map((e, ind) => (
              <Tasks key={ind} deleteItem={onDelete} id={ind} data={e} />
            ))}
        </div>
      </div>
    </>
  );
}

export default App;