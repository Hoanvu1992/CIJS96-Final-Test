import { useContext } from "react";
import StoreContext from "../../Stores/store";
import { FaRegTrashCan } from "react-icons/fa6";
import { notification, Button } from "antd";

const CompletedTodos = () => {
  const { completedTodos, setTodoLists, todoLists } = useContext(StoreContext);
  const handleDelete = (id) => {
    setTodoLists(
      todoLists.filter((todo) => {
        console.log("🚀 ~ setTodoLists ~ todo:", todo);
        return todo.id !== id;
      })
    );
    localStorage.removeItem("task");
    notification.success({
      message: "Đã xóa thành công task",
    });
  };
  const handleDeleteAll = () => {
    setTodoLists([]);
    localStorage.removeItem("task");
    notification.success({
      message: "Đã xóa thành công tất cả task",
    });
  };

  return (
    <div>
      <div className="my-1">
        <h2 className="my-2 text-lg font-bold">Tasks đã hoàn thành</h2>
        <ul>
          {completedTodos.map((todo) => (
            <div key={todo.id} className="flex justify-between items-center">
              <li className="mx-3 my-2 line-through">{todo.task}</li>
              <FaRegTrashCan
                onClick={() => handleDelete(todo.id)}
                style={{ cursor: "pointer", color: "red" }}
              />
            </div>
          ))}
        </ul>
      </div>
      <div className="flex justify-end">
        <Button className="bg-red-500 text-white" onClick={handleDeleteAll}>
          Deleted all
        </Button>
      </div>
    </div>
  );
};

export default CompletedTodos;
