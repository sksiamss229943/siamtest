import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";

function User() {
  const { name } = useParams();
  const location = useLocation();
  const navigate = useNavigate(); 
  return (
    <>
      <h3>Hello, {name}!</h3>
      {location.pathname === "/user/siam" && (
        <button
          onClick={() => {
            navigate('/', {replace: true})
          }}
          className="btn btn-primary"
        >
          Click Me
        </button>
      )}
    </>
  );
}

export default User;
