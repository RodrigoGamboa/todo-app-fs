import { Controller, useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import { addTodo } from "ts/types";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

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
          render={({ field }) => (
            <Select required label="Status" {...field}>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in-progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
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
