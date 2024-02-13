import {
  collection,
  addDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase.js";
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const addTodo = (todo) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "todos"), {
      name: todo.name,
      completed: false,
    });
    dispatch({
      type: ADD_TODO,
      payload: { id: docRef.id, ...todo },
    });
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const updateTodo = (id, newTodo) => async (dispatch) => {
  try {
    const docRef = doc(db, "todos", id);
    await updateDoc(docRef, { name: newTodo });
    dispatch({
      type: UPDATE_TODO,
      payload: { id, newTodo },
    });
  } catch (e) {
    console.error("Error updating document: ", e);
  }
};

export const toggleTodo = (id, completed) => async (dispatch) => {
  try {
    const docRef = doc(db, "todos", id);
    await updateDoc(docRef, { completed: !completed });
    dispatch({
      type: TOGGLE_TODO,
      payload: { id, completed: !completed },
    });
  } catch (e) {
    console.error("Error toggling completed status: ", e);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "todos", id));
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (e) {
    console.error("Error deleting document: ", e);
  }
};

export const fetchTodos = () => async (dispatch) => {
  try {
    const querySnapshot = await getDocs(collection(db, "todos"));
    const todos = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    dispatch({
      type: FETCH_TODOS,
      payload: todos,
    });
  } catch (e) {
    console.error("Error fetching todos: ", e);
  }
};
