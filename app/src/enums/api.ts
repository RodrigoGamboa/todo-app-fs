import { TaskId } from "ts/types";

const API_PROTOCOL = import.meta.env.DEV ? "http" : "https";
const API_SERVER = import.meta.env.VITE_API_SERVER;
const API_HOST = `${API_PROTOCOL}://${API_SERVER}`;

const API = {
  todos: () => `${API_HOST}/todos`,
  task: (taskId: TaskId) => `${API_HOST}/todos/${taskId}`,
  addTask: `${API_HOST}/add`,
  updateTask: (taskId: TaskId) => `${API_HOST}/updatetask/${taskId}`,
  deleteTask: (taskId: TaskId) => `${API_HOST}/deletetask/${taskId}`,
};

export default API;
