import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
const DeleteTodo = () => {
  return (
    <div>
      <Nav />
      <h1>Task- Successfully Deleted</h1>
      <Link to="/">
        {" "}
        <button>Go back to main page</button>
      </Link>
    </div>
  );
};

export default DeleteTodo;
