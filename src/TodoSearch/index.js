import React from "react";
function TodoSearch({searchValue, setSearchValue}){
    //Se debe definir el nombre del estado 
    //Se debe definir el nombre de la funcion Set siempre con el nombre del estado
    //Dentro de la funcion useState() se pude definir un estado inicial;
    // const [searchValue, setSearchValue] = React.useState('');
    return (
       <input onChange={(event)=>{
        setSearchValue(event.target.value);
       }} placeholder="Find something"
       value={searchValue}/>
       
    );
}

export {TodoSearch};