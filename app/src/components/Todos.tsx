import Skeleton from "@mui/material/Skeleton";
import AddBtn from "components/AddBtn";
import AddTaskDialog from "components/AddTaskDialog/AddTaskDialog";
import TodoCard from "components/TodoCard/TodoCard";
import TodoCounter from "components/TodoCounter/TodoCounter";
import { IUpdateTask, Todo, addTodo } from "ts/types";

interface Props {
  todos: Todo[];
  isLoading?: boolean;
  addTodo: (values: addTodo) => void;
  updateTask: (values: IUpdateTask) => void;
  openAddModal: boolean;
  handleOpenAddModal: () => void;
  handleCloseAddModal: () => void;
}

const Todos = ({
  isLoading,
  todos,
  addTodo,
  updateTask,
  openAddModal,
  handleOpenAddModal,
  handleCloseAddModal,
}: Props) => {
  const totalTasks = todos?.length;
  const tasksDone = todos?.filter((todo) => todo.status === "completed").length;

  return (
    <>
      <div>Todos</div>
      <TodoCounter tasksDone={tasksDone} totalTasks={totalTasks} />
      {isLoading && <Skeleton />}
      {todos &&
        todos.map((todo: Todo) => (
          <div key={todo.id}>
            <TodoCard data={todo} updateTask={updateTask} />
          </div>
        ))}
      <AddBtn handleOpen={handleOpenAddModal} />
      <AddTaskDialog
        open={openAddModal}
        handleClose={handleCloseAddModal}
        addTodo={addTodo}
      />
    </>
  );
};

export default Todos;
