import axiosClient from "../src/api/axiosClient";
import type { Todo } from "../types/Todo.types";
export const getAllTodo = async (): Promise<Todo[]> => {
  const response = await axiosClient.get<Todo[]>("/todos");
  return response.data;
};
export const createTodo = async (data: Omit<Todo, "id">) => {
  const response = await axiosClient.post<Todo>("/products", data);
  return response.data;
};
