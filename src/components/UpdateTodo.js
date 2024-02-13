import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { updateTodo } from "../reduxState/actions";
import "../Styles/form.scss";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const UpdateTodo = ({ updateTodo }) => {
  const { id } = useParams();
  const [updateText, setUpdateText] = useState("");

  const handleUpdate = () => {
    updateTodo(id, updateText);
  };

  return (
    <>
      <Nav />
      <div className="container">
        <div className="form-container">
          <div className="form-header">Update Task</div>
          <div>
            <input
              type="text"
              placeholder="Enter todo"
              value={updateText}
              onChange={(e) => setUpdateText(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="btn-container">
            <Link to="/">
              <button type="submit" className="btn" onClick={handleUpdate}>
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  updateTodo,
};

export default connect(null, mapDispatchToProps)(UpdateTodo);
