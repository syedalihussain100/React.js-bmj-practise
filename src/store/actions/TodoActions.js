import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./ActionType";

export const addtodo = (message) => ({
    type: ADD_TODO,
    message: message
})


export const deletetodo = (id) => ({
    type: DELETE_TODO,
    id: id
})


export const editdoto = ({ message, id, date }) => ({
    type: EDIT_TODO,
    message: message,
    id: id,
    date: date
})