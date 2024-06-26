import { TodoStatus } from "enums/tasks";
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

export interface addTodo {
  title: string;
  description: string;
  status: TodoStatus;
}

export interface IUpdateTask {
  id: TaskId;
  status: TTaskStatus;
}

export interface IDeleteTaskAlert {
  taskId: TaskId;
  open: boolean;
}

export interface IEditTaskForm extends addTodo {
  taskId: TaskId;
}

export interface IEditTask extends IEditTaskForm {
  open: boolean;
}
