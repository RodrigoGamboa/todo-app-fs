import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { deleteTask } from "services/apiRequests";
import { IDeleteTaskAlert, TaskId } from "ts/types";

interface Props {
  openAlertDialog: IDeleteTaskAlert;
  deleteTask: (id: TaskId) => void;
  handleClose: () => void;
}

const DeleteAlert = ({ openAlertDialog, handleClose }: Props) => {
  console.log(openAlertDialog.open);
  return (
    <Dialog open={openAlertDialog.open} onClose={handleClose}>
      <DialogContent>
        <DialogContentText>Delete task?</DialogContentText>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => deleteTask(openAlertDialog.taskId)}>
            Delete
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAlert;
