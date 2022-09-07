import React from "react";

function Card({data}) {
  return (
    <>
      <div className="card shadow-sm" style={{ width: "18rem" }}>
        <img src={data.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title fw-bold">{data.title}</h5>
          <p className="card-text text-muted">{data.body}</p>
          <a href="#" className="btn btn-primary w-100">
            Read More
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;