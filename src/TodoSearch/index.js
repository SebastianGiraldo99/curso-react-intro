import React from "react";
import './TodoSearch.css';
import { TodoContex } from "../TodoContex";
function TodoSearch(){

    const {searchValue,setSearchValue }=React.useContext(TodoContex); //uso de Contex para acceder a las props generales
    //Se debe definir el nombre del estado 
    //Se debe definir el nombre de la funcion Set siempre con el nombre del estado
    //Dentro de la funcion useState() se pude definir un estado inicial;
    // const [searchValue, setSearchValue] = React.useState('');
    return (
    //    

       <div className="containerSearch">
        {/* <input checked="" className="checkbox" type="checkbox"/>  */}
            <div className="mainbox">
                <div className="iconContainer">
                    <svg viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="search_icon"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg>
                </div>
            {/* <input className="search_input" placeholder="Find something" type="text"/> */}
            <input className="search_input" onChange={(event)=>{
                setSearchValue(event.target.value);
                }} placeholder="Find something"
                value={searchValue}/>
            </div>
        </div>
       
    );
    
}

export {TodoSearch};