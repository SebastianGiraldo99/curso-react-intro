// import logo from './platzi.webp';

import { useLocalStorage } from './unseLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';


function App() {
  
  
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTodos = todos.filter(todo=> !!todo.completed).length;
  const totalTodos = todos.length;
  const todoSearched = todos.filter((todo)=>{
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });
  
  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=>todo.text === text);
    newTodos[todoIndex].completed == true ? newTodos[todoIndex].completed = false : newTodos[todoIndex].completed = true ;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo)=>todo.text === text);
    if(newTodos[todoIndex].completed){
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    }
    
  }
  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      todoSearched={todoSearched}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
     />
  );
  
}



export default App;
