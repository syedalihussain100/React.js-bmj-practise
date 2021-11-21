import React from 'react'
import { useSelector } from "react-redux";
import List from './List';

function TodoList() {
    const tododata = useSelector((state) => state.TodoReducer.todo);
    console.log(tododata)
    return (
        <div className="container">
            <div className="d-flex justify-content-between mt-5">
                <h1>Todo here</h1>
                <h3>Todo Items: {tododata.length > 0 ? tododata.length : "Please Create Todo!"}</h3>
            </div>
            <hr />
            {tododata.map((elm) => {
                return <List elm={elm} key={elm.id} />
            })}
        </div>
    )
}

export default TodoList
