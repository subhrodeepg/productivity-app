import {
  Container,
  Button,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import KeyBoardIconRight from "@material-ui/icons/KeyboardArrowRight";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    diplay: "block",
  },
  field_bottom: {
    marginBottom: 20,
    display: "block",
  },
  dropdown: {
    marginBottom: 20
  }
});

function NewTodoPage() {
  const classes = useStyles();
  const history = useNavigate();
  const [text, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && time && date) {
      fetch("http://localhost:8000/api/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ text, time, date }),
      }).then(history("/"));
    }
  };
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Todo
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Todo Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        ></TextField>

        <TextField
          onChange={(e) => setTime(e.target.value)}
          className={classes.field_bottom}
          label="Todo Time"
          variant="outlined"
          color="secondary"
          fullWidth
          required
        ></TextField>
        <FormControl 
        className={classes.dropdown}
        fullWidth
        color="secondary"
        required>
          <InputLabel>Date</InputLabel>
          <Select
            value={date}
            label="Date"
            onChange={(e) => setDate(e.target.value)}
          >
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
          </Select>
        </FormControl>

        <Button
          onClick={() => console.log("button has been clicked")}
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyBoardIconRight />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default NewTodoPage;
