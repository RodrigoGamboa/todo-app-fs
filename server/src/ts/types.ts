export type TodoStatus = "pending" | "in-progress" | "completed";
export type Todos = Todo[];

export interface Todo {
  id_task: string;
  title: string;
  description: string;
  status: TodoStatus;
  due_date?: number;
  created_at: number;
  updated_at: number;
}

export interface addTodo {
  title: string;
  description: string;
  status: TodoStatus;
}
