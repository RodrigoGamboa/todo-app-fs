import Dialog from "@mui/material/Dialog";
import EditTaskForm from "./EditTaskForm";

interface Props {
  open: boolean;
  handleClose: () => void;
  editTask: (values) => void;
}

const EditTask = ({ open, handleClose, editTask }: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <EditTaskForm editTask={editTask} />
    </Dialog>
  );
};

export default EditTask;
