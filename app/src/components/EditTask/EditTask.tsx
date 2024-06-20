import Dialog from "@mui/material/Dialog";
import EditTaskForm from "./EditTaskForm";

interface Props {
  open: boolean;
  handleClose: () => void;
  //   editTask: IEditTaskForm;
}

const EditTask = ({ open, handleClose }: Props) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <EditTaskForm
      //   editTask={editTask}
      />
    </Dialog>
  );
};

export default EditTask;
