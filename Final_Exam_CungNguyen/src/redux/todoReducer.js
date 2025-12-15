const initialState = {
  todos: [],
  completed: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, action.payload] };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        completed: [...state.completed, state.todos[action.payload]],
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    default:
      return state;
  }
}
