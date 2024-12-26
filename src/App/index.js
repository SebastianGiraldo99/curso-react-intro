// import logo from './platzi.webp';

import { useLocalStorage } from './useLocalStorage';
import React from 'react';
import { AppUI } from './AppUI';

// const defaultTodos = [
//   {text : 'Madrugar', completed: true},
//   {text : 'Bañarse', completed: true},
//   {text : 'Trabajar', completed: false},
//   {text : 'Ir a cortarse el pelo', completed: false},
//   {text : 'Dormir', completed: false}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');


function App() {
  
  
  const {
    item : todos,
    saveItem : saveTodos,
    loading,
    error} = useLocalStorage('TODOS_V1', []);
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
      loading = {loading}
      error = {error}
     />
  );
  
}



export default App;
