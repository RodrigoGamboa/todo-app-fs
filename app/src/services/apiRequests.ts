import API from "enums/api";
import Fetch from "services/fetch";
import { addTodo } from "ts/types";

export const fetchTodos = async () => {
  return await Fetch.get(API.todos()).then(({ data }) => data);
};

export const sendTodo = async (values: addTodo) => {
  return await Fetch.post(API.add, values).then(({ data }) => data);
};
