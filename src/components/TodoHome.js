import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addtodo } from "../store/actions/TodoActions";
import cuid from 'cuid';

function TodoHome() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addtodo({ message: input, id: cuid(), date: new Date().toLocaleTimeString() }));
        setInput(e.target.value = "")
    }
    return (
        <div className="container">
            <h1>Todo Application!</h1>
            <br />
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Create Todo</label>
                    <input type="text" name="todo" className="form-control" required placeholder="Enter Your Todo" value={input} onChange={(e) => setInput(e.target.value)
                    } />
                    <div id="text" className="form-text">Enter Your Todo</div>
                </div>
                <button type="submit" className="btn btn-primary">Submit Todo</button>
            </form>
        </div>
    )
}

export default TodoHome
