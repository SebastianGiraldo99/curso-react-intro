import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import {TodoLoading} from '../TodosLoading';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoError } from '../TodosError';
import { EmptyTodo } from '../EmptyTodos';
import React from 'react';
import { Modal } from '../Modal';
import { TodoContex } from '../TodoContex';
import { TodoForm } from '../TodoForm';


function AppUI({
}){
  const {
    todoSearched,
    completeTodo,
    deleteTodo,
    loading,
    error,
    openModal,
    setOpenModal,
    } = React.useContext(TodoContex);
    return (
        <> {/*Empaquetador de componentes en react*/}
    
          <TodoCounter/> {/** Asi se envian las props.*/}
          <TodoSearch />
          {/*Otra forma de enviar props usando el contexto - Es mejor el useContext */}
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
            {openModal && (
              <Modal>
                <TodoForm/>
              </Modal>
            )}
          <CreateTodoButton 
          setOpenModal={setOpenModal}
          openModal={openModal}/>
          </>
    );
}
export {AppUI} ;