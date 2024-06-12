import Box from "@mui/material/Box";
import styles from "./TodoCounter.module.scss";
import Typography from "@mui/material/Typography";

interface Props {
  tasksDone: number;
  totalTasks: number;
}

const TodoCounter = ({ tasksDone, totalTasks }: Props) => {
  return (
    <Box className={styles.root}>
      <Box>
        <Typography>Todo Done</Typography>
        <Typography>keep it up</Typography>
      </Box>
      <Box>
        {tasksDone}/{totalTasks}
      </Box>
    </Box>
  );
};

export default TodoCounter;
