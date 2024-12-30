import React from 'react';
import { TodoContex } from '../TodoContex';
import './CreateTodoButton.css';
function CreateTodoButton({openModal,setOpenModal}){
    return (
        /* From Uiverse.io by adamgiebl */ 
        <button className="cssbuttons-io-button" onClick={()=> {setOpenModal(state => !state)}}>
        <svg
            height="24"
            width="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z" fill="currentColor"></path>
        </svg>
        <span>
            {!openModal && <p>Add new TODO</p> }
            {openModal && <p>Close</p> }
         </span>
        </button>

    // <button onClick={(event)=> {
        
    // }}> + </button>
    );
}

export {CreateTodoButton};