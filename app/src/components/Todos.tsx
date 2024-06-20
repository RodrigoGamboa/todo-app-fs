import Skeleton from "@mui/material/Skeleton";
import AddBtn from "components/AddBtn";
import AddTaskDialog from "components/AddTaskDialog/AddTaskDialog";
import DeleteAlert from "components/DeleteAlert/DeleteAlert";
import EditTask from "components/EditTask/EditTask";
import TodoCard from "components/TodoCard/TodoCard";
import TodoCounter from "components/TodoCounter/TodoCounter";
import { IDeleteTaskAlert, IUpdateTask, TaskId, Todo, addTodo } from "ts/types";

interface Props {
  todos: Todo[];
  isLoading?: boolean;
  addTodo: (values: addTodo) => void;
  updateTask: (values: IUpdateTask) => void;
  deleteTask: (id: TaskId) => void;
  openAddModal: boolean;
  openEditTask: boolean;
  openAlertDialog: IDeleteTaskAlert;
  handleOpenAddModal: () => void;
  handleCloseAddModal: () => void;
  handleOpenEditTask: () => void;
  handleCloseEditTask: () => void;
  handleOpenAlertDialog: (taskId: TaskId) => void;
  handleCloseAlertDialog: () => void;
}

const Todos = ({
  isLoading,
  todos,
  addTodo,
  updateTask,
  deleteTask,
  openAddModal,
  openEditTask,
  openAlertDialog,
  handleOpenAddModal,
  handleCloseAddModal,
  handleOpenEditTask,
  handleCloseEditTask,
  handleOpenAlertDialog,
  handleCloseAlertDialog,
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
            <TodoCard
              data={todo}
              updateTask={updateTask}
              handleOpenEditTask={handleOpenEditTask}
              handleOpenAlertDialog={handleOpenAlertDialog}
            />
          </div>
        ))}
      <AddBtn handleOpen={handleOpenAddModal} />
      <AddTaskDialog
        open={openAddModal}
        handleClose={handleCloseAddModal}
        addTodo={addTodo}
      />
      <EditTask
        open={openEditTask}
        handleClose={handleCloseEditTask}
        // editTask={editTask}
      />
      <DeleteAlert
        openAlertDialog={openAlertDialog}
        deleteTask={deleteTask}
        handleClose={handleCloseAlertDialog}
      />
    </>
  );
};

export default Todos;
