export const AddTodoAction = (todo) => (dispatch) => {
    dispatch({
      type: "ADD_TODO_SUCCESS",
      payload: todo,
    });
  };
  
  export const RemoveTodoAction = (todo) => (dispatch, getState) => {
    const {
      Todo: { todos },
    } = getState();

   
  
    dispatch({
      type: "REMOVE_TODO_SUCCESS",
      payload: todos.filter((t) => todo !== t),
      
    });

    
 
    
  };
  export const clearAll = ()=>{
    return {type:"clearAll"}
    
   }
     