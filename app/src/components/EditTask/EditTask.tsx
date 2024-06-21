import Dialog from "@mui/material/Dialog";
import EditTaskForm from "./EditTaskForm";
import { IEditTaskForm } from "ts/types";

interface Props {
  open: boolean;
  handleClose: () => void;
  task: IEditTaskForm;
}

const EditTask = ({ open, handleClose, task }: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <EditTaskForm task={task} />
    </Dialog>
  );
};

export default EditTask;
