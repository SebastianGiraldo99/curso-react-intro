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