import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { addTodo } from "ts/types";
import { TodoStatus } from "enums/tasks";

interface Props {
  addTodo: (values: addTodo) => void;
}

const AddTaskForm = ({ addTodo }: Props) => {
  const { control, handleSubmit } = useForm<addTodo>();

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <Controller
          render={({ field }) => (
            <TextField required label="Title" {...field} />
          )}
          name="title"
          control={control}
        />
        <Controller
          render={({ field }) => (
            <TextField required label="Description" {...field} />
          )}
          name="description"
          control={control}
        />
        <Controller
          defaultValue={TodoStatus.PENDING}
          render={({ field }) => (
            <Select required label="Status" {...field}>
              <MenuItem value={TodoStatus.PENDING}>Pending</MenuItem>
              <MenuItem value={TodoStatus.IN_PROGRESS}>In Progress</MenuItem>
              <MenuItem value={TodoStatus.COMPLETED}>Completed</MenuItem>
            </Select>
          )}
          name="status"
          control={control}
        />
      </DialogContent>
      <DialogActions>
        <Button type="submit">Add Task</Button>
      </DialogActions>
    </form>
  );
};

export default AddTaskForm;
