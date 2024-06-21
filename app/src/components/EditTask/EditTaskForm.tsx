import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { IEditTaskForm } from "ts/types";

interface Props {
  task: IEditTaskForm;
}

const EditTaskForm = ({ task }: Props) => {
  const { control, handleSubmit } = useForm();

  return (
    <form
    // onSubmit={handleSubmit(editTask)}
    >
      <DialogTitle>Edit Task</DialogTitle>
      <DialogContent>
        <Controller
          defaultValue={task?.title}
          render={({ field }) => (
            <TextField required label="Title" {...field} />
          )}
          name="title"
          control={control}
        />
        <Controller
          defaultValue={task?.description}
          render={({ field }) => (
            <TextField required label="Description" {...field} />
          )}
          name="description"
          control={control}
        />
        <Controller
          defaultValue={task?.status}
          render={({ field }) => (
            <Select required label="Status" {...field}>
              <MenuItem
              //   value={TodoStatus.PENDING}
              >
                Pending
              </MenuItem>
              <MenuItem
              //   value={TodoStatus.IN_PROGRESS}
              >
                In Progress
              </MenuItem>
              <MenuItem
              //   value={TodoStatus.COMPLETED}
              >
                Completed
              </MenuItem>
            </Select>
          )}
          name="status"
          control={control}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit">Save</Button>
      </DialogActions>
    </form>
  );
};

export default EditTaskForm;
