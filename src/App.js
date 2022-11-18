import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction ,clearAll} from "./actions/TodoAction";
// import { useStore } from "react-redux";
//import { AddTodoAction, RemoveTodoAction } from "./Actions/TodoActions";
import "./App.css";


function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;



  const handleSubmit = (e) => {

    e.preventDefault();
    if (todo.length !=0){
      dispatch(AddTodoAction(todo),setTodo(""));
    }else{
      alert("ToDo Task Can't be Empty")
    }

  };

  const removeHandler = (t) => {
    console.log(t);
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
       
        <h2 style={{marginRight:55}}>Enter a Todo List</h2>
    
        <form onSubmit={handleSubmit} style=
        {{
          marginTop:30
        }}>
          <input
            placeholder="Enter a todo"
            style={{
              
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
         
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
            className="go"
          >
           Add
          </button>
          
          <ul className="allTodos" style=
        {{
          marginTop:30
        }}>
            {todos &&
              todos.map((t) => (
                <li key={t} className="singleTodo">
                  <span className="todoText">{t}</span>
                  <button
                    type="button"
                    style={{
                      padding: 12,
                      borderRadius: 25,
                      fontSize: 15,
                      marginLeft: 20,
                      backgroundColor:"orangered"
                    }}
                    onClick={() => removeHandler(t)}
                  >
                    delete
                  </button >
                </li>
              ))}
          </ul>
        </form>
        <button onClick={()=>dispatch(clearAll()) }
        className="remove"
        
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
            
          >
            RemoveAll
          </button>
      </header>
   
    </div>
  );
}

export default App;