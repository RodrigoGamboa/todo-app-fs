import API from "enums/api";
import Fetch from "services/fetch";
import { IUpdateTask, addTodo } from "ts/types";

export const fetchTodos = async () => {
  return await Fetch.get(API.todos()).then(({ data }) => data);
};

// export const updateTask = async (values: IUpdateTask) => {
//   return await Fetch.put(API.updateTask(values.id), values).then(
//     ({ data }) => data
//   );
// };

export const updateTask = async (values: IUpdateTask) => {
  return await Fetch.post(API.updateTask, values).then(({ data }) => data);
};

export const sendTodo = async (values: addTodo) => {
  return await Fetch.post(API.addTask, values).then(({ data }) => data);
};
