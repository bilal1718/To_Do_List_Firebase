const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todos: [...state.todos, action.payload] };
    case "UPDATE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, name: action.payload.newTodo }
            : todo
        ),
      };
    case "TOGGLE_TODO":
      return {
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case "FETCH_TODOS":
      return { todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
