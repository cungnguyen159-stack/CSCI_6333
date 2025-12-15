export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: text,
});

export const deleteTodo = (index) => ({
  type: "DELETE_TODO",
  payload: index,
});

export const completeTodo = (index) => ({
  type: "COMPLETE_TODO",
  payload: index,
});
