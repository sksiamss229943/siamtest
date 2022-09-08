import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const data = await res.json();
    setData(data.statewise);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>State</th>
            <th>Confirmed</th>
            <th>Recovered</th>
            <th>Deaths</th>
            <th>Actives</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e,index) => (
            <tr key={index}>
              <td>{e.state}</td>
              <td>{e.confirmed}</td>
              <td>{e.recovered}</td>
              <td>{e.deaths}</td>
              <td>{e.active}</td>
              <td>{e.lastupdatedtime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
