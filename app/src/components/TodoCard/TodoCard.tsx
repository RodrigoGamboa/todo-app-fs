import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/EditNote";
import { Todo } from "ts/types";
import styles from "./TodoCard.module.scss";

interface Props {
  data: Todo;
}

const label = { inputProps: { "aria-label": "Checkbox" } };

const TodoCard = ({ data }: Props) => {
  return (
    <Card className={styles.root}>
      <CardActions>
        <Checkbox {...label} />
      </CardActions>
      <Typography>{data.title}</Typography>
      <CardActions>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
