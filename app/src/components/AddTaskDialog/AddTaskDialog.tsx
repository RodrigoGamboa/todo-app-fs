import Dialog from "@mui/material/Dialog";
import { addTodo } from "ts/types";
import AddTaskForm from "./AddTaskForm";

interface Props {
  open: boolean;
  handleClose: () => void;
  addTodo: (values: addTodo) => void;
}

const AddTaskDialog = ({ open, handleClose, addTodo }: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <AddTaskForm addTodo={addTodo} />
    </Dialog>
  );
};

export default AddTaskDialog;
