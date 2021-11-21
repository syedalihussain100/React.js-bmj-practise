import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../actions/ActionType";

const INITIAL_STATE = {
    todo: []
}


const gettodo = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.message]
            }
        case DELETE_TODO:
            return {
                ...state,
                todo: [...state.todo.filter((todo) => todo.id !== action.id)]
            }
        case EDIT_TODO:
            return {
                ...state,
                todo: [...state.todo.filter((todo) => todo.id !== action.id),
                { message: action.message, id: action.id, date: action.date }
                ]

            }
        default:
            return state
    }
}



export default gettodo;