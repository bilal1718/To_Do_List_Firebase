import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../reduxState/actions";
import Nav from "./Nav";
import "../Styles/form.scss";
import { Link, Navigate } from "react-router-dom";

const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState({ name: "", completed: false });

  const handleSubmit = () => {
    addTodo(todo);
    setTodo({ name: "", completed: false });
    <Navigate to="/" />;
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="form-container">
          <div className="form-header">Create Task</div>
          <div>
            <input
              type="text"
              placeholder="Enter todo"
              value={todo.name}
              onChange={(e) => setTodo({ ...todo, name: e.target.value })}
              className="input-field"
            />
          </div>
          <div className="btn-container">
            <Link to="/">
              <button type="submit" className="btn" onClick={handleSubmit}>
                Create
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  addTodo,
};

export default connect(null, mapDispatchToProps)(CreateTodo);
