import './TodoCounter.css';
function TodoCounter({total, completed}){  // Las props son recibidas como objeto
    return (
        total == completed ? 
        <h1>
            Congrats you have completed all todos
        </h1> :
        <h1>
            You has been completed {completed} of {total} task
        </h1>
    );
}

export {TodoCounter};