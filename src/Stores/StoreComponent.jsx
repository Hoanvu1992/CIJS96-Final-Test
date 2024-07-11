import { useState } from "react";
import StoreContext from "./store";

const StoreComponent = (props) => {
  const [todoLists, setTodoLists] = useState([]);
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const completedTodos = todoLists.filter((item) => {
    return item.completed;
  });

  return (
    <div>
      <StoreContext.Provider
        value={{
          todoLists,
          setTodoLists,
          todo,
          setTodo,
          completedTodos,
        }}
      >
        {props.children}
      </StoreContext.Provider>
    </div>
  );
};

export default StoreComponent;
