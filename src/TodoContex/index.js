import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContex = React.createContext();
function TodoProvider({children}){
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
        <TodoContex.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            todoSearched,
            completeTodo,
            deleteTodo,
            loading,
            error,
        }}>
            {children}

        </TodoContex.Provider>
    );
}
export {TodoContex, TodoProvider}