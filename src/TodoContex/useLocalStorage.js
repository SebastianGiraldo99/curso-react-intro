import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);


    React.useEffect(()=>{

      setTimeout(()=>{
        try{
          let localStorageItems = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItems){
            localStorage.setItem(itemName, JSON.stringify(initialValue))
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItems);
            setItem(parsedItem);
          }
          setLoading(false);
        }
        catch (error){
          setError(true);
          setLoading(false);
        }
      }, 5000);      
    },[]);
    
    const saveItem = (newTodos) =>{
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    }
  
    return {
      item,
      saveItem,
      loading,
      error};
  }

  export {useLocalStorage};

  // const defaultTodos = [
//   {text : 'Madrugar', completed: true},
//   {text : 'Bañarse', completed: true},
//   {text : 'Trabajar', completed: false},
//   {text : 'Ir a cortarse el pelo', completed: false},
//   {text : 'Dormir', completed: false}
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
// localStorage.removeItem('TODOS_V1');