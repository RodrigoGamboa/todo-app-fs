export type TodoStatus = "pending" | "in-progress" | "completed";
export type Todos = Todo[];

export interface Todo {
  id: string;
  title: string;
  description: string;
  status: TodoStatus;
  due_date: Date;
  created_at: Date;
  updated_at: Date;
}

export interface addTodo {
  title: string;
  description: string;
  status: TodoStatus;
}
