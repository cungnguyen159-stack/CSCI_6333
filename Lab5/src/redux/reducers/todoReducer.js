import { ADD_TODO, DELETE_TODO } from "../actions/todoActions";

const initialState = {
    todos: [],
};

export default function todoReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO: {
            const newTodo = action.payload.text;
            return {
                ...state,
                todos: [...state.todos, newTodo],
            };
        }

        case DELETE_TODO: {
            const index = action.payload.index;
            return {
                ...state,
                todos: state.todos.filter((_, i) => i !== index),
            };
        }

        default:
            return state;
    }
}
