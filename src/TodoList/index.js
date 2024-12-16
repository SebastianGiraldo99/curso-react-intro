function TodoList({children}){
    //Children guarda todos los elementos que hayan entre las etiquetas de apertura 
    //y cierre de la etiqueta
    return (
       <ul>
            {children}
       </ul>
       
    );
}

export {TodoList};