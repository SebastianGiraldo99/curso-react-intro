import './CreateTodoButton.css';
function CreateTodoButton(){
    return (
        /* From Uiverse.io by adamgiebl */ 
        <button className="cssbuttons-io-button">
        <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
        </svg>
        <span>Add new TODO</span>
        </button>

    // <button onClick={(event)=> {
        
    // }}> + </button>
    );
}

export {CreateTodoButton};