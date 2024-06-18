import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/EditNote";
import { TodoStatus } from "enums/tasks";
import { IUpdateTask, TaskId, Todo } from "ts/types";
import styles from "./TodoCard.module.scss";

interface Props {
  data: Todo;
  updateTask: (values: IUpdateTask) => void;
  handleOpenAlertDialog: (taskId: TaskId) => void;
}

const label = { inputProps: { "aria-label": "controlled" } };

const TodoCard = ({ data, updateTask, handleOpenAlertDialog }: Props) => {
  return (
    <Card className={styles.root}>
      <CardActions>
        <Checkbox
          {...label}
          checked={data.status === TodoStatus.COMPLETED}
          onChange={() => updateTask({ id: data.id, status: data.status })}
        />
      </CardActions>
      <Typography>{data.title}</Typography>
      <CardActions>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleOpenAlertDialog(data.id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
