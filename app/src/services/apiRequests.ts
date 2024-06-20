import API from "enums/api";
import Fetch from "services/fetch";
import { IUpdateTask, TaskId, addTodo } from "ts/types";

export const fetchTodos = async () => {
  return await Fetch.get(API.todos()).then(({ data }) => data);
};

export const fetchTask = async (id: TaskId) => {
  return await Fetch.get(API.task(id)).then(({ data }) => data);
};

export const sendTodo = async (values: addTodo) => {
  return await Fetch.post(API.addTask, values).then(({ data }) => data);
};

export const updateTask = async (values: IUpdateTask) => {
  return await Fetch.patch(API.updateTask(values.id), values).then(
    ({ data }) => data
  );
};

export const deleteTask = async (id: TaskId) => {
  return await Fetch.delete(API.deleteTask(id)).then(({ data }) => data);
};
