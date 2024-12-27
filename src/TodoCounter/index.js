import React from 'react';
import './TodoCounter.css';
import { TodoContex } from '../TodoContex';
function TodoCounter(){
    const {totalTodos,
        completedTodos,} = React.useContext(TodoContex)

    return (
        totalTodos == completedTodos ? 
        <h1>
            Congrats you have completed all todos
        </h1> :
        <h1>
            You has been completed {completedTodos} of {totalTodos} task
        </h1>
    );
}

export {TodoCounter};