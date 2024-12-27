// import logo from './platzi.webp';

import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContex';
function App() {
  
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
    // <AppUI
    //   // totalTodos={totalTodos}
    //   // completedTodos={completedTodos}
    //   // searchValue={searchValue}
    //   // setSearchValue={setSearchValue}
    //   // todoSearched={todoSearched}
    //   // completeTodo={completeTodo}
    //   // deleteTodo={deleteTodo}
    //   // loading = {loading}
    //   // error = {error}
    //  />
  );
  
}



export default App;
