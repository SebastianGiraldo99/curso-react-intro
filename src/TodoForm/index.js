import React from "react";
import './TodoForm.css';
import { TodoContex } from "../TodoContex";

function TodoForm(){
    const [newTodo, setNewTodo] = React.useState('');
    const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContex);
    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodo);
        setOpenModal(false);
    };

    const onCancel =(event)=>{
        setOpenModal(false);
    };
    const onChange =(event)=>{
        setNewTodo(event.target.value)
    };

    return (
        <form className="form" onSubmit={onSubmit} >
            <div className="title">Write your new TODO!!</div>
            <textarea placeholder="Finish the app." value={newTodo} onChange={onChange} />
            <button type="submit" className="save-todo">Save</button>
            <button type="button" onClick={onCancel} className="close-form">Close</button>
            
        </form>

    )
}

export {TodoForm};