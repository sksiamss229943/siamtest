import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [num, setNum] = useState(1);
  const [name, setName] = useState();
  const [moves, setMoves] = useState();
  useEffect(() => {
    async function getData() {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
      setName(res.data.name)
      setMoves(res.data.moves.length)
    }
    getData();
  },[num]);
  return (
    <>
      <h2>
        You choose <span className="fw-bold">{num}</span> value
      </h2>
      <h2>My name is {name}</h2>
      <h2>I have {moves} moves</h2>
      <select value={num} onChange={(e) => setNum(e.target.value)}>
        <option value="1">1</option>
        <option value="25">
          25
        </option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </>
  );
}

export default App;
