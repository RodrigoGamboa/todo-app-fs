import Skeleton from "@mui/material/Skeleton";
import AddBtn from "components/AddBtn";
import AddTaskDialog from "components/AddTaskDialog/AddTaskDialog";
import TodoCard from "components/TodoCard";
import { Todo, addTodo } from "ts/types";

interface Props {
  todos: Todo[];
  isLoading?: boolean;
  addTodo: (values: addTodo) => void;
  openAddModal: boolean;
  handleOpenAddModal: () => void;
  handleCloseAddModal: () => void;
}

const Todos = ({
  isLoading,
  todos,
  addTodo,
  openAddModal,
  handleOpenAddModal,
  handleCloseAddModal,
}: Props) => {
  return (
    <>
      <div>Todos</div>
      {isLoading && <Skeleton />}
      {todos &&
        todos.map((todo: Todo) => (
          <div key={todo.id}>
            <TodoCard data={todo} />
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
