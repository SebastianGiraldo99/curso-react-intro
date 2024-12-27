import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoLoading} from '../TodosLoading';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodosError';
import { EmptyTodo } from '../EmptyTodos';
import { TodoContex } from '../TodoContex';


function AppUI({
}){
    return (
        <> {/*Empaquetador de componentes en react*/}
    
          <TodoCounter/> {/** Asi se envian las props.*/}
          <TodoSearch />
          {/*Otra forma de enviar props usando el contexto - Es mejor el useContext */}
          <TodoContex.Consumer> 
            {({
              todoSearched,
              completeTodo,
              deleteTodo,
              loading,
              error,
            })=>(
              <TodoList>
              {loading && <TodoLoading/>} 
              {error && <TodoError/>} 
              {(!loading && todoSearched.length == 0) && <EmptyTodo/>}
              
              {todoSearched.map(todo => (
                <TodoItem key={todo.text} text={todo.text} completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}/>
              ))}
            </TodoList>
            )}
          </TodoContex.Consumer>
          <CreateTodoButton/>
          </>
    );
}
export {AppUI} ;