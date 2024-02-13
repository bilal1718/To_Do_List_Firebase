import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { connect } from "react-redux";
import {
  addTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
} from "./reduxState/actions";
import CreateTodo from "./components/CreateTodo";
import AllTodos from "./components/Alltodos";
import UpdateTodo from "./components/UpdateTodo";
import DeleteTodo from "./components/DeleteTodo";

function App({ todos, addTodo, updateTodo, toggleTodo, deleteTodo }) {
  return (
    <Router>
      <Routes>
        <Route path="/update/:id" element={<UpdateTodo />} />
        <Route path="/delete/:id" element={<DeleteTodo />} />
        <Route path="/create" element={<CreateTodo addTodo={addTodo} />} />
        <Route
          index
          element={
            <AllTodos
              todos={todos}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              toggleTodo={toggleTodo}
            />
          }
        />
      </Routes>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  updateTodo,
  toggleTodo,
  deleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
