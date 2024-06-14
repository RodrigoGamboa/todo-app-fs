import { TaskId } from "ts/types";

const API_PROTOCOL = import.meta.env.DEV ? "http" : "https";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const API_HOST = `${API_PROTOCOL}://${API_SERVER}`;

const API = {
  todos: () => `${API_HOST}/todos`,
  // updateTask: (taskId: TaskId) => `${API_HOST}/todos/${taskId}`,
  updateTask: `${API_HOST}/todos/100`,
  addTask: `${API_HOST}/add`,
};

export default API;
