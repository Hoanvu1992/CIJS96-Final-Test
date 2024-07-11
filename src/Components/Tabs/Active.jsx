import { Button, Input, notification } from "antd";
import { useContext } from "react";
import StoreContext from "../../Stores/store";
import { useState } from "react";
import { useEffect } from "react";

const Active = () => {
  const { todoLists, setTodoLists, todo, setTodo } = useContext(StoreContext);
  const [selectedTodos, setSelectedTodos] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem("task");
    if (storedTodos) {
      setTodoLists(JSON.parse(storedTodos));
    }
  }, [setTodoLists]);

  const handleGetTodo = (value) => {
    const randomId = Math.floor(Math.random() * 100000);
    const todoObj = {
      id: randomId,
      task: value,
      completed: false,
    };
    setTodo(todoObj);
  };

  const handleSubmit = () => {
    setTodoLists((prev) => {
      const updatedList = [...prev, todo];
      localStorage.setItem("task", JSON.stringify(updatedList));
      return updatedList;
    });
    setTodo({
      id: "",
      task: "",
      completed: false,
    });
    notification.success({
      message: "Thêm công việc thành công",
    });
  };

  const handleCheckboxChange = (todoId) => {
    setSelectedTodos((prev) => {
      if (prev.includes(todoId)) {
        return prev.filter((id) => id !== todoId);
      } else {
        return [...prev, todoId];
      }
    });
  };

  const handleComplete = () => {
    const updatedTodos = todoLists.map((todo) => {
      if (selectedTodos.includes(todo.id)) {
        return { ...todo, completed: true };
      }
      return todo;
    });
    setTodoLists(updatedTodos);
    setSelectedTodos([]);
    notification.success({
      message: "Bạn đã hoàn thành task này",
    });
    localStorage.setItem("task", JSON.stringify(updatedTodos));
  };

  return (
    <div>
      <div>
        <Input
          className="w-2/3 mx-10"
          placeholder="Add details"
          onChange={(e) => handleGetTodo(e.target.value)}
          value={todo.task}
        />
        <Button className="bg-blue-500 text-white" onClick={handleSubmit}>
          ADD
        </Button>
      </div>

      <div className="my-3">
        <ul className="m-10">
          {todoLists.map((todo) => {
            return (
              <div key={todo.id} className="flex justify-between items-center">
                <div className="flex justify-start items-center">
                  <input
                    type="checkbox"
                    onClick={() => handleCheckboxChange(todo.id)}
                  />

                  <li
                    className="mx-2 p-3"
                    style={
                      todo.completed
                        ? { textDecoration: "line-through", color: "red" }
                        : null
                    }
                  >
                    {todo.task}
                  </li>
                </div>
                <div className="flex justify-end">
                  {selectedTodos.length > 0 && (
                    <Button
                      className="bg-green-500 text-white"
                      onClick={handleComplete}
                    >
                      Hoàn thành
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Active;
