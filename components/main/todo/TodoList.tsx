import React, { useEffect, useState } from "react";
import { getAllTodo, createTodo } from "../../../services/todoService";
import type { Todo } from "../../../types/Todo.types";
const TodoList = () => {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [error, setError] = useState<string | null>("");
  const [loading, setLoading] = useState<boolean>(false);
  const fetchTodos = async () => {
    setError(null);
    try {
      const data = await getAllTodo();
      setTodo(data);
    } catch (err) {
      setError("Lỗi khi lấy sản phẩm" + err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div>
      <h2>To do list</h2>
      <form action="">
        <input type="text" name="" id="" />
        <button type="submit">Submit</button>
      </form>
      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        <table border={1} cellPadding={8} style={{ marginTop: 16 }}>
          <thead>
            <tr></tr>
          </thead>
          <tbody>
            {todo?.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.id}</td>
                <td>{prod.userid}</td>
                <td>{prod.completed}</td>
                <td>{prod.title}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TodoList;
