import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteTodo, updateTodo, toggleTodo } from "../reduxState/actions";
import Nav from "./Nav";
import { connect } from "react-redux";
import { fetchTodos } from "../reduxState/actions";
import "../Styles/alltodo.scss";

const AllTodos = ({ todos, deleteTodo, toggleTodo, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <>
      <Nav />
      <div className="container">
        <div className="frame">
          <table className="table">
            <thead>
              <tr>
                <th>Task</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todoItem, i) => (
                <tr key={i}>
                  <td>{todoItem.name}</td>
                  <td>{todoItem.completed.toString()}</td>
                  <td>
                    <Link to={`/delete/${todoItem.id}`}>
                      <button
                        onClick={() => deleteTodo(todoItem.id)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </Link>
                    <Link to={`/update/${todoItem.id}`}>
                      <button className="update-btn">Update</button>
                    </Link>
                    <button
                      className="toggle"
                      onClick={() =>
                        toggleTodo(todoItem.id, todoItem.completed)
                      }
                    >
                      Change Status
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
  updateText: state.updateText,
});

const mapDispatchToProps = {
  deleteTodo,
  updateTodo,
  toggleTodo,
  fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(AllTodos);
