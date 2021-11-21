import React, { useState, useRef } from 'react'
import { useDispatch } from "react-redux";
import { deletetodo } from "../store/actions/TodoActions";
import { editdoto } from "../store/actions/TodoActions";

function List({ elm }) {
    const dispatch = useDispatch();
    const [update, setUpdate] = useState(false);
    const Textref = useRef(null)
    console.log(elm);

    const handleEditSubmit = (e) => {
        e.preventDefault();
        dispatch(editdoto({ message: Textref.current.value, id: elm.id, date: new Date().toLocaleTimeString() }));
        setUpdate(false);
        Textref.current = null
    }

    const Input1 = () => {
        return (
            <form className="d-flex mb-3" onSubmit={handleEditSubmit}>
                <input type="text" className="form-control" required placeholder="Enter Your Todo" defaultValue={elm.message} ref={Textref} />
                <button type="submit" className="btn btn-warning btn-sm" style={{ margin: "0px 5px" }}>Update Todo</button>
            </form>
        )
    }

    const Input2 = () => {
        return (
            <div className="container d-flex justify-content-between align-items-center">
                <h4>{elm.message}</h4>
                <div className="mb-4 d-flex">
                    <button style={{ margin: '0px 15px' }} className="btn btn-danger btn-sm" onClick={() => dispatch(deletetodo(elm.id))}>Delete</button>
                    <button style={{ margin: '0px 15px' }} className="btn btn-warning btn-sm" onClick={() => setUpdate(true)}>Edit</button>
                    <p>Timing: <span className="text-primary">{elm.date}</span></p>
                </div>
            </div>
        )
    }
    return (
        <div>{update ? Input1() : Input2()}</div>
    )
}

export default List
