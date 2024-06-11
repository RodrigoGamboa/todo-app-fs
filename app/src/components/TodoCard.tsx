import { CardContent } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import { Todo } from "ts/types";

interface Props {
  data: Todo;
}

const TodoCard = ({ data }: Props) => {
  return (
    <Card>
      <CardHeader title={data.title} />
      <CardContent>{data.description}</CardContent>
    </Card>
  );
};

export default TodoCard;
