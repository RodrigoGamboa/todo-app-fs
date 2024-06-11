import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

interface Props {
  handleOpen: () => void;
}

const AddBtn = ({ handleOpen }: Props) => {
  return (
    <Box
      sx={{
        position: "absolute",
        right: 16,
        bottom: 16,
      }}
    >
      <Fab onClick={handleOpen}>
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default AddBtn;
