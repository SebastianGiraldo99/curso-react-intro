import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoLoading} from '../TodosLoading';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodosError';
import { EmptyTodo } from '../EmptyTodos';
function AppUI({
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    todoSearched,
    completeTodo,
    deleteTodo,
    loading,
    error,
}){
    return (
        <> {/*Empaquetador de componentes en react*/}
    
          <TodoCounter total={totalTodos} completed={completedTodos} /> {/** Asi se envian las props.*/}
          <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
          />
    
          <TodoList>
            {loading && <TodoLoading/>} 
            {error && <TodoError/>} 
            {(!loading && todoSearched.lenght == 0) && <EmptyTodo/>}
            
            {todoSearched.map(todo => (
              <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}/>
            ))}
          </TodoList>
    
          <CreateTodoButton/>
          </>
    );
}
export {AppUI} ;