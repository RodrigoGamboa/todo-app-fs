import { TodoStatus } from "enums/tasks";
// export type TodoStatus = "pending" | "in-progress" | "completed";
export type TTaskStatus =
  | TodoStatus.COMPLETED
  | TodoStatus.IN_PROGRESS
  | TodoStatus.COMPLETED;
export type Todos = Todo[];
export type TaskId = string;

export interface Todo {
  id: TaskId;
  title: string;
  description: string;
  status: TTaskStatus;
  due_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface IUpdateTask {
  id: TaskId;
  status: TTaskStatus;
}

export interface addTodo {
  title: string;
  description: string;
  status: TodoStatus;
}
