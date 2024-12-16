import React from "react";

function useLocalStorage(itemName, initialValue) {
    let localStorageItems = localStorage.getItem(itemName);
    let parsedItem;
    if(!localStorageItems){
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue;
    }else{
      parsedItem = JSON.parse(localStorageItems);
    }
    const [item, setItem] = React.useState(parsedItem);
    const saveItem = (newTodos) =>{
      localStorage.setItem(itemName, JSON.stringify(newTodos));
      setItem(newTodos);
    }
  
    return [item,saveItem];
  }

  export {useLocalStorage};